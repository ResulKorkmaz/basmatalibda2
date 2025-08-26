import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon, ArrowRightIcon, StarIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { getServiceBySlug, getAllServices } from '@/lib/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'الخدمة غير موجودة',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords.join(', '),
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
      type: 'website',
      locale: 'ar_SA',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const otherServices = getAllServices().filter(s => s.id !== service.id).slice(0, 3);

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "مؤسسة مكارم الجنوب للترميمات والبناء",
      "telephone": "0576095153",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "الرياض",
        "addressCountry": "SA"
      }
    },
    "serviceType": service.title,
    "areaServed": "الرياض",
    "offers": {
      "@type": "Offer",
      "description": service.pricing.description,
      "price": "حسب المشروع",
      "priceCurrency": "SAR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-24 pb-8 md:pt-32 md:pb-16 bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Text Content - First on mobile, Left on desktop */}
            <div className="space-y-6 md:space-y-8 order-1">
              {/* Breadcrumb */}
              <nav className="flex mb-4 md:mb-6">
                <ol className="flex items-center space-x-2 text-xs md:text-sm">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-brand-800 transition-colors">
                      الرئيسية
                    </Link>
                  </li>
                  <ArrowRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-400 mx-1 md:mx-2" />
                  <li>
                    <Link href="/services" className="text-gray-600 hover:text-brand-800 transition-colors">
                      الخدمات
                    </Link>
                  </li>
                  <ArrowRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-400 mx-1 md:mx-2" />
                  <li className="text-brand-800 font-medium truncate max-w-[120px] md:max-w-none">{service.title}</li>
                </ol>
              </nav>

              {/* Service Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                <span className="text-lg md:text-2xl">{service.icon}</span>
                {service.badge}
              </div>

              {/* Title */}
              <div className="space-y-3 md:space-y-4 text-center lg:text-right">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold arabic-text text-gray-900 leading-tight">
                  {service.title}
                </h1>
                <p className="text-base md:text-xl lg:text-2xl leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 py-4 md:py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <div className="text-lg md:text-2xl lg:text-3xl font-bold text-brand-800">{service.stats}</div>
                  <div className="text-xs md:text-sm text-gray-600">مشاريع منجزة</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl lg:text-3xl font-bold text-brand-800">⭐ 4.9</div>
                  <div className="text-xs md:text-sm text-gray-600">تقييم العملاء</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl lg:text-3xl font-bold text-brand-800">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600">دعم فني</div>
                </div>
              </div>

              {/* Key Features Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {service.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-white rounded-lg card-shadow">
                    <CheckCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 md:gap-4">
                <a
                  href="tel:0576095153"
                  className="inline-flex items-center justify-center gap-3 bg-brand-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-brand-900 transition-all duration-300 transform hover:scale-105 card-shadow"
                >
                  <PhoneIcon className="h-5 w-5 md:h-6 md:w-6" />
                  اطلب الخدمة الآن
                </a>
                <a
                  href="https://wa.me/966576095153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border-2 border-brand-800 text-brand-800 bg-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-brand-800 hover:text-white transition-all duration-300 transform hover:scale-105 card-shadow"
                >
                  <span className="text-lg md:text-xl">💬</span>
                  تواصل واتساب
                </a>
              </div>
            </div>

            {/* Image - Second on mobile, Right on desktop */}
            <div className="relative order-2">
              <div className="relative h-80 md:h-[500px] lg:h-[600px] rounded-xl md:rounded-2xl overflow-hidden card-shadow group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-brand-800 px-4 py-2 rounded-xl font-semibold shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{service.icon}</span>
                    <span>خدمة متميزة</span>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-brand-800">مؤسسة مكارم الجنوب</div>
                        <div className="text-sm text-gray-600">جودة وثقة منذ 10 سنوات</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">ضمان شامل</div>
                        <div className="font-bold text-brand-800">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Full Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">تفاصيل الخدمة</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ما نقدمه لكم</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="font-medium text-gray-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">خطوات العمل</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl">{step.icon}</span>
                        </div>
                        <div>
                          <div className="absolute top-4 left-4 w-8 h-8 bg-brand-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                          </div>
                          <h4 className="text-lg font-bold text-gray-900 mb-2 mr-10">{step.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">لماذا تختارنا؟</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-brand-50 rounded-xl">
                      <StarIcon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-800 leading-relaxed">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h3>
                <div className="space-y-4">
                  {service.faq.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-brand-800 text-white rounded-2xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-6">احصل على عرض سعر</h3>
                <p className="mb-6 opacity-90">
                  تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5" />
                    <span>0576095153</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClockIcon className="h-5 w-5" />
                    <span>متاحون 24/7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5" />
                    <span>ضمان شامل</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:0576095153"
                    className="block w-full bg-white text-brand-800 px-6 py-3 rounded-xl font-bold text-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    📞 اتصل الآن
                  </a>
                  <a
                    href="https://wa.me/966576095153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-white text-white px-6 py-3 rounded-xl font-bold text-center hover:bg-white hover:text-brand-800 transition-all duration-200"
                  >
                    💬 واتساب
                  </a>
                </div>
              </div>

              {/* Pricing Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.pricing.title}</h4>
                <p className="text-gray-600 mb-4">{service.pricing.description}</p>
                <ul className="space-y-2">
                  {service.pricing.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              خدمات أخرى قد تهمك
            </h2>
            <p className="text-xl text-gray-600">
              اكتشف مجموعة خدماتنا المتكاملة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((relatedService) => (
              <Link
                key={relatedService.id}
                href={`/services/${relatedService.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 right-4 text-3xl bg-white/90 p-3 rounded-full">
                    {relatedService.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-800 transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {relatedService.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-800 font-semibold">تعرف أكثر</span>
                    <ArrowRightIcon className="h-5 w-5 text-brand-800 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            جاهز لبدء مشروعك؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            تواصل معنا اليوم واحصل على استشارة مجانية ومعاينة شاملة لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0576095153"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <PhoneIcon className="h-6 w-6" />
              اتصل بنا الآن
            </a>
            <a
              href="https://wa.me/966576095153"
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
