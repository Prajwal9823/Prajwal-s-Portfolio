import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prajwal Ramteke | Software Engineer · IIT Hyderabad",
  description:
    "Personal engineering portfolio of Prajwal Ramteke — Chemical Engineering student at IIT Hyderabad ('27), SDE Intern at TMRW House of Brands (ABFRL), and full-stack & AI engineer.",
  keywords: [
    "Prajwal Ramteke",
    "IIT Hyderabad",
    "Software Engineer",
    "Full-Stack Developer",
    "AI/ML",
    "TMRW House of Brands",
    "ABFRL",
    "Next.js",
    "FastAPI",
    "LeetCode",
  ],
  authors: [{ name: "Prajwal Ramteke" }],
  openGraph: {
    title: "Prajwal Ramteke | Software Engineer · IIT Hyderabad",
    description: "Engineering ideas into impactful software. Full-stack, AI, and systems engineering.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0c10] text-slate-100 min-h-screen selection:bg-emerald-500/20 selection:text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
