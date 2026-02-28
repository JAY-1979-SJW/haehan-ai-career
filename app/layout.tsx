import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "채용 | 해한Ai Engineering",
  description: "AI로 산업을 혁신하는 해한Ai Engineering에서 함께할 인재를 찾습니다. AI 개발자, 풀스택 개발자, 건설IT 컨설턴트 채용 중.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
