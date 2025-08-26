import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { getAllServices } from '@/lib/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'جميع خدماتنا | مؤسسة مكارم الجنوب للترميمات والبناء',
  description: 'تعرف على جميع خدمات مؤسسة مكارم الجنوب: ترميم المباني، الدهانات، الديكور، الجبس بورد، السندويش بانل في الرياض',
  keywords: 'خدمات البناء الرياض, ترميم المباني, دهانات, ديكور, جبس بورد, سندويش بانل, مقاولات الرياض',
  openGraph: {
    title: 'جميع خدماتنا | مؤسسة مكارم الجنوب للترميمات والبناء',
    description: 'تعرف على جميع خدمات مؤسسة مكارم الجنوب: ترميم المباني، الدهانات، الديكور، الجبس بورد، السندويش بانل في الرياض',
    type: 'website',
    locale: 'ar_SA',
  },
};

export default function ServicesPage() {
  const services = getAllServices();

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
                  <li className="text-brand-800 font-medium">جميع الخدمات</li>
                </ol>
              </nav>

              {/* Service Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-brand-600 rounded-full"></span>
                خدماتنا المتكاملة
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold arabic-text text-gray-900 leading-tight">
                  جميع خدماتنا
                  <span className="block text-brand-800">المتخصصة</span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-600">
                  نقدم مجموعة شاملة من الخدمات المتخصصة في مجال البناء والترميم والديكور
                  بأعلى معايير الجودة والاحترافية في الرياض
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-800">6</div>
                  <div className="text-sm text-gray-600">خدمات متخصصة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-800">+500</div>
                  <div className="text-sm text-gray-600">مشروع مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-800">+300</div>
                  <div className="text-sm text-gray-600">عميل راضٍ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-800">10+</div>
                  <div className="text-sm text-gray-600">سنوات خبرة</div>
                </div>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">جودة عالية وضمان شامل</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">أسعار تنافسية ومناسبة</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">فريق عمل متخصص ومدرب</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">خدمة عملاء 24/7</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0536095153"
                  className="inline-flex items-center justify-center gap-3 bg-brand-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-900 transition-all duration-300 transform hover:scale-105 card-shadow"
                >
                  <PhoneIcon className="h-6 w-6" />
                  استشارة مجانية
                </a>
                <a
                  href="https://wa.me/966536095153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border-2 border-brand-800 text-brand-800 bg-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-800 hover:text-white transition-all duration-300 transform hover:scale-105 card-shadow"
                >
                  <span className="text-xl">💬</span>
                  تواصل واتساب
                </a>
              </div>
            </div>

            {/* Image Collage - Right Side */}
            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4 h-96 md:h-[500px] lg:h-[600px]">
                {/* Top Left */}
                <div className="relative rounded-2xl overflow-hidden card-shadow group">
                  <Image
                    src="/bina-resterasyon.jpg"
                    alt="ترميم المباني"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg">
                      <div className="font-bold text-brand-800 text-sm">ترميم المباني</div>
                    </div>
                  </div>
                </div>

                {/* Top Right */}
                <div className="relative rounded-2xl overflow-hidden card-shadow group">
                  <Image
                    src="/ic-ve-discephe-boya.jpg"
                    alt="أعمال الدهانات"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg">
                      <div className="font-bold text-brand-800 text-sm">أعمال الدهانات</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Left */}
                <div className="relative rounded-2xl overflow-hidden card-shadow group">
                  <Image
                    src="/modern-dekarasyon.jpg"
                    alt="الديكورات الحديثة"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg">
                      <div className="font-bold text-brand-800 text-sm">الديكورات</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Right */}
                <div className="relative rounded-2xl overflow-hidden card-shadow group">
                  <Image
                    src="/alcipan-tavan.jpg"
                    alt="جبس بورد وعوازل"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg">
                      <div className="font-bold text-brand-800 text-sm">جبس بورد</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -top-6 left-6 bg-brand-800 text-white p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">+500</div>
                  <div className="text-xs opacity-90">مشروع مكتمل</div>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute -bottom-6 right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <div className="font-bold text-brand-800">جودة مضمونة</div>
                    <div className="text-xs text-gray-600">ضمان شامل</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              >
                {/* Service Number */}
                <div className="absolute top-6 left-6 z-10">
                  <div className="w-12 h-12 bg-brand-800 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="bg-white/95 backdrop-blur-sm text-brand-800 px-3 py-1 rounded-full text-xs font-semibold border border-brand-200">
                    {service.badge}
                  </div>
                </div>

                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm text-brand-800 px-3 py-1 rounded-lg text-sm font-semibold">
                      {service.stats}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-6 right-6 text-4xl bg-white/90 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-800 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{service.features.length - 3} المزيد...
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-900 transition-all duration-300 transform hover:scale-105"
                    >
                      تفاصيل أكثر
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                    <a
                      href="tel:0536095153"
                      className="p-3 border-2 border-gray-200 rounded-xl hover:border-brand-800 hover:text-brand-800 transition-all duration-300 group/phone"
                    >
                      <PhoneIcon className="h-5 w-5 group-hover/phone:rotate-12 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-brand-600/5 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            جاهز لبدء مشروعك؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            تواصل معنا اليوم واحصل على استشارة مجانية ومعاينة شاملة لمشروعك مع أفضل الأسعار
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0536095153"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <PhoneIcon className="h-6 w-6" />
              اتصل بنا الآن: 0536095153
            </a>
            <a
              href="https://wa.me/966536095153"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-white text-white bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-brand-800 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-xl">💬</span>
              واتساب
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
