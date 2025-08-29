"use client";

import Link from "next/link";
import { Locale, getMessage } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = (key: string) => getMessage(locale, key);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SH</span>
              </div>
              <span className="text-xl font-bold">
                {t('nav.scribehub')}
              </span>
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              {locale === 'ar' ? 
                'منصة تعليمية شاملة تربط بين المدرسين والطلاب لتحقيق أهداف التعلم.' :
                'A comprehensive educational platform connecting teachers and students to achieve learning goals.'
              }
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {/* Social Media Links */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {locale === 'ar' ? 'الدورات' : 'Courses'}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/courses" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'تصفح الدورات' : 'Browse Courses'}
              </Link>
              <Link href="/courses?category=programming" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'البرمجة' : 'Programming'}
              </Link>
              <Link href="/courses?category=design" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'التصميم' : 'Design'}
              </Link>
              <Link href="/courses?category=marketing" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'التسويق' : 'Marketing'}
              </Link>
              <Link href="/courses?category=business" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'الأعمال' : 'Business'}
              </Link>
            </nav>
          </div>

          {/* Teaching */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {locale === 'ar' ? 'التدريس' : 'Teaching'}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/become-teacher" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'كن مدرساً' : 'Become a Teacher'}
              </Link>
              <Link href="/teacher-resources" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'موارد للمدرسين' : 'Teacher Resources'}
              </Link>
              <Link href="/teacher-community" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'مجتمع المدرسين' : 'Teacher Community'}
              </Link>
              <Link href="/teaching-guidelines" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'إرشادات التدريس' : 'Teaching Guidelines'}
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {locale === 'ar' ? 'الدعم' : 'Support'}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/help" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'مركز المساعدة' : 'Help Center'}
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </Link>
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'شروط الاستخدام' : 'Terms of Service'}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t('nav.scribehub')}. {locale === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'إمكانية الوصول' : 'Accessibility'}
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                {locale === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
              </Link>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-gray-400 text-sm">
                  {locale === 'ar' ? 'صنع بـ' : 'Made with'}
                </span>
                <span className="text-red-500">♥</span>
                <span className="text-gray-400 text-sm">
                  {locale === 'ar' ? 'للتعليم' : 'for education'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}