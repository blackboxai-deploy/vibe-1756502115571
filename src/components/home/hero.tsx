"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Locale, getMessage } from "@/lib/i18n";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = (key: string) => getMessage(locale, key);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left rtl:lg:text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {locale === 'ar' ? (
                <>
                  مركزك للمعرفة.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    تواصل، تعلم، وعلّم
                  </span>
                </>
              ) : (
                <>
                  Your hub for knowledge.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Connect, Learn, and Teach
                  </span>
                </>
              )}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 rtl:lg:mr-0">
              {locale === 'ar' ? (
                'انضم إلى آلاف الطلاب والمدرسين في رحلة تعليمية تفاعلية. اكتشف دورات عالية الجودة، أنشئ محتوى تعليمي مميز، وتواصل مع مجتمع تعليمي عالمي.'
              ) : (
                'Join thousands of students and teachers in an interactive learning journey. Discover high-quality courses, create engaging educational content, and connect with a global learning community.'
              )}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:lg:justify-end mb-12">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                  {t('nav.browseCourses')}
                </Button>
              </Link>
              <Link href="/auth/register?role=teacher">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  {t('nav.becomeTeacher')}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left rtl:lg:text-right">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600 font-medium">{t('common.students')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600 font-medium">{t('common.teachers')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">1K+</div>
                <div className="text-gray-600 font-medium">{t('common.courses')}</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 lg:mt-0 relative">
            <div className="relative mx-auto lg:mx-0 rtl:lg:mr-0">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fe51f2a0-f824-428a-b179-30e482536a12.png"
                alt="ScribeHub Learning Platform Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 rtl:-left-auto rtl:-right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Course Completed</div>
                    <div className="text-sm text-gray-500">React Fundamentals</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 rtl:-right-auto rtl:-left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Live Session</div>
                    <div className="text-sm text-gray-500">Starting in 10 min</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-8 rtl:-left-auto rtl:-right-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">4.9 Rating</div>
                    <div className="text-sm text-gray-500">Latest Review</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}