// Single source of truth for portfolio content (carried over verbatim from the original site).
export type Category = "ml" | "product" | "games" | "personal";

export interface Project {
  title: string;
  kicker: string;
  desc: string;
  tags: string[];
  cat: Category;
  repo?: string;
  local?: string;
  featured?: boolean;
}

export interface ProjectMedia {
  image: string;
  film?: string;
  poster?: string;
}

export const categories: { id: "all" | Category; label: string; glyph: string }[] = [
  { id: "all", label: "All work", glyph: "全" },
  { id: "ml", label: "ML & research", glyph: "識" },
  { id: "product", label: "Products", glyph: "器" },
  { id: "games", label: "Games & graphics", glyph: "戲" },
  { id: "personal", label: "Personal & ops", glyph: "己" },
];

export const glyphFor = (c: Category) => categories.find((x) => x.id === c)!.glyph;

export const projects: Project[] = [
  { featured: true, cat: "ml", kicker: "3D vision, Thesis", title: "SDF-GS Refine", desc: "Thesis work: pulling high-fidelity surfaces out of 3D Gaussian Splatting scenes by optimising a neural signed distance field.", tags: ["PyTorch", "3DGS", "SDF"], repo: "https://github.com/SSSalvan/SDF-GS-Refine" },
  { featured: true, cat: "ml", kicker: "Computer vision, Lanes", title: "Lane Detection Experiments", desc: "Robust real-time lane detection through a dual-attention ENet and a geometric temporal-consistency algorithm, with four trained variants compared on identical frames.", tags: ["PyTorch", "ENet", "OpenCV"], local: "Local build, ResearchSementara" },
  { featured: true, cat: "ml", kicker: "NLP, Summarisation", title: "CatatIN (IndoBERT)", desc: "Extractive summarisation for Indonesian lecture transcripts: IndoBERT embeddings, K-Means clustering and TextRank re-ranking, with a React front end.", tags: ["IndoBERT", "TextRank", "React"], repo: "https://github.com/SSSalvan/IndoBERT-NLP-Text-Rank" },
  { featured: true, cat: "product", kicker: "Product, ERP", title: "Management Apps", desc: "Flagship B2B ERP for livestock feed distribution at PT. Mitra Cerah Cemerlang: Flutter, Firebase, a Windows desktop build and PDF printing. In daily use.", tags: ["Flutter", "Dart", "Firebase"], repo: "https://github.com/SSSalvan/ManagemenApplication_V1" },
  { cat: "product", kicker: "Product, Vision system", title: "PKM Gereja", desc: "Church management system: FastAPI backend, React front end and a YOLOv8n + ByteTrack pipeline that records attendance straight from camera video.", tags: ["YOLOv8", "ByteTrack", "FastAPI"] },
  { cat: "ml", kicker: "Accessibility, Real-time", title: "SIBI Sign Language", desc: "Real-time recognition of the Indonesian SIBI alphabet from a live camera, using TensorFlow with MediaPipe landmarks.", tags: ["TensorFlow", "MediaPipe", "OpenCV"], repo: "https://github.com/SSSalvan/SIBI-Sign-Language-Detection" },
  { cat: "ml", kicker: "Research, IoT + CV", title: "Road Line CV Paper", desc: "Two studies in one repository: a real-time IoT analytics and honeypot-detection pipeline, and a CNN + GRU lane-detection study in its computer-vision folder.", tags: ["Python", "Kafka", "Kinetica"], repo: "https://github.com/SSSalvan/Real-Time-IoT-Data-Pipeline" },
  { cat: "ml", kicker: "Computer vision, Tracking", title: "RoadLineDetectionResearch", desc: "A CNN + GRU hybrid that tracks lane lines in real time, documented with a full architecture write-up in the README.", tags: ["TensorFlow", "Keras", "OpenCV"], repo: "https://github.com/SSSalvan/RoadLineDetectionResearch" },
  { cat: "ml", kicker: "Bioinformatics, Algorithms", title: "PFAC Motif Detection", desc: "Parallel failure-less Aho-Corasick motif search over sequence data under biological constraints, with twenty benchmark runs kept beside the source.", tags: ["Python", "PFAC", "Sequences"], repo: "https://github.com/SSSalvan/PFAC-Motif-Detection-for-Biological-Constraints" },
  { cat: "ml", kicker: "Data science, Coursework", title: "Housing Price Clustering", desc: "Jabodetabek housing data clustered with K-Means, then paired with a random-forest salary model so a listing can be read against local living costs.", tags: ["scikit-learn", "K-Means", "Random Forest"], repo: "https://github.com/SSSalvan/Housing-Price-Clustering-Analysis" },
  { cat: "product", kicker: "Product, Campus event", title: "MAN Voting", desc: "The voting app for UPH Festival Awards: Next.js App Router, Tailwind v4 and Framer Motion, built for a live campus event.", tags: ["Next.js", "Tailwind", "Framer Motion"] },
  { cat: "product", kicker: "Product, Finance dashboard", title: "Fintrack", desc: "A local-first personal finance dashboard for tracking income, expenses, budgets, savings, and net worth.", tags: ["Next.js", "React", "Prisma"], repo: "https://github.com/SSSalvan/finance-dashboard" },
  { cat: "product", kicker: "Product, Inventory system", title: "Stockflow", desc: "An inventory and item-management system with supplier, transaction, reporting, and user-management workflows.", tags: ["React", "TypeScript", "Tailwind"], repo: "https://github.com/SSSalvan/item-management-system" },
  { cat: "product", kicker: "Blockchain, Supply chain", title: "Web3 Supply Chain", desc: "Decentralised product-lifecycle tracking: Solidity contracts record every hand-off, and a React dashboard reads the chain back.", tags: ["Solidity", "Web3", "React"], repo: "https://github.com/SSSalvan/Web3-Supply-Chain-Tracking" },
  { cat: "product", kicker: "Product, Web client", title: "OutfitSync Web", desc: "React and TypeScript client for OutfitSync, built with a team: wardrobe composition, outfit sync and account flows.", tags: ["React", "TypeScript", "REST"], repo: "https://github.com/hyoonmod/OutfitSync_Web" },
  { cat: "product", kicker: "Product, API", title: "OutfitSync Backend", desc: "The REST service behind OutfitSync: Node.js and Express handling authentication, wardrobes and outfit synchronisation.", tags: ["Node.js", "Express", "API"], repo: "https://github.com/hyoonmod/OutfitSync_Backend" },
  { cat: "product", kicker: "Product, Android", title: "OutfitSync Android", desc: "Kotlin and Jetpack Compose client: dashboard, outfit sync and camera capture in one Android app.", tags: ["Kotlin", "Compose", "Android"], repo: "https://github.com/TirtaSimangunsong/OutfitSync" },
  { cat: "product", kicker: "Client, Marketing site", title: "WebsiteAVSI", desc: "A marketing site written by hand in CSS and JavaScript: no template, no framework, no build step.", tags: ["HTML", "CSS", "JavaScript"], repo: "https://github.com/SSSalvan/WebsiteAVSI" },
  { cat: "product", kicker: "Client, Storefront", title: "MATCAH", desc: "Client storefront built with a collaborator: a dessert catalogue, a cart and an admin panel behind it.", tags: ["HTML", "CSS", "JavaScript"], repo: "https://github.com/joyeaudia/MATCAH" },
  { cat: "games", kicker: "Game jam, Godot", title: "O.M.G.A.M.M.A", desc: "Game-jam build in Godot and GDScript where the player controls calamity itself, with custom mechanics and physics.", tags: ["Godot", "GDScript", "Game jam"], repo: "https://github.com/SSSalvan/O.M.G.A.M.M.A" },
  { cat: "games", kicker: "Games, Java", title: "Java 2D Arcade Games", desc: "A collection of 2D arcade games engineered entirely from scratch in standard Java, with no game engine behind them.", tags: ["Java", "Swing", "OOP"], repo: "https://github.com/SSSalvan/Java-2D-Arcade-Games" },
  { cat: "games", kicker: "Graphics, Coursework", title: "Monopoly Game", desc: "Computer-graphics coursework: a Monopoly-style board rendered in WebGL with three.js and a .glb asset set.", tags: ["WebGL", "three.js", "C++"], repo: "https://github.com/Legocrocs/CumGraphics" },
  { cat: "games", kicker: "Games, Java Swing", title: "KeytoHatch", desc: "A typing game in Java Swing with three difficulty modes, a menu and a survival run, artwork included.", tags: ["Java", "Swing", "Game"] },
  { cat: "personal", kicker: "Algorithms, Coursework", title: "Final Project DAA", desc: "Design and Analysis of Algorithms capstone: shortest-path search with Dijkstra, visualised over a real graph.", tags: ["Python", "Java", "Dijkstra"], repo: "https://github.com/Expellar/Final-Project-DAA" },
  { cat: "personal", kicker: "Tooling, Client work", title: "Dekostel Pipeline", desc: "Client data pipeline: five iterations of an OCR tool, an uploader, and Python fix scripts for a 1,488-photo property catalogue.", tags: ["PowerShell", "Node.js", "Python"] },
  { cat: "personal", kicker: "Personal, The site itself", title: "Portfolio Site", desc: "The page you are reading, rebuilt as an ink-and-mist field guide for research and making.", tags: ["React", "TanStack Start", "CSS"] },
  { cat: "personal", kicker: "GitHub, Profile", title: "SSSalvan Profile", desc: "The GitHub profile that carries the research record: publications, coursework and a 3.71 GPA, all kept in Markdown.", tags: ["Markdown", "GitHub"], repo: "https://github.com/SSSalvan/SSSalvan" },
];

// Captures and films carried over from the original portfolio archive.
export const projectMedia: Record<string, ProjectMedia> = {
  "SDF-GS Refine": { image: "/projects/sdf-gs-refine-thesis/show.png" },
  "Lane Detection Experiments": { image: "/projects/lane-detection-experiments/show.png", film: "/projects/lane-detection-experiments/brag.mp4", poster: "/projects/lane-detection-experiments/brag.jpg" },
  "CatatIN (IndoBERT)": { image: "/projects/indobert-nlp-text-rank/show.png" },
  "Management Apps": { image: "/projects/managementapps/show.png" },
  "PKM Gereja": { image: "/projects/pkm-gereja/shot-1.webp" },
  "SIBI Sign Language": { image: "/projects/sibi-sign-language-detection/show.png" },
  "Road Line CV Paper": { image: "/projects/riset-paper-road-line-cv/shot-1.webp" },
  "RoadLineDetectionResearch": { image: "/projects/roadlinedetectionresearch/shot-1.webp" },
  "PFAC Motif Detection": { image: "/projects/pfac-motif-detection/shot-1.webp" },
  "Housing Price Clustering": { image: "/projects/housing-price-clustering/show.png" },
  "MAN Voting": { image: "/projects/man-voting/show.png" },
  "Fintrack": { image: "/projects/fintrack/show.png" },
  "Stockflow": { image: "/projects/stockflow/show.png" },
  "Web3 Supply Chain": { image: "/projects/web3-supply-chain-tracking/show.png" },
  "OutfitSync Web": { image: "/projects/outfitsync-web/show.png" },
  "OutfitSync Backend": { image: "/projects/outfitsync-backend/shot-1.webp" },
  "OutfitSync Android": { image: "/projects/outfitsync-android/show.png" },
  "WebsiteAVSI": { image: "/projects/websiteavsi/shot-1.webp" },
  "MATCAH": { image: "/projects/matcah-website-macha/shot-1.webp" },
  "O.M.G.A.M.M.A": { image: "/projects/omgamma-calamity-control/shot-1.webp" },
  "Java 2D Arcade Games": { image: "/projects/java-2d-arcade-games/shot-1.webp" },
  "Monopoly Game": { image: "/projects/cumgraphics-monopoly/show.png" },
  "KeytoHatch": { image: "/projects/keytohatch/show.png" },
  "Final Project DAA": { image: "/projects/final-project-daa-dijkstra/shot-1.webp" },
  "Dekostel Pipeline": { image: "/projects/dekostel-tokoku-pipeline/shot-1.webp" },
  "Portfolio Site": { image: "/projects/portfolio-site-live/shot-1.webp", film: "/projects/portfolio-site-live/brag.mp4", poster: "/projects/portfolio-site-live/brag.jpg" },
  "SSSalvan Profile": { image: "/projects/sssalvan-profile-repo/shot-1.webp", film: "/projects/sssalvan-profile-repo/brag.mp4", poster: "/projects/sssalvan-profile-repo/brag.jpg" },
};

export const publications = [
  { year: "2026", venue: "ICTIIA", title: "IndoBERT-Based Extractive Summarization with K-Means Clustering and TextRank Re-ranking for Indonesian Academic Lecture Transcripts" },
  { year: "2026", venue: "IC2IE", title: "Latent Diffusion for Cross-Lingual Syntax Transfer in Distant Language Pairs" },
];

export const experience = [
  { when: "Jun 2026 — Present", org: "Dekostel Management", role: "Data Entry & User Testing", desc: "Built Python scripts and browser automation workflows to reduce repetitive manual entry; tested automated systems and validated data integrity." },
  { when: "Jun 2022 — Aug 2024", org: "PT Karya Satria", role: "Office Administrator", desc: "Managed proposals, work orders, procurement, and project budgets full-time through June 2023, then continued part-time until August 2024." },
];

export const contact = {
  email: "silvanusalvan41@gmail.com",
  github: "https://github.com/SSSalvan",
  resume: "/resume.pdf",
};

export function filterProjects(list: Project[], cat: "all" | Category) {
  return cat === "all" ? list : list.filter((p) => p.cat === cat);
}
