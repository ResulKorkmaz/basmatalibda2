import { CheckCircleIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function WhyUsSection() {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-12 w-12 text-primary-500" />,
      title: 'جودة عالية وخامات متينة',
      description: 'نستخدم أفضل المواد والخامات عالية الجودة لضمان متانة وطول عمر الأعمال المنجزة',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <UserGroupIcon className="h-12 w-12 text-accent-500" />,
      title: 'تصميم وتنفيذ حسب طلب العميل',
      description: 'نعمل بشكل وثيق مع عملائنا لتحقيق رؤيتهم وتنفيذ مشاريعهم وفق متطلباتهم الخاصة',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <ClockIcon className="h-12 w-12 text-green-500" />,
      title: 'تنفيذ سريع وفق أعلى المعايير',
      description: 'نلتزم بالمواعيد المحددة ونضمن تسليم المشاريع في الوقت المناسب دون التنازل عن الجودة',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <CurrencyDollarIcon className="h-12 w-12 text-purple-500" />,
      title: 'أسعار تنافسية تناسب الجميع',
      description: 'نقدم أسعارًا عادلة ومناسبة لجميع فئات العملاء مع الحفاظ على أعلى مستويات الخدمة',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <StarIcon className="h-12 w-12 text-yellow-500" />,
      title: 'خدمة احترافية من فريق متمكن وذو خبرة',
      description: 'فريق عمل محترف ومتخصص بخبرة واسعة في مجال البناء والترميم والديكورات',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <CheckCircleIcon className="h-12 w-12 text-indigo-500" />,
      title: 'ضمان على جميع الأعمال',
      description: 'نقدم ضمانًا شاملاً على جميع أعمالنا لراحة البال وثقة العملاء الكاملة',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Basmatalibda Construction Services",
            "description": "Professional construction, renovation and decoration services with high quality materials",
            "provider": {
              "@type": "Organization",
              "name": "Basmatalibda",
              "telephone": "0576095153"
            },
            "areaServed": "Turkey",
            "serviceType": ["Construction", "Renovation", "Decoration", "Ceiling Installation"]
          })
        }}
      />

      <section 
        id="why-us" 
        className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
        aria-labelledby="why-us-heading"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full blur-3xl opacity-70"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section with Image */}
          <div className="text-center mb-12 md:mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
              <div className="lg:w-1/2 space-y-4 md:space-y-6">
                <div className="inline-block">
                  <span className="inline-block px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4 transform rotate-1">
                    ✨ الخيار الأول للعملاء
                  </span>
                </div>
                <h2 
                  id="why-us-heading"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent arabic-text leading-tight"
                >
                  لماذا تختارنا؟
                </h2>
                <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                  نحن نفخر بتقديم خدمات متميزة تجعلنا الخيار الأول لعملائنا الكرام مع ضمان الجودة والاحترافية
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
                    <Image
                      src="/yıksek-uygulama-kalitesi.jpg"
                      alt="عالية الجودة في التطبيق - خدمات البناء والترميم المتميزة"
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 px-4">
            {features.map((feature, index) => (
              <article
                key={index}
                className="relative group h-full"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl md:rounded-3xl p-6 md:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl md:rounded-3xl transition-all duration-500`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4 md:space-y-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className="relative p-3 md:p-4 bg-white rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        <div className="[&>svg]:h-8 [&>svg]:w-8 md:[&>svg]:h-12 md:[&>svg]:w-12">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h3 
                      className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-800 transition-colors duration-300"
                      itemProp="name"
                    >
                      {feature.title}
                    </h3>
                    
                    <p 
                      className="text-gray-600 leading-relaxed text-sm md:text-lg"
                      itemProp="description"
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
              </article>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div className="relative mb-12 md:mb-20 px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-2xl md:rounded-3xl blur-sm"></div>
            <div className="relative bg-gradient-to-r from-blue-800 via-purple-800 to-blue-800 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
                  أرقام تتحدث عن تميزنا
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
                  <div className="space-y-2 md:space-y-3 group">
                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300">+500</div>
                    <div className="text-sm md:text-lg lg:text-xl font-semibold opacity-90">مشروع مكتمل</div>
                  </div>
                  <div className="space-y-2 md:space-y-3 group">
                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300">+300</div>
                    <div className="text-sm md:text-lg lg:text-xl font-semibold opacity-90">عميل راضٍ</div>
                  </div>
                  <div className="space-y-2 md:space-y-3 group">
                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300">10+</div>
                    <div className="text-sm md:text-lg lg:text-xl font-semibold opacity-90">سنوات خبرة</div>
                  </div>
                  <div className="space-y-2 md:space-y-3 group">
                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-sm md:text-lg lg:text-xl font-semibold opacity-90">خدمة العملاء</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center relative px-4">
            <div className="relative bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-gray-200/50">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-2xl md:rounded-3xl"></div>
              <div className="relative z-10 space-y-6 md:space-y-8">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                  جاهزون لتحويل أحلامكم إلى واقع
                </h3>
                <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  تواصلوا معنا اليوم واحصلوا على استشارة مجانية ومعاينة شاملة لمشروعكم مع ضمان أفضل الأسعار
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                  <a
                    href="tel:0576095153"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                    aria-label="اتصل بنا على الرقم 0576095153"
                  >
                    <span className="text-xl md:text-2xl group-hover:animate-bounce">📞</span>
                    <span className="hidden sm:inline">اتصل بنا الآن: 0576095153</span>
                    <span className="sm:hidden">اتصل الآن</span>
                  </a>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-green-500 text-lg md:text-xl">✅</span>
                    <span className="font-semibold text-sm md:text-base">استشارة مجانية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
