// Project data. Projects without "loop"/"poster" show a styled placeholder card.
// To add a video later: put poster.jpg, loop.mp4 and full.mp4 in assets/work/<slug>/ and fill in
// "loop", "poster" and "full" like the Vulcan / Open Season entries below.
window.PROJECTS = [
 {
  "slug": "cognihab",
  "title": "CogniHab VR Rehab",
  "kicker": "VR Rehabilitation · Body Tracking · Unity",
  "cat": "xr",
  "company": "CogniHab",
  "year": "2025 – present",
  "summary": "In-house VR rehabilitation product. I drive front-end VR development and lead a 3-member team, taking prototypes from concept to working builds.",
  "features": [
   "Real-time scanning of the user's body movement",
   "Local and remote connection streaming",
   "On-demand fetching of video data",
   "Several working prototypes, from concept to execution",
   "Leading front-end engineering and mentoring a 3-member team"
  ],
  "featured": true,
  "link": null,
  "icon": "VR"
 },
 {
  "slug": "carespace",
  "title": "Carespace Motion Tracking",
  "kicker": "Pose Tracking · Healthcare · Unreal Engine",
  "cat": "xr",
  "company": "Ediiie · Client: Carespace",
  "year": "2024 – 25",
  "summary": "Took over a half-finished project from an external team and delivered it on my own as the only developer.",
  "features": [
   "Integrated the MediaPipe plugin for pose tracking",
   "Replicated the user's movement on a 3D humanoid rig in real time",
   "Built the WebSocket communication layer",
   "Resolved 400+ technical tickets in production support"
  ],
  "featured": false,
  "link": null,
  "icon": "UE"
 },
 {
  "slug": "open_season",
  "title": "Open Season",
  "kicker": "5v5 Battle Royale · Multiplayer · Unreal Engine",
  "cat": "multi",
  "company": "Ediiie · Client: Fractional Uprising Studios",
  "year": "2023",
  "summary": "Battle royale shooter on the Epic Games Store. In a 2-person team, I built the core multiplayer under tight deadlines.",
  "features": [
   "Core multiplayer for 5v5 battle royale matches",
   "Found and fixed gameplay desync on unstable networks",
   "Stability fixes across changing network conditions",
   "Shipped under tight production deadlines"
  ],
  "featured": true,
  "link": [
   "Epic Games Store",
   "https://store.epicgames.com/p/openseason-75e993?lang=en-US"
  ],
  "loop": "assets/work/open_season/loop.mp4",
  "poster": "assets/work/open_season/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/open_season/full.mp4"
  }
 },
 {
  "slug": "vulcan_runner",
  "title": "Vulcan Runner",
  "kicker": "Infinite Runner · Mobile · Unity",
  "cat": "games",
  "company": "Ediiie · Client: Vulcan Forged",
  "year": "2023 – 24",
  "summary": "Infinite runner through lava dungeons and ancient ruins, live on Google Play.",
  "features": [
   "Core gameplay systems",
   "Avatar customisation",
   "Power-ups",
   "Performance optimisation for mobile"
  ],
  "featured": false,
  "link": [
   "Google Play",
   "https://play.google.com/store/apps/details?id=com.vulcan.runner&hl=en_IN"
  ],
  "loop": "assets/work/vulcan_runner/loop.mp4",
  "poster": "assets/work/vulcan_runner/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/vulcan_runner/full.mp4"
  }
 },
 {
  "slug": "vulcan_tower_defense",
  "title": "Vulcan's Tower Defense",
  "kicker": "Tower Defense · Mobile · Unity",
  "cat": "games",
  "company": "Ediiie · Client: Vulcan Forged",
  "year": "2023 – 24",
  "summary": "Real-time tower defense in a Greek-Roman myth world, live on the App Store. I designed the gameplay systems and led a 3-person team on performance.",
  "features": [
   "Designed the gameplay systems",
   "Led a 3-person team",
   "Performance optimisation across devices"
  ],
  "featured": true,
  "link": [
   "App Store",
   "https://apps.apple.com/in/app/vulcans-tower-defense/id1658249651"
  ],
  "loop": "assets/work/vulcan_tower_defense/loop.mp4",
  "poster": "assets/work/vulcan_tower_defense/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/vulcan_tower_defense/full.mp4"
  }
 },
 {
  "slug": "aviation_maintenance_sim",
  "title": "Aviation Maintenance Sim",
  "kicker": "VR Training · Aviation · Unity",
  "cat": "xr",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "VR training simulator for an EASA-certified training centre — part of a programme of 150+ mechanical engineering modules such as the jet engine, each with Learn and Practice modes and a proficiency score.",
  "features": [
   "Task: clean the aircraft windshield, in Learn or Practice mode",
   "A tablet checklist lists every step of the procedure",
   "Step 1 — Fill a bucket with water at the hangar sink",
   "Step 2 — Rinse the windshield with a wet cleaning cloth",
   "Step 3 — Spray detergent and scrub the windshield",
   "Step 4 — Wipe the windshield dry with a chamois",
   "Result — scored on time, accuracy and safety"
  ],
  "vertical": false,
  "featured": false,
  "link": null,
  "loop": "assets/work/aviation_maintenance_sim/loop.mp4",
  "poster": "assets/work/aviation_maintenance_sim/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/aviation_maintenance_sim/full.mp4"
  }
 },
 {
  "slug": "jet_engine_vr",
  "title": "Jet Engine VR Training",
  "kicker": "VR Training · AI Tutor · Unity",
  "cat": "xr",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "VR jet-engine training with a virtual instructor and an AI tutor that answers trainees' questions in text and voice.",
  "features": [
   "Virtual instructor beside a cutaway jet engine",
   "AI tutor answers questions in text and voice",
   "Guided lessons with objectives and controls",
   "Point at any part to highlight and name it",
   "Labels for rotor, stator, exhaust cone and more",
   "Ask follow-up questions in natural language"
  ],
  "vertical": false,
  "featured": false,
  "link": null,
  "loop": "assets/work/jet_engine_vr/loop.mp4",
  "poster": "assets/work/jet_engine_vr/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/jet_engine_vr/full.mp4"
  }
 },
 {
  "slug": "nia_human_anatomy",
  "title": "NIA Human Anatomy",
  "kicker": "Ed-Tech · 3D Anatomy · Unity",
  "cat": "xr",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "3D/VR anatomy education for a Rajasthan Government project, covering all 11 human body systems with labelled models and guided topics.",
  "features": [
   "Dive from the body into a 3D skin model",
   "Navigate topics with a VR laser pointer",
   "Every skin layer labelled in 3D",
   "Description panels for every topic",
   "Pancreatic islets: alpha, beta and delta cells",
   "Fertilisation explained at the cell level"
  ],
  "vertical": false,
  "featured": false,
  "link": null,
  "loop": "assets/work/nia_human_anatomy/loop.mp4",
  "poster": "assets/work/nia_human_anatomy/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/nia_human_anatomy/full.mp4"
  }
 },
 {
  "slug": "tartarus_vr",
  "title": "Tartarus VR",
  "kicker": "Virtual Reality · Meta Quest · Unity",
  "cat": "xr",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "Published VR action game on the Meta Quest store: melee combat against towering demons, God Powers and portals.",
  "features": [
   "Melee combat against towering demons",
   "Treasure chests drop with God Power rewards",
   "Spend Demon Essence to unlock God Powers",
   "Sweeping sword strikes with slash effects",
   "Unlock the portal to enter the next zone",
   "Fight armored demons in fiery canyons"
  ],
  "vertical": false,
  "featured": false,
  "link": [
   "Meta Quest store",
   "https://www.meta.com/experiences/6620771114718251/"
  ],
  "loop": "assets/work/tartarus_vr/loop.mp4",
  "poster": "assets/work/tartarus_vr/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/tartarus_vr/full.mp4"
  }
 },
 {
  "slug": "sinverse",
  "title": "Sinverse",
  "kicker": "Multiplayer Open World · Unity",
  "cat": "multi",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "Multiplayer open-world metaverse with team battles, third-person gunplay and timed matches.",
  "features": [
   "Team battles in a multiplayer open world",
   "Third-person gunfights with enemy highlights",
   "Crouch behind cover and aim over the shoulder",
   "Timed team matches with live kill scores",
   "Respawn with a protective shield"
  ],
  "vertical": false,
  "featured": false,
  "link": [
   "sinverse.com",
   "https://sinverse.com/"
  ],
  "loop": "assets/work/sinverse/loop.mp4",
  "poster": "assets/work/sinverse/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/sinverse/full.mp4"
  }
 },
 {
  "slug": "ar_car_controller",
  "title": "AR Car Controller",
  "kicker": "Augmented Reality · LiDAR · Unity",
  "cat": "xr",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "iOS AR driving: LiDAR scans the room into a live mesh and a virtual car drives and collides with real furniture.",
  "features": [
   "Choose your car and mode from an AR menu",
   "LiDAR scans the room into a live 3D mesh",
   "Drop a virtual car into the real world",
   "Drive with on-screen steering and pedals",
   "Real-world interaction with scanned furniture"
  ],
  "vertical": false,
  "featured": false,
  "link": null,
  "loop": "assets/work/ar_car_controller/loop.mp4",
  "poster": "assets/work/ar_car_controller/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/ar_car_controller/full.mp4"
  }
 },
 {
  "slug": "hp_server_vr",
  "title": "Server Hardware VR Training",
  "kicker": "VR · Hardware Training · Unity",
  "cat": "xr",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "VR server-hardware training on a holographic stage, with exploded views, spec callouts and an X-ray mode.",
  "features": [
   "3D server model on a holographic stage",
   "Processors float in with spec callouts",
   "Open-chassis view highlights the GPU bays",
   "Switch to X-ray mode from the hologram menu",
   "X-ray view labels drives, RAM, fans and coolant",
   "Point at a part to highlight it in X-ray view"
  ],
  "vertical": false,
  "featured": false,
  "link": null,
  "loop": "assets/work/hp_server_vr/loop.mp4",
  "poster": "assets/work/hp_server_vr/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/hp_server_vr/full.mp4"
  }
 },
 {
  "slug": "airportverse",
  "title": "AirportVerse",
  "kicker": "VR Training · Unity",
  "cat": "xr",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "A VR airport journey: check-in, baggage X-ray, security and body scan, through to the departure gate.",
  "features": [
   "Start the journey at the airport entrance",
   "Walk into a detailed 3D departures hall",
   "Screen your bag through the X-ray scanner",
   "Check in with an animated airline agent",
   "Security check: tray scan and metal detector",
   "Body scan by an animated security officer",
   "Glass-roofed concourse with café and shops"
  ],
  "vertical": false,
  "featured": false,
  "link": null,
  "loop": "assets/work/airportverse/loop.mp4",
  "poster": "assets/work/airportverse/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/airportverse/full.mp4"
  }
 },
 {
  "slug": "horror_survivor",
  "title": "Horror Survivor",
  "kicker": "First-Person Survival Horror · Unity",
  "cat": "games",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "First-person survival horror with flashlight exploration, zombie hordes and an AI fox companion.",
  "features": [
   "Survive the night in a haunted forest",
   "Explore by flashlight as zombies close in",
   "An AI fox companion fights by your side",
   "Zombie hordes hunt the player through the forest",
   "Score, ammo and health systems with damage feedback",
   "Game over screen with high-score tracking"
  ],
  "vertical": false,
  "featured": false,
  "link": null,
  "loop": "assets/work/horror_survivor/loop.mp4",
  "poster": "assets/work/horror_survivor/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/horror_survivor/full.mp4"
  }
 },
 {
  "slug": "chuck_the_sallar",
  "title": "Chuck the Sailor",
  "kicker": "Endless Runner · Mobile · Unity",
  "cat": "games",
  "company": "Igniva Solutions",
  "year": "2016–18",
  "summary": "Endless runner: outrun the Fat Lazy Cop through the city, dodge traffic and clear level targets.",
  "features": [
   "Outrun the Fat Lazy Cop through the city",
   "Dodge traffic and grab coin trails",
   "Jump car roofs and clear barricades",
   "Cutscenes and three-star level results",
   "Level map with distance targets",
   "Leap over cars with the cop on your heels"
  ],
  "vertical": true,
  "featured": false,
  "link": null,
  "loop": "assets/work/chuck_the_sallar/loop.mp4",
  "poster": "assets/work/chuck_the_sallar/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/chuck_the_sallar/full.mp4"
  }
 },
 {
  "slug": "ar_furniture",
  "title": "AR Furniture",
  "kicker": "WebAR · 8th Wall",
  "cat": "xr",
  "company": "Ediiie",
  "year": "2023–24",
  "summary": "Browser-based WebAR (8th Wall) that lets shoppers place products on their own walls before buying.",
  "features": [
   "Find a spot with the on-screen placement ring",
   "Preview the air conditioner on the wall",
   "Tap to place, then drag to adjust",
   "Check the fit from different angles"
  ],
  "vertical": true,
  "featured": false,
  "link": null,
  "loop": "assets/work/ar_furniture/loop.mp4",
  "poster": "assets/work/ar_furniture/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/ar_furniture/full.mp4"
  }
 },
 {
  "slug": "battle_arena",
  "title": "Rebel Fort: Battle Arena",
  "kicker": "Third-Person Battle Arena · AI Opponents · Unity",
  "cat": "multi",
  "company": "Ediiie · Client: Vulcan Forged",
  "year": "2023 – 24",
  "summary": "Battle arena combat against AI-controlled enemies: storm a fort, fight from cover and clear every opponent.",
  "features": [
   "AI behaviour trees drive the enemy fighters",
   "Over-the-shoulder aiming from cover",
   "Swap weapons on the fly",
   "Explosive set pieces and damage numbers",
   "Defeat every enemy to win the round"
  ],
  "featured": false,
  "link": null,
  "vertical": false,
  "loop": "assets/work/battle_arena/loop.mp4",
  "poster": "assets/work/battle_arena/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/battle_arena/full.mp4"
  }
 },
 {
  "slug": "golf",
  "title": "Celebrity Golf",
  "kicker": "1 vs 1 Multiplayer Golf · Mobile · Unity",
  "cat": "multi",
  "company": "OffsureIT Solutions",
  "year": "2022 – 23",
  "summary": "Client golf game I built alone, from the first requirements to a finished game: real-time 1 vs 1 matches, tours and a full in-game economy.",
  "features": [
   "Real-time 1 vs 1 multiplayer with matchmaking",
   "Tours with entry fees, prizes and rewards",
   "Aim and swipe-to-swing shot controls",
   "Dynamic camera that follows every shot to the green",
   "In-game inventory and marketplace",
   "Built solo, from requirements to completion"
  ],
  "featured": false,
  "link": [
   "Showcase video",
   "https://drive.google.com/file/d/1xTIRxy2KP3sSAEAHtmCRWRmzt-6ZmLSU/view"
  ],
  "vertical": true,
  "loop": "assets/work/golf/loop.mp4",
  "poster": "assets/work/golf/poster.jpg",
  "full": {
   "type": "file",
   "src": "assets/work/golf/full.mp4"
  }
 },
 {
  "slug": "ar_places",
  "title": "AR Places",
  "kicker": "Unity Asset Store Plugin · AR · GPS",
  "cat": "tools",
  "company": "OffsureIT Solutions",
  "year": "2018 – 22",
  "summary": "A Unity plugin that identifies real-world places from the device camera's direction and GPS coordinates, published on the Unity Asset Store.",
  "features": [
   "Finds real-world locations from camera direction and GPS",
   "Built and maintained as a reusable Unity plugin",
   "Published on the Unity Asset Store"
  ],
  "featured": false,
  "link": [
   "Unity Asset Store",
   "https://assetstore.unity.com/packages/tools/behavior-ai/ar-places-88693"
  ],
  "icon": "AR"
 },
 {
  "slug": "prototypes",
  "title": "AR/VR & Hyper-Casual Prototypes",
  "kicker": "Rapid Prototyping · Mobile · Unity",
  "cat": "tools",
  "company": "OffsureIT Solutions",
  "year": "2018 – 22",
  "summary": "Many small and medium prototypes across AR/VR and hyper-casual mobile genres, built and improved in quick iterations.",
  "features": [
   "AR and VR prototypes",
   "Hyper-casual mobile game prototypes",
   "Fast build-test-improve cycles"
  ],
  "featured": false,
  "link": null,
  "icon": "▶"
 }
];
window.CATEGORIES = [["all","All work"],["xr","AR / VR & Health"],["multi","Multiplayer"],["games","Mobile Games"],["tools","Plugins & Prototypes"]];
window.GENRE_ORDER = ["xr","multi","games","tools"];
