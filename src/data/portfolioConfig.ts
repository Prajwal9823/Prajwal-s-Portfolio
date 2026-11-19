export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "Full-Stack & AI" | "Full-Stack Analytics" | "Machine Learning / NLP" | "Deep Learning";
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  badge: string;
  problem: string;
  solution: string;
  architectureSteps: { label: string; desc: string }[];
  technicalHighlights: string[];
  techStack: string[];
  metricsOrScope: string;
  previewType: "financial" | "codecompass" | "bert" | "gan";
}

export interface ExperienceItem {
  company: string;
  parentCompany: string;
  role: string;
  period: string;
  location: string;
  brands: string[];
  summary: string;
  coreContributions: {
    title: string;
    tag: string;
    problem: string;
    implementation: string;
    outcome: string;
    tech: string[];
  }[];
  compactContributions: {
    title: string;
    description: string;
    impactArea: string;
  }[];
  techStack: string[];
}

export const portfolioConfig = {
  personal: {
    name: "Prajwal Ramteke",
    preferredName: "Prajwal",
    role: "Software Engineer",
    subRoles: ["Full-Stack Developer", "AI/ML Enthusiast", "System Architect"],
    education: {
      degree: "B.Tech in Chemical Engineering",
      institution: "Indian Institute of Technology Hyderabad (IIT Hyderabad)",
      duration: "2023 — 2027",
      cgpa: "8.2 / 10",
      location: "Kandi, Sangareddy, Telangana, India",
    },
    location: "India",
    email: "ch23btech11032@iith.ac.in",
    alternateEmail: "prajwalramteke616@gmail.com",
    phone: "+91 9322004180",
    phoneDisplay: "+91 93220 04180",
    resumePath: "/resume.pdf",
    statusBadge: "Available for Software Engineering Roles & Summer 2026 Opportunities",
    headline: "I build software that makes complex things feel simple.",
    supportingStatement:
      "From production-grade e-commerce systems to AI-powered analytical applications, I enjoy turning ideas into products that solve real problems.",
    aboutStory: [
      "I'm pursuing Chemical Engineering at IIT Hyderabad, but my curiosity for engineering scalable systems led me towards software development, artificial intelligence, and building real-world digital products.",
      "I enjoy understanding how systems work under the hood, identifying performance bottlenecks, and designing architectures that remain practical and maintainable under scale.",
      "My hands-on experience includes engineering production e-commerce features for top national apparel brands at ABFRL TMRW, building full-stack analytical applications, integrating large language models with grounded numerical data, and continuous algorithmic problem-solving.",
    ],
  },

  socials: {
    github: "https://github.com/Prajwal9823",
    linkedin: "https://linkedin.com/in/prajwal-r-670916280",
    leetcode: "https://leetcode.com/u/Prajwal9823/",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/prajwal9823/",
    twitter: "https://twitter.com/", // Configurable
  },

  stats: {
    leetcodeSolved: 700,
    geeksforgeeksSolved: 450,
    totalProblemsSolved: 1150,
    cgpa: "8.2",
    productionBrands: 3,
  },

  experience: {
    company: "TMRW House of Brands",
    parentCompany: "Aditya Birla Fashion and Retail Ltd. (ABFRL)",
    role: "Software Development Engineer Intern",
    period: "December 2025 — June 2026",
    location: "Bengaluru, India",
    brands: ["TIGC (The Indian Garage Co.)", "UBRANO", "Bewakoof"],
    summary:
      "Working on core consumer-facing e-commerce storefronts and internal engineering infrastructure across multiple venture fashion brands in ABFRL's digital portfolio.",
    coreContributions: [
      {
        title: "Dynamic Quick Filters",
        tag: "Storefront UX & Data Modeling",
        problem:
          "Shoppers on TIGC needed rapid catalog navigation without heavy page reload cycles across diverse multi-attribute apparel taxonomies.",
        implementation:
          "Architected dynamic filter components utilizing Shopify JSON schemas and Metaobjects. Engineered support for collection-specific single attribute and combined multi-facet filtering directly in frontend state.",
        outcome:
          "Significantly streamlined product discovery journeys and elevated frontend interaction speeds across high-traffic collection views.",
        tech: ["Shopify Liquid", "Metaobjects", "JavaScript", "JSON Schemas", "Next.js"],
      },
      {
        title: "Frontend Performance Optimization",
        tag: "Core Web Vitals & Hydration",
        problem:
          "Multi-brand storefronts (TIGC & UBRANO) accumulated render latency, unoptimized script waterfalls, and asset loading bottlenecks affecting mobile conversion.",
        implementation:
          "Conducted comprehensive profiling across critical rendering paths, prioritized above-the-fold content rendering, deferred non-critical vendor payloads, and reduced script evaluation overhead.",
        outcome:
          "Measurably improved storefront responsiveness, smoother layout stability, and faster Time to Interactive on mobile networks.",
        tech: ["Next.js", "React Profiler", "Performance Tuning", "Lighthouse", "Asset Optimization"],
      },
      {
        title: "AWS S3 Multi-Image Upload Tool",
        tag: "Internal Tooling & Cloud Architecture",
        problem:
          "Internal merchandising and brand catalog teams lacked an efficient, secure mechanism to batch-upload high-resolution catalog assets without overloading application servers.",
        implementation:
          "Engineered an internal Next.js utility implementing secure AWS S3 presigned URL generation. Enabled direct client-to-cloud multi-asset parallel uploads with cryptographic verification and upload progress states.",
        outcome:
          "Bypassed server memory bottlenecks completely, enabling instant multi-file batch uploads with enterprise-grade AWS IAM isolation.",
        tech: ["Next.js", "AWS S3", "Presigned URLs", "TypeScript", "REST APIs"],
      },
      {
        title: "Shop the Look Interactive Vertical Carousel",
        tag: "Curated Merchandising Experience",
        problem:
          "UBRANO wanted to increase multi-item cart conversion by showcasing styled, full-outfit looks with direct purchase flows.",
        implementation:
          "Engineered a high-performance interactive vertical carousel component capable of dynamically synchronizing lifestyle imagery/video with linked child product detail cards.",
        outcome:
          "Empowered users to preview styled apparel combinations and jump directly to associated Product Detail Pages (PDP) in a single gesture.",
        tech: ["React", "Shopify Liquid", "CSS Transitions", "Mobile Touch Gestures", "State Synchronization"],
      },
      {
        title: "Payment Gateway Refund Status Timeline",
        tag: "Fintech Integration & Brand Operations",
        problem:
          "Post-order support received high ticket volumes regarding payment gateway refund timelines and settlement milestones.",
        implementation:
          "Integrated payment gateway refund status and transaction webhook APIs into the Next.js workflow. Built conditional timeline rendering components reflecting banking clearing states.",
        outcome:
          "Delivered end-to-end transparent visibility of transaction clearing stages for brand customer support and operations teams.",
        tech: ["Next.js", "Payment APIs", "TypeScript", "Conditional Rendering", "Data Normalization"],
      },
    ],
    compactContributions: [
      {
        title: "Promotions & Offers Engine",
        description: "Implemented contextual discount banner triggers and cart discount logic.",
        impactArea: "Cart & Checkout",
      },
      {
        title: "PDP Testimonials Module",
        description: "Engineered responsive customer review and social proof displays with verified badges.",
        impactArea: "Product Detail Pages",
      },
      {
        title: "Return & Exchange Cart Strip",
        description: "Built reassurance notification strips embedded directly within active cart flows.",
        impactArea: "Conversion Assurance",
      },
      {
        title: "Articles & Editorial Inclusion",
        description: "Created structured content templates bridging lifestyle blog stories to shoppable products.",
        impactArea: "Content Commerce",
      },
      {
        title: "App Download Smart Nudge",
        description: "Engineered non-intrusive mobile banner nudges triggering native application installs.",
        impactArea: "Mobile Growth",
      },
      {
        title: "Footer & Navigation Revamp",
        description: "Redesigned multi-brand responsive footers, newsletter hooks, and compliance links.",
        impactArea: "Site Architecture",
      },
      {
        title: "ODP / OLP Download Banners",
        description: "Configured promotional banners tailored for Order Detail and Order List pages.",
        impactArea: "Post-Purchase Experience",
      },
      {
        title: "Birthday Month Special Offers",
        description: "Integrated customer milestone detection to trigger customized celebratory rewards.",
        impactArea: "Customer Loyalty",
      },
      {
        title: "Hot Picks – Opti Module",
        description: "Optimized personalized trending product recommendation grid with dynamic lazy-loading.",
        impactArea: "Catalog Discovery",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Shopify Liquid",
      "Shopify Metaobjects",
      "Shopify Schemas",
      "AWS S3",
      "REST APIs",
      "Git",
      "GitHub & GitLab",
    ],
  },

  projects: [
    {
      id: "financial-ai-agent",
      title: "Financial AI Agent — Market Insights",
      tagline: "Agentic research platform converting multi-source financial data into structured, source-grounded market intelligence.",
      category: "Full-Stack & AI",
      featured: true,
      githubUrl: "https://github.com/Prajwal9823/financial-ai-agent",
      liveUrl: "https://github.com/Prajwal9823/financial-ai-agent", // Configurable live link
      badge: "Docker · Gemini LLM · FastAPI · Next.js",
      problem:
        "Standard LLMs suffer from numerical hallucinations, lack real-time stock price grounding, and cannot parse tabular SEC filings reliably on their own.",
      solution:
        "Architected an agentic retrieval pipeline that decouples numerical calculation from natural language reasoning. Real-time OHLCV market feeds and SEC 10-K filings are ingested into Python/pandas to compute 16+ deterministic technical indicators, feeding structured contexts into Google Gemini only for contextual synthesis.",
      architectureSteps: [
        { label: "1. Data Collection", desc: "yFinance real-time OHLCV + SEC EDGAR 10-K filings + News Feeds" },
        { label: "2. Deterministic Compute", desc: "Python/pandas computes 16+ indicators (RSI-14, MACD, SMA 50/200, Bollinger Bands, Volatility)" },
        { label: "3. Sentiment Analysis", desc: "VADER NLP pipeline scores news headlines & regulatory risk factors" },
        { label: "4. LLM Synthesis", desc: "Gemini LLM receives structured mathematical context to generate narrative reports" },
        { label: "5. User Dashboard", desc: "Next.js frontend renders interactive charts, metric summaries, and exportable research briefs" },
      ],
      technicalHighlights: [
        "16+ Python-computed indicators including RSI-14, SMA-50/200, EMA-20, MACD Trend, Bollinger Bands, and Historical Volatility.",
        "Zero LLM math hallucination: all quantitative computations execute deterministically in Pandas/NumPy.",
        "SEC EDGAR crawler extracting Section 1A Risk Factors from 10-K regulatory filings.",
        "Containerized with Docker Compose; backend deployed on Render, frontend deployed on Vercel.",
      ],
      techStack: ["Next.js", "FastAPI", "Python", "Google Gemini LLM", "yFinance", "SEC EDGAR", "VADER Sentiment", "Pandas", "NumPy", "Docker"],
      metricsOrScope: "16+ Deterministic Indicators · 10-K SEC Ingestion · Containerized Deployment",
      previewType: "financial",
    },
    {
      id: "codecompass",
      title: "CodeCompass — LeetCode Analytics",
      tagline: "Production-grade analytics platform transforming public LeetCode profiles into actionable performance insights.",
      category: "Full-Stack Analytics",
      featured: true,
      githubUrl: "https://github.com/Prajwal9823/codecompass",
      liveUrl: "https://github.com/Prajwal9823/codecompass", // Configurable live link
      badge: "Next.js 16 · Recharts · Framer Motion · TypeScript",
      problem:
        "Competitive programmers have fragmented profile statistics scattered across contests and problem lists without clear trajectory analytics or tailored improvement roadmaps.",
      solution:
        "Built a responsive analytics platform that consumes LeetCode GraphQL endpoints, computes coder archetypes (e.g. Rising Coder, Contest Grinder), tracks calendar consistency heatmaps, and serves a rule-based recommendation engine for interview readiness.",
      architectureSteps: [
        { label: "1. GraphQL Extraction", desc: "Live query to LeetCode API extracting submissions, ratings, and problem tags" },
        { label: "2. Metric Normalization", desc: "TypeScript normalization pipeline computing acceptance ratios and rating percentiles" },
        { label: "3. Archetype Engine", desc: "Rule-based classifier assigning persona profiles based on contest-to-practice ratios" },
        { label: "4. Visual Analytics", desc: "Recharts interactive contest charts, activity heatmaps, and difficulty donut graphs" },
        { label: "5. Branded Share Card", desc: "Client-side PNG generation via html-to-image for sharing on LinkedIn & Twitter" },
      ],
      technicalHighlights: [
        "Rule-based coder archetype categorization evaluating contest agility vs. problem variety.",
        "Interactive contest history charts, calendar consistency heatmaps, and active streak monitoring.",
        "Topic difficulty distribution visualizations (Easy, Medium, Hard breakdown) with gap analysis.",
        "Dynamic OpenGraph image generation and client-side high-resolution PNG export card.",
      ],
      techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Recharts", "Framer Motion", "GraphQL", "html-to-image"],
      metricsOrScope: "Interactive Recharts · Custom Archetype Engine · Branded Export Cards",
      previewType: "codecompass",
    },
    {
      id: "bert-sentiment-analyzer",
      title: "BERT-Powered Twitter Sentiment Analyzer",
      tagline: "Real-time NLP sentiment analysis engine classifying social stream polarity using fine-tuned DistilBERT.",
      category: "Machine Learning / NLP",
      featured: true,
      githubUrl: "https://github.com/Prajwal9823/bert-twitter-sentiment",
      liveUrl: "https://github.com/Prajwal9823/bert-twitter-sentiment", // Configurable live link
      badge: "DistilBERT · HuggingFace · Streamlit · Python",
      problem:
        "Analyzing real-time public sentiment across fast-moving Twitter conversations requires handling colloquial language, sarcasm, and noise that keyword heuristics fail on.",
      solution:
        "Developed an interactive NLP pipeline utilizing a fine-tuned DistilBERT transformer model. Fetches live tweets by hashtag or custom topic via Twitter API, classifies positive, negative, and neutral polarity, and visualizes sentiment distribution curves.",
      architectureSteps: [
        { label: "1. Stream Ingestion", desc: "Twitter API query engine pulling live tweet batches based on hashtag or search string" },
        { label: "2. Preprocessing", desc: "Regex tweet cleaning, tokenization, mention removal, and emoji normalization" },
        { label: "3. Transformer Inference", desc: "Fine-tuned DistilBERT model generates probability logits across 3 sentiment classes" },
        { label: "4. Analytical Dashboard", desc: "Interactive Streamlit UI plotting sentiment breakdown, confidence scores, and raw tweet text" },
      ],
      technicalHighlights: [
        "Transformer-based contextual token embeddings capturing linguistic nuance over traditional bag-of-words.",
        "Dual operational mode: live Twitter hashtag streaming and arbitrary text prompt evaluation.",
        "Interactive breakdown with polarity distribution charts and sentiment confidence scores.",
      ],
      techStack: ["Python", "Streamlit", "DistilBERT", "HuggingFace Transformers", "Twitter API", "Pandas", "Matplotlib"],
      metricsOrScope: "Live API Ingestion · Transformer-Based Inference · Streamlit Visualizations",
      previewType: "bert",
    },
    {
      id: "dcgan-image-generation",
      title: "DCGAN Handwritten Digit Synthesis",
      tagline: "Deep Convolutional Generative Adversarial Network trained from scratch for synthetic handwritten digit generation.",
      category: "Deep Learning",
      featured: true,
      githubUrl: "https://github.com/Prajwal9823", // Configurable repo link
      badge: "Deep Learning · TensorFlow / Keras · DCGAN",
      problem:
        "Training adversarial neural architectures from scratch requires delicate balance between generator and discriminator loss dynamics to prevent mode collapse.",
      solution:
        "Implemented a Deep Convolutional GAN (DCGAN) using TensorFlow/Keras on the MNIST benchmark. Configured transposed convolutions, LeakyReLU activations, Batch Normalization, and Adam optimizer tuning, checkpointing generator output across 100 epochs.",
      architectureSteps: [
        { label: "1. Generator Network", desc: "Projects 100D latent noise vector through Conv2DTranspose layers up to 28x28 grayscale" },
        { label: "2. Discriminator Network", desc: "Strided Conv2D with LeakyReLU evaluating authenticity of real vs. synthesized samples" },
        { label: "3. Adversarial Training", desc: "Minimax zero-sum optimization with Adam optimizer learning rate scheduling" },
        { label: "4. Epoch Checkpoints", desc: "Monitored synthetic image quality progression across 1, 21, 41, 61, 81, and 100 epochs" },
      ],
      technicalHighlights: [
        "Synthesized digit outputs saved across verified training checkpoints: Epoch 1, 21, 41, 61, 81, and 100.",
        "Interactive epoch visualizer showcasing the generator's progression from Gaussian noise to sharp numerical characters.",
        "Trained standalone CNN MNIST classifier to evaluate generated synthetic digit recognizability.",
      ],
      techStack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "OpenCV", "CNNs"],
      metricsOrScope: "100 Epochs Trained · Checkpoint Visual Progression · Standalone Classifier",
      previewType: "gan",
    },
  ] as ProjectItem[],

  skills: {
    languages: [
      { name: "C++", note: "Primary language for Data Structures & Algorithms and competitive programming" },
      { name: "Python", note: "FastAPI, NumPy, Pandas, Scikit-learn, PyTorch/TensorFlow, automation" },
      { name: "TypeScript", note: "Strictly-typed scalable frontend and full-stack systems" },
      { name: "JavaScript", note: "Modern ES6+, DOM manipulation, asynchronous programming" },
      { name: "SQL", note: "Relational database querying, schema design, and data normalization" },
      { name: "Shopify Liquid", note: "E-commerce storefront templating, schemas, and Metaobjects" },
      { name: "HTML5 & CSS3", note: "Semantic structure, responsive layouts, CSS animations" },
    ],
    frameworks: [
      { name: "Next.js (App Router)", note: "Server components, streaming, dynamic API routing, SEO" },
      { name: "React", note: "Component lifecycle, custom hooks, state synchronization, memoization" },
      { name: "FastAPI", note: "Asynchronous REST microservices, Pydantic schemas, high-throughput APIs" },
      { name: "Tailwind CSS", note: "Modern design system implementation, responsive utilities" },
      { name: "Streamlit", note: "Rapid prototyping of interactive machine learning applications" },
      { name: "NumPy & Pandas", note: "High-performance vector operations, financial data manipulation" },
      { name: "Scikit-learn", note: "Classical machine learning pipelines, preprocessing, regression & classification" },
      { name: "TensorFlow & Keras", note: "Deep learning models, CNNs, generative adversarial networks (DCGAN)" },
    ],
    toolsAndCloud: [
      { name: "Docker", note: "Containerization, reproducible environments, multi-stage builds" },
      { name: "AWS S3", note: "Cloud object storage, presigned URLs for client-to-cloud uploads" },
      { name: "Git & GitHub / GitLab", note: "Branching workflows, version control, CI/CD pipelines" },
      { name: "Postman & REST", note: "API design, endpoint contract testing, webhook debugging" },
      { name: "Linux / Bash", note: "Shell scripting, process management, deployment orchestration" },
      { name: "Vercel & Render", note: "Frontend edge deployments and containerized backend hosting" },
    ],
    coreFoundations: [
      { name: "Data Structures & Algorithms", note: "700+ LeetCode, 450+ GFG; trees, graphs, DP, binary search" },
      { name: "Object-Oriented Programming (OOP)", note: "Design patterns, inheritance, polymorphism, encapsulation" },
      { name: "Database Management Systems (DBMS)", note: "ACID properties, indexing, relational modeling" },
      { name: "Machine Learning & Deep Learning", note: "Supervised/unsupervised learning, transformers, GANs" },
      { name: "System Design & REST APIs", note: "Decoupled architectures, stateless APIs, caching layers" },
    ],
  },

  problemSolving: {
    headline: "Consistency compounds.",
    subtext:
      "Algorithmic problem-solving is where I sharpen my intuition for time-space trade-offs, edge-case resilience, and clean, modular code.",
    platforms: [
      {
        name: "LeetCode",
        count: "700+",
        highlight: "Problems Solved",
        description: "Intensive focus on Dynamic Programming, Graph Traversals, Binary Trees, and Greedy Algorithms.",
        url: "https://leetcode.com/u/Prajwal9823/",
        badge: "700+ Solved",
      },
      {
        name: "GeeksforGeeks",
        count: "450+",
        highlight: "Problems Solved",
        description: "Extensive problem-solving across core Data Structures and fundamental computer science paradigms.",
        url: "https://auth.geeksforgeeks.org/user/prajwal9823/",
        badge: "450+ Solved",
      },
    ],
    topicBreakdown: [
      { topic: "Dynamic Programming", solvedEstimate: "180+", ratio: 26 },
      { topic: "Graphs & BFS / DFS", solvedEstimate: "140+", ratio: 20 },
      { topic: "Trees & Binary Search Trees", solvedEstimate: "160+", ratio: 22 },
      { topic: "Arrays, Two Pointers & Sliding Window", solvedEstimate: "240+", ratio: 34 },
      { topic: "Greedy & Heaps", solvedEstimate: "110+", ratio: 15 },
      { topic: "Binary Search & Bit Manipulation", solvedEstimate: "90+", ratio: 13 },
    ],
  },

  education: [
    {
      degree: "Bachelor of Technology — Chemical Engineering",
      institution: "Indian Institute of Technology Hyderabad (IIT Hyderabad)",
      period: "2023 — 2027",
      grade: "CGPA: 8.2 / 10",
      description:
        "Rigorous coursework in computational engineering, numerical methods, applied mathematics, and transport phenomena alongside self-directed mastery in software systems and computer science.",
      coursework: [
        "Numerical Methods & Optimization",
        "Applied Mathematics & Differential Equations",
        "Data Structures & Algorithms",
        "Machine Learning Specialization",
        "Object-Oriented Programming Foundations",
      ],
    },
    {
      degree: "Higher Secondary Certificate (Class XII)",
      institution: "Maharashtra State Board of Secondary and Higher Secondary Education",
      period: "Completed 2023",
      grade: "Score: 92.00%",
      description: "Science stream with specialization in Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "Secondary School Examination (Class X)",
      institution: "Central Board of Secondary Education (CBSE)",
      period: "Completed 2021",
      grade: "Score: 90.00%",
      description: "Strong academic foundation in Mathematics and Sciences.",
    },
  ],

  certifications: [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford Online",
      year: "2024",
      skills: ["Supervised Learning", "Neural Networks", "Decision Trees", "Model Evaluation"],
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI",
      year: "2024",
      skills: ["Multiclass Classification", "Activation Functions", "Regularization", "TensorFlow"],
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      issuer: "DeepLearning.AI",
      year: "2024",
      skills: ["K-Means", "PCA", "Collaborative Filtering", "Q-Learning"],
    },
    {
      title: "Data Structures & Algorithms Self-Paced",
      issuer: "GeeksforGeeks",
      year: "2023 — 2024",
      skills: ["Algorithmic Analysis", "Time & Space Optimization", "C++ STL"],
    },
  ],

  leadership: {
    role: "Multimedia Coordinator",
    organization: "International Relations Cell (IRC), IIT Hyderabad",
    period: "2024 — 2025",
    summary:
      "Led video documentation, media coverage, and digital outreach for prominent institutional international events, working directly with faculty, international delegates, and university leadership.",
    highlights: [
      {
        title: "Japan Day & Cultural Summit Coverage",
        desc: "Coordinated multimedia content capture, live event visual assets, and post-event highlight reels for high-profile Japanese university and industry delegates.",
      },
      {
        title: "Project-Based Learning (PBL) Programs",
        desc: "Documented collaborative international engineering workshops, capturing technical problem-solving sessions and student showcase presentations.",
      },
      {
        title: "Digital Outreach & Reel Creation",
        desc: "Produced engaging short-form video reels and photographic media to amplify IIT Hyderabad's international programs across social platforms.",
      },
      {
        title: "Cross-Functional Team Collaboration",
        desc: "Coordinated closely with university administration, visiting foreign delegates, and student committees under demanding live-event deadlines.",
      },
    ],
  },
};

