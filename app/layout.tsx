import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Resume Skills Extractor",
  description: "Extract real skills from candidate GitHub profiles. Analyze repos to identify actual programming skills, frameworks, and experience level beyond resume claims."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2ca6d903-c603-4627-9a2a-6c429ef94106"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
