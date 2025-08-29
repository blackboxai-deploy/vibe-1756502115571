"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Locale, getMessage } from "@/lib/i18n";

interface TeacherSpotlightProps {
  locale: Locale;
}

export function TeacherSpotlight({ locale }: TeacherSpotlightProps) {
  const t = (key: string) => getMessage(locale, key);

  // Mock data for featured teachers
  const featuredTeachers = [
    {
      id: '1',
      name: locale === 'ar' ? 'د. أحمد محمد' : 'Dr. Sarah Johnson',
      title: locale === 'ar' ? 'خبير في تطوير الويب' : 'Web Development Expert',
      bio: locale === 'ar' ? 
        'أكثر من 10 سنوات خبرة في تطوير التطبيقات والمواقع الحديثة' :
        'Over 10 years experience in modern web and app development',
      rating: 4.9,
      studentsCount: 5420,
      coursesCount: 12,
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3984851-6e10-4a78-a3f4-219fee0db6b0.png',
      specialties: locale === 'ar' ? ['React', 'Node.js', 'TypeScript'] : ['React', 'Node.js', 'TypeScript']
    },
    {
      id: '2',
      name: locale === 'ar' ? 'فاطمة علي' : 'Michael Chen',
      title: locale === 'ar' ? 'استراتيجي التسويق الرقمي' : 'Digital Marketing Strategist',
      bio: locale === 'ar' ? 
        'مساعدة الشركات على النمو من خلال التسويق الرقمي الفعال' :
        'Helping businesses grow through effective digital marketing strategies',
      rating: 4.8,
      studentsCount: 3210,
      coursesCount: 8,
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/04b9bf19-5149-443b-819c-8d2443d76283.png',
      specialties: locale === 'ar' ? ['SEO', 'التسويق عبر وسائل التواصل', 'Google Ads'] : ['SEO', 'Social Media', 'Google Ads']
    },
    {
      id: '3',
      name: locale === 'ar' ? 'خالد الأحمد' : 'Emily Rodriguez',
      title: locale === 'ar' ? 'مصمم UX/UI متقدم' : 'Senior UX/UI Designer',
      bio: locale === 'ar' ? 
        'تصميم تجارب مستخدم استثنائية للتطبيقات والمواقع' :
        'Creating exceptional user experiences for web and mobile applications',
      rating: 4.9,
      studentsCount: 2890,
      coursesCount: 15,
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7aae3629-14ea-4ac6-9e87-a383362505ec.png',
      specialties: locale === 'ar' ? ['Figma', 'تصميم التطبيقات', 'نماذج أولية'] : ['Figma', 'App Design', 'Prototyping']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {locale === 'ar' ? 'المدرسون المميزون' : 'Featured Teachers'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {locale === 'ar' ? 
              'تعلم من خبراء الصناعة الذين يشاركون معرفتهم وخبرتهم العملية' :
              'Learn from industry experts who share their knowledge and practical experience'
            }
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTeachers.map((teacher) => (
            <Card key={teacher.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                {/* Teacher Image */}
                <div className="relative mb-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-3 py-1 text-xs">
                      {locale === 'ar' ? 'متاح' : 'Available'}
                    </Badge>
                  </div>
                </div>

                {/* Teacher Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {teacher.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {teacher.title}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {teacher.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {teacher.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{teacher.rating}</div>
                    <div className="text-xs text-gray-500">{t('common.rating')}</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{teacher.studentsCount.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{t('common.students')}</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{teacher.coursesCount}</div>
                    <div className="text-xs text-gray-500">{t('common.courses')}</div>
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/teachers/${teacher.id}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-lg transition-all duration-300">
                    {locale === 'ar' ? 'عرض الملف الشخصي' : 'View Profile'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'ar' ? 'هل تريد أن تصبح مدرساً؟' : 'Want to become a teacher?'}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {locale === 'ar' ? 
              'انضم إلى مجتمعنا من المعلمين وشارك خبرتك مع الآلاف من الطلاب حول العالم' :
              'Join our community of educators and share your expertise with thousands of students worldwide'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-teacher">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
                {locale === 'ar' ? 'ابدأ التدريس اليوم' : 'Start Teaching Today'}
              </Button>
            </Link>
            <Link href="/teachers">
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8">
                {locale === 'ar' ? 'تصفح جميع المدرسين' : 'Browse All Teachers'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}