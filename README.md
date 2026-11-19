# Prajwal Ramteke — Personal Developer Portfolio

A production-grade personal portfolio website engineered with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Built for **Prajwal Ramteke** — Chemical Engineering undergraduate at **IIT Hyderabad ('27)**, Software Development Engineer Intern at **TMRW House of Brands (ABFRL)**, and full-stack & AI systems developer.

---

## ⚡ Tech Stack

| Layer | Tools & Libraries |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router, Server & Client Components) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4, PostCSS |
| **Icons & UI** | Lucide React |
| **Motion** | Framer Motion & CSS keyframe transitions |
| **Assets** | Optimized SVG diagrams, live training outputs |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm (v9+)

### Installation & Run

```bash
# Navigate to the project directory
cd D:\Academics\Project\PrajwalPortfolio

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
D:\Academics\Project\PrajwalPortfolio
├── public/
│   ├── images/
│   ├── projects/
│   │   └── gan/               # Verified DCGAN training checkpoint outputs
│   └── resume.pdf             # Integrated 1-page PDF Resume
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind styling & dark surface variables
│   │   ├── layout.tsx         # Metadata, typography, root layout
│   │   └── page.tsx           # Assembled page structure
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with blur backdrop
│   │   ├── HeroSystemVisual.tsx # Interactive system architecture matrix
│   │   ├── ProjectPreviews.tsx  # Interactive live sandbox widgets
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

## ⚙️ Configuration & Customization

All personal data, links, experience details, and projects are centralized in:
`src/data/portfolioConfig.ts`

### 1. Update Social & Profile URLs
Edit `portfolioConfig.socials`:
```typescript
socials: {
  github: "https://github.com/Prajwal9823",
  linkedin: "https://linkedin.com/in/prajwal-r-670916280",
  leetcode: "https://leetcode.com/u/Prajwal9823/",
  geeksforgeeks: "https://auth.geeksforgeeks.org/user/prajwal9823/",
}
```

### 2. Replace or Update Resume PDF
Place your latest resume PDF directly at:
`D:\Academics\Project\PrajwalPortfolio\public\resume.pdf`

The download button in the Navbar, Hero, and Contact section automatically downloads this file.

### 3. Add or Update Projects
Edit `portfolioConfig.projects` in `src/data/portfolioConfig.ts` to add new projects, update live URLs, or modify technical highlights.

---

## 🛡️ License
Private Portfolio Repository © Prajwal Ramteke.

