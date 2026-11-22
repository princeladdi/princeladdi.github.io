// "By the numbers": KPI tiles and charts. Project counts are computed from window.PROJECTS,
// so adding or removing a project updates every figure automatically.
(function () {
  const P = window.PROJECTS || [];
  const cats = window.CATEGORIES || [];
  const catName = (k) => (cats.find(([c]) => c === k) || [, k])[1];
  const text = (p) => [p.title, p.kicker, p.summary, ...(p.features || [])].join(" ");
  const has = (re) => P.filter((p) => re.test(text(p))).length;
  const SVGNS = "http://www.w3.org/2000/svg";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Keep the hero project count in sync with the data
  document.querySelectorAll("[data-projects]").forEach((el) => { el.dataset.count = P.length; el.textContent = P.length; });

  // ---------- KPI tiles ----------
  const stores = P.filter((p) => p.link && /store|google play|app store|epic|quest/i.test(p.link[0])).length;
  const xr = P.filter((p) => p.cat === "xr").length;
  const multi = has(/multiplayer|online|pvp|1 vs 1|5v5/i);
  // Hero already shows years, project count, store listings and downloads, so these four are different.
  const kpis = [
    [xr, "AR / VR & health projects", "VR training, rehab, WebAR, LiDAR"],
    [multi, "projects with multiplayer", "Photon, Netcode, WebSockets"],
    ["7–10", "person team led", "developers, mentoring and delivery"],
    ["2", "engines at senior level", "Unity (C#) and Unreal (C++, Blueprints)"],
  ];
  const kg = document.getElementById("kpis");
  if (kg) kg.innerHTML = kpis.map(([v, l, s]) => `<div class="kpi reveal in"><b>${esc(v)}</b><span>${esc(l)}</span><em>${esc(s)}</em></div>`).join("");

  // ---------- Tooltip ----------
  const tip = document.getElementById("chart-tip");
  function showTip(e, html) {
    if (!tip) return;
    tip.innerHTML = html; tip.classList.add("show");
    const r = tip.getBoundingClientRect();
    let x = e.clientX + 14, y = e.clientY - r.height - 12;
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - 14;
    if (y < 8) y = e.clientY + 18;
    tip.style.transform = `translate(${x}px, ${y}px)`;
  }
  const hideTip = () => tip && tip.classList.remove("show");

  function table(id, head, rows) {
    const t = document.getElementById(id);
    if (t) t.innerHTML = `<table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }

  // ---------- Horizontal bar chart (single series) ----------
  function bars(id, data, unit) {
    const host = document.getElementById(id);
    if (!host) return;
    const max = Math.max(...data.map((d) => d.value), 1);
    host.innerHTML = "";
    const list = document.createElement("div");
    list.className = "hbars";
    data.forEach((d) => {
      const row = document.createElement("div");
      row.className = "hbar";
      row.tabIndex = 0;
      row.innerHTML = `<span class="hbar-label">${esc(d.label)}</span><span class="hbar-track"><span class="hbar-fill" style="--w:${(d.value / max) * 100}%"></span></span><span class="hbar-value">${d.value}</span>`;
      const html = `<b>${esc(d.label)}</b><br>${d.value} ${unit}${d.value === 1 ? "" : "s"}${d.note ? `<br><small>${esc(d.note)}</small>` : ""}`;
      row.addEventListener("mousemove", (e) => showTip(e, html));
      row.addEventListener("mouseleave", hideTip);
      row.addEventListener("focus", () => { const r = row.getBoundingClientRect(); showTip({ clientX: r.right - 40, clientY: r.top }, html); });
      row.addEventListener("blur", hideTip);
      list.appendChild(row);
    });
    host.appendChild(list);
    // animate in when visible
    const go = () => list.classList.add("grow");
    if ("IntersectionObserver" in window) { const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { go(); io.disconnect(); } }), { threshold: 0.3 }); io.observe(list); } else go();
  }

  // Projects by area
  const areaData = (window.GENRE_ORDER || []).map((k) => {
    const items = P.filter((p) => p.cat === k);
    return { label: catName(k), value: items.length, note: items.map((p) => p.title).slice(0, 4).join(", ") + (items.length > 4 ? "…" : "") };
  }).sort((a, b) => b.value - a.value);
  bars("chart-areas", areaData, "project");
  table("table-areas", ["Area", "Projects"], areaData.map((d) => [d.label, d.value]));

  // Technology across projects (keyword match over each project's text)
  const tech = [
    ["Unity", /unity/i],
    ["Virtual reality (VR)", /\bVR\b|virtual reality|meta quest/i],
    ["Multiplayer / online", /multiplayer|online|pvp|1 vs 1|5v5/i],
    ["Mobile (iOS / Android)", /mobile|ios|android/i],
    ["Augmented reality (AR)", /\bAR\b|augmented|webar|lidar/i],
    ["Unreal Engine", /unreal/i],
    ["AI / behaviour trees", /\bAI\b|behaviou?r tree/i],
  ].map(([label, re]) => ({ label, value: has(re) })).filter((d) => d.value > 0).sort((a, b) => b.value - a.value);
  bars("chart-tech", tech, "project");
  table("table-tech", ["Technology", "Projects"], tech.map((d) => [d.label, d.value]));

  // ---------- Career timeline (Gantt) ----------
  const ENG = { unity: ["Unity", "#e4572e"], unreal: ["Unreal Engine", "#3b6fb6"], other: ["Engine not stated", "#2a9d8f"] };
  const now = new Date();
  const roles = [
    { role: "Unity Developer", org: "OffsureIT Solutions", from: [2018, 11], to: [2022, 2], eng: "unity" },
    { role: "Senior Game Developer", org: "OffsureIT Solutions", from: [2022, 2], to: [2023, 2], eng: "other" },
    { role: "Senior Game Developer (Unreal)", org: "Ediiie · Fractional Uprising", from: [2023, 4], to: [2023, 8], eng: "unreal" },
    { role: "Senior Game Developer (Unity)", org: "Ediiie · Vulcan Forged", from: [2023, 8], to: [2024, 9], eng: "unity" },
    { role: "Senior VR Developer (Unreal)", org: "Ediiie · Carespace", from: [2024, 10], to: [2025, 4], eng: "unreal" },
    { role: "Senior VR Developer (Unity)", org: "CogniHab", from: [2025, 5], to: [now.getFullYear(), now.getMonth()], eng: "unity" },
  ];
  const mIdx = ([y, m]) => y * 12 + m;
  const months = (r) => mIdx(r.to) - mIdx(r.from) + 1;
  const fmt = ([y, m]) => new Date(y, m, 1).toLocaleString("en", { month: "short", year: "numeric" });
  const dur = (n) => { const y = Math.floor(n / 12), m = n % 12; return [y ? `${y} yr${y > 1 ? "s" : ""}` : "", m ? `${m} mo` : ""].filter(Boolean).join(" "); };

  const lg = document.getElementById("legend-timeline");
  if (lg) {
    const totals = {};
    roles.forEach((r) => (totals[r.eng] = (totals[r.eng] || 0) + months(r)));
    lg.innerHTML = Object.entries(ENG).map(([k, [n, c]]) => `<span><i style="background:${c}"></i>${n} <small>${dur(totals[k] || 0)}</small></span>`).join("");
  }

  const host = document.getElementById("chart-timeline");
  function drawTimeline() {
    if (!host) return;
    const W = Math.max(host.clientWidth, 300);
    const narrow = W < 640;
    const labelW = narrow ? 0 : 250, rowH = narrow ? 50 : 40, top = 8, axisH = 26;
    const H = top + roles.length * rowH + axisH;
    const start = mIdx([2018, 0]), end = mIdx([now.getFullYear(), 11]) + 1;
    const x = (m) => labelW + ((m - start) / (end - start)) * (W - labelW - 8);
    const svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("width", W); svg.setAttribute("height", H);
    svg.setAttribute("role", "img"); svg.setAttribute("aria-label", "Career timeline by engine, 2018 to today");
    let g = "";
    for (let y = 2018; y <= now.getFullYear() + 1; y++) {
      const gx = x(y * 12);
      if (gx > W - 4) break;
      g += `<line class="tl-grid" x1="${gx}" x2="${gx}" y1="${top}" y2="${H - axisH}"/>`;
      if (y <= now.getFullYear()) g += `<text class="tl-axis" x="${gx + 4}" y="${H - 8}">${narrow ? "’" + String(y).slice(2) : y}</text>`;
    }
    roles.forEach((r, i) => {
      const y0 = top + i * rowH;
      const bx = x(mIdx(r.from)), bw = Math.max(x(mIdx(r.to) + 1) - bx - 2, 6);
      const by = narrow ? y0 + 22 : y0 + 10, bh = narrow ? 16 : 20;
      if (!narrow) g += `<text class="tl-label" x="0" y="${y0 + 20}">${esc(r.role)}</text><text class="tl-sub" x="0" y="${y0 + 33}">${esc(r.org)}</text>`;
      else g += bx > W / 2
        ? `<text class="tl-label" text-anchor="end" x="${bx + bw}" y="${y0 + 15}">${esc(r.role)}</text>`
        : `<text class="tl-label" x="${bx}" y="${y0 + 15}">${esc(r.role)}</text>`;
      g += `<rect class="tl-bar" data-i="${i}" x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="4" fill="${ENG[r.eng][1]}"/>`;
      g += `<rect class="tl-hit" data-i="${i}" x="${labelW ? 0 : bx}" y="${y0}" width="${labelW ? W : bw}" height="${rowH}" fill="transparent"/>`;
    });
    svg.innerHTML = g;
    host.innerHTML = ""; host.appendChild(svg);
    // Keep every label inside the chart
    svg.querySelectorAll(".tl-label").forEach((t) => {
      const b = t.getBBox();
      if (b.x < 0) { t.setAttribute("text-anchor", "start"); t.setAttribute("x", 0); }
      else if (b.x + b.width > W) { t.setAttribute("text-anchor", "end"); t.setAttribute("x", W); }
    });
    svg.querySelectorAll(".tl-hit").forEach((h) => {
      const r = roles[+h.dataset.i];
      const html = `<b>${esc(r.role)}</b><br>${esc(r.org)}<br>${fmt(r.from)} – ${r === roles[roles.length - 1] ? "today" : fmt(r.to)} · ${dur(months(r))}<br><small>${ENG[r.eng][0]}</small>`;
      h.addEventListener("mousemove", (e) => { showTip(e, html); svg.querySelector(`.tl-bar[data-i="${h.dataset.i}"]`).classList.add("on"); });
      h.addEventListener("mouseleave", () => { hideTip(); svg.querySelectorAll(".tl-bar.on").forEach((b) => b.classList.remove("on")); });
    });
  }
  drawTimeline();
  let lastW = innerWidth;
  addEventListener("resize", () => { if (innerWidth !== lastW) { lastW = innerWidth; drawTimeline(); } });
  table("table-timeline", ["Role", "Company", "From", "To", "Engine"], roles.map((r, i) => [r.role, r.org, fmt(r.from), i === roles.length - 1 ? "today" : fmt(r.to), ENG[r.eng][0]]));
})();
