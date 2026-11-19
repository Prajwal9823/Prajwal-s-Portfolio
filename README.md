# Prajwal Ramteke — Personal Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)

A production-ready personal engineering portfolio website designed with an editorial aesthetic, interactive system architecture visualizations, and grounded technical case studies.

Engineered for **Prajwal Ramteke** — Software Engineer, B.Tech undergraduate at **IIT Hyderabad ('27)**, SDE Intern at **TMRW House of Brands (ABFRL)**, and full-stack & AI systems builder.

---

## ✨ Features & Architecture

- **Interactive System Matrix**: Real-time architecture visualizer mapping storefront client layers, FastAPI microservices, Gemini LLM reasoning, AWS S3 channels, and algorithmic core foundations.
- **Production E-Commerce Case Studies**: Deep dive into real-world engineering across **TIGC**, **UBRANO**, and **Bewakoof** (Dynamic Quick Filters, Frontend Performance, AWS S3 Direct Upload Tool, Shop the Look Carousel, PG Refund Timelines).
- **Interactive Project Previews**:
  - **Financial AI Agent**: Deterministic indicator compute with Python/Pandas & grounded Gemini LLM synthesis.
  - **CodeCompass**: LeetCode profile analytics, Coder Archetype engine, and interview-readiness scoring.
  - **BERT Twitter Sentiment Analyzer**: Real-time DistilBERT transformer polarity classification stream.
  - **DCGAN Handwritten Digit Synthesis**: Interactive training checkpoint progression slider (Epoch 1 to 100).
- **Algorithmic Discipline**: Visual breakdown of **700+ LeetCode** and **450+ GeeksforGeeks** problems solved (1,150+ total).
- **Performance & Polish**: Built with Next.js App Router, Tailwind CSS v4, smooth scroll navigation, mobile drawer menu, and semantic accessible HTML.
- **Centralized Configuration**: All personal info, social URLs, and project data are managed in a single decoupled configuration file.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router, Server & Client Components) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4, PostCSS |
| **Icons & UI** | Lucide React, Custom SVG Icons |
| **Deployment** | Vercel Edge / Node runtime ready |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18+ or v20+)
- [npm](https://www.npmjs.com/) (v9+) or pnpm / yarn

### Installation & Local Setup

```bash
# Clone the repository
git clone https://github.com/Prajwal9823/Prajwal-s-Portfolio.git

# Navigate into the project folder
cd Prajwal-s-Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Create optimized production build
npm run build

# Start the production server
npm run start
```

---

## 📁 Repository Structure

```
├── public/
│   ├── images/
│   ├── projects/
│   │   └── gan/               # DCGAN training checkpoint outputs
│   └── resume.pdf             # Integrated downloadable PDF Resume
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind styling & dark surface tokens
│   │   ├── layout.tsx         # Metadata, typography, root layout
│   │   └── page.tsx           # Assembled page structure
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with blur backdrop
│   │   ├── HeroSystemVisual.tsx # Interactive system architecture matrix
│   │   ├── ProjectPreviews.tsx  # Interactive live sandbox widgets
│   │   ├── SocialIcons.tsx    # Crisp SVG icons for GitHub, LinkedIn, Twitter
│   │   └── Footer.tsx         # Editorial footer & back-to-top
│   ├── data/
│   │   └── portfolioConfig.ts # Centralized personal, project & contact config
│   ├── lib/
│   │   └── utils.ts           # Class merge utilities
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProblemSolvingSection.tsx
│       ├── EducationSection.tsx
│       ├── LeadershipSection.tsx
│       └── ContactSection.tsx
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## ⚙️ Customization & Updates

All personal information, links, and project details are decoupled into a single configuration file:
`src/data/portfolioConfig.ts`

### 1. Social & Profile Links
Update `portfolioConfig.socials`:
```typescript
socials: {
  github: "https://github.com/Prajwal9823",
  linkedin: "https://linkedin.com/in/prajwal-r-670916280",
  leetcode: "https://leetcode.com/u/Prajwal9823/",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/prajwal9823/",
  twitter: "https://twitter.com/your-username",
}
```

### 2. Resume PDF
Place your resume PDF at `public/resume.pdf`. The download buttons throughout the navigation, hero, and contact section are wired to download this file directly.

### 3. Adding or Updating Projects
Modify `portfolioConfig.projects` in `src/data/portfolioConfig.ts` to add new projects, update live demo URLs, or revise technical highlights.

---

## 🚢 Deployment

The easiest way to deploy this portfolio is using the [Vercel Platform](https://vercel.com):

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and configure the optimal build settings.
4. Deploy!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
Feel free to fork and customize it for your own portfolio.
