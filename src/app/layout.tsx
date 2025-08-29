import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/auth-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScribeHub - Your hub for knowledge",
  description: "Connect, Learn, and Teach. The ultimate educational platform connecting teachers with students worldwide.",
  keywords: "education, online learning, courses, teachers, students, e-learning, ScribeHub",
  authors: [{ name: "ScribeHub Team" }],
  openGraph: {
    title: "ScribeHub - Your hub for knowledge",
    description: "Connect, Learn, and Teach on ScribeHub",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${cairo.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}