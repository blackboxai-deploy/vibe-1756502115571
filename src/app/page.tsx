"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { TeacherSpotlight } from "@/components/home/teacher-spotlight";
import { Footer } from "@/components/layout/footer";
import { Locale, defaultLocale, getDirection } from "@/lib/i18n";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  return (
    <div className={`min-h-screen ${getDirection(locale)}`} dir={getDirection(locale)}>
      <Header locale={locale} onLocaleChange={setLocale} />
      <main>
        <Hero locale={locale} />
        <FeaturedCourses locale={locale} />
        <TeacherSpotlight locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}