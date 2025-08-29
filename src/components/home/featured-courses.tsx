"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Locale, getMessage } from "@/lib/i18n";

interface FeaturedCoursesProps {
  locale: Locale;
}

export function FeaturedCourses({ locale }: FeaturedCoursesProps) {
  const t = (key: string) => getMessage(locale, key);

  // Mock data for featured courses
  const featuredCourses = [
    {
      id: '1',
      title: locale === 'ar' ? 'أساسيات React و JavaScript' : 'React & JavaScript Fundamentals',
      instructor: locale === 'ar' ? 'أحمد محمد' : 'Sarah Johnson',
      price: 99,
      rating: 4.8,
      studentsCount: 1234,
      duration: '8 hours',
      level: 'Beginner',
      category: locale === 'ar' ? 'البرمجة' : 'Programming',
      thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d8c267d3-cd49-4379-9bf0-512257383417.png'
    },
    {
      id: '2',
      title: locale === 'ar' ? 'التسويق الرقمي الشامل' : 'Complete Digital Marketing',
      instructor: locale === 'ar' ? 'فاطمة علي' : 'Michael Chen',
      price: 149,
      rating: 4.9,
      studentsCount: 892,
      duration: '12 hours',
      level: 'Intermediate',
      category: locale === 'ar' ? 'التسويق' : 'Marketing',
      thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ae6d092-ca69-4520-b99c-6d4634434768.png'
    },
    {
      id: '3',
      title: locale === 'ar' ? 'تصميم UX/UI من الصفر' : 'UX/UI Design from Scratch',
      instructor: locale === 'ar' ? 'خالد الأحمد' : 'Emily Rodriguez',
      price: 199,
      rating: 4.7,
      studentsCount: 567,
      duration: '15 hours',
      level: 'Beginner',
      category: locale === 'ar' ? 'التصميم' : 'Design',
      thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64f8cc74-776c-4cbc-a4c6-4bf733b240de.png'
    },
    {
      id: '4',
      title: locale === 'ar' ? 'علوم البيانات والذكاء الاصطناعي' : 'Data Science & AI',
      instructor: locale === 'ar' ? 'د. نور الدين' : 'Dr. James Wilson',
      price: 299,
      rating: 4.9,
      studentsCount: 432,
      duration: '20 hours',
      level: 'Advanced',
      category: locale === 'ar' ? 'علوم البيانات' : 'Data Science',
      thumbnail: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/980265a6-a816-4b64-969d-f9f5ac92fbd6.png'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {locale === 'ar' ? 'الدورات المميزة' : 'Featured Courses'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {locale === 'ar' ? 
              'اكتشف أفضل الدورات التدريبية المختارة بعناية من خبراء في مختلف المجالات' :
              'Discover our handpicked selection of top-rated courses from industry experts'
            }
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {locale === 'ar' ? 
                        (course.level === 'Beginner' ? 'مبتدئ' : course.level === 'Intermediate' ? 'متوسط' : 'متقدم') :
                        course.level
                      }
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3">
                    <Badge className="bg-blue-600">
                      ${course.price}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {locale === 'ar' ? 'المدرس: ' : 'by '}{course.instructor}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{course.rating}</span>
                  </div>
                  <span>({course.studentsCount.toLocaleString()} {t('common.students')})</span>
                </div>
                
                <div className="text-sm text-gray-500">
                  {locale === 'ar' ? 'المدة: ' : 'Duration: '}{course.duration}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Link href={`/courses/${course.id}`} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {t('course.viewCourse')}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center">
          <Link href="/courses">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
            >
              {locale === 'ar' ? 'عرض جميع الدورات' : 'View All Courses'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}