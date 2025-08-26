import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServiceNotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Breadcrumb */}
              <nav className="flex mb-6">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-brand-800 transition-colors">
                      الرئيسية
                    </Link>
                  </li>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                  <li>
                    <Link href="/services" className="text-gray-600 hover:text-brand-800 transition-colors">
                      الخدمات
                    </Link>
                  </li>
                  <ArrowRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                  <li className="text-brand-800 font-medium">صفحة غير موجودة</li>
                </ol>
              </nav>

              {/* Error Badge */}
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="text-2xl">🔍</span>
                خطأ 404
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold arabic-text text-gray-900 leading-tight">
                  الخدمة غير موجودة
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-600">
                  عذراً، لم نتمكن من العثور على الخدمة التي تبحث عنها. 
                  يمكنك العودة إلى الصفحة الرئيسية أو تصفح خدماتنا الأخرى.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-800">6</div>
                  <div className="text-sm text-gray-600">خدمات متاحة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-800">24/7</div>
                  <div className="text-sm text-gray-600">دعم فني</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-800">100%</div>
                  <div className="text-sm text-gray-600">ضمان الجودة</div>
                </div>
              </div>

              {/* Suggestions */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900">ربما تبحث عن:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                    <span className="text-lg">🏠</span>
                    <span className="text-gray-700 font-medium">ترميم المباني</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                    <span className="text-lg">🎨</span>
                    <span className="text-gray-700 font-medium">أعمال الدهانات</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                    <span className="text-lg">✨</span>
                    <span className="text-gray-700 font-medium">الديكورات الحديثة</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                    <span className="text-lg">🔧</span>
                    <span className="text-gray-700 font-medium">جبس بورد وعوازل</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-3 bg-brand-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-900 transition-all duration-300 transform hover:scale-105 card-shadow"
                >
                  <ArrowRightIcon className="h-6 w-6" />
                  العودة للرئيسية
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 border-2 border-brand-800 text-brand-800 bg-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 hover:text-white transition-all duration-300 transform hover:scale-105 card-shadow"
                >
                  تصفح جميع الخدمات
                </Link>
              </div>
            </div>

            {/* Illustration - Right Side */}
            <div className="relative order-1 lg:order-2">
              <div className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center">
                {/* Large 404 */}
                <div className="text-center">
                  <div className="text-9xl font-bold text-gray-200 mb-8">404</div>
                  <div className="relative -mt-20">
                    <div className="text-6xl mb-4">🔍</div>
                    <div className="text-2xl font-bold text-gray-600 mb-4">الصفحة غير موجودة</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-10 bg-brand-100 p-4 rounded-full animate-bounce delay-100">
                  <span className="text-2xl">🏠</span>
                </div>
                <div className="absolute top-40 left-10 bg-brand-100 p-4 rounded-full animate-bounce delay-200">
                  <span className="text-2xl">🎨</span>
                </div>
                <div className="absolute bottom-40 right-20 bg-brand-100 p-4 rounded-full animate-bounce delay-300">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="absolute bottom-20 left-20 bg-brand-100 p-4 rounded-full animate-bounce delay-500">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
