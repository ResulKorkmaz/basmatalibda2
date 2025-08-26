import Image from 'next/image'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon, CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { getAllServices } from '@/lib/services'

export default function ServicesSection() {
  const services = getAllServices()

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-800 px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-600 rounded-full"></span>
            خدماتنا المتخصصة
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 arabic-text mb-6 md:mb-8 leading-tight px-4">
            مجموعة شاملة من
            <span className="block text-brand-800">الخدمات المتميزة</span>
          </h2>
          
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            نقدم حلولاً متكاملة في مجال البناء والترميم بأحدث التقنيات ومعايير الجودة العالمية
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 max-w-3xl mx-auto px-4">
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-gray-100">
              <div className="text-lg md:text-2xl font-bold text-brand-800">+500</div>
              <div className="text-xs md:text-sm text-gray-600">مشروع مكتمل</div>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-gray-100">
              <div className="text-lg md:text-2xl font-bold text-brand-800">+300</div>
              <div className="text-xs md:text-sm text-gray-600">عميل راضٍ</div>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-gray-100">
              <div className="text-lg md:text-2xl font-bold text-brand-800">10+</div>
              <div className="text-xs md:text-sm text-gray-600">سنوات خبرة</div>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm border border-gray-100">
              <div className="text-lg md:text-2xl font-bold text-brand-800">24/7</div>
              <div className="text-xs md:text-sm text-gray-600">دعم فني</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 px-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Service Number */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-800 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                <div className="bg-white/95 backdrop-blur-sm text-brand-800 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold border border-brand-200">
                  {service.badge}
                </div>
              </div>

              {/* Service Image */}
              <div className="relative h-56 md:h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <div className="bg-white/90 backdrop-blur-sm text-brand-800 px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold">
                    {service.stats}
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-3xl md:text-5xl bg-white/90 p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-brand-800 transition-colors leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 md:gap-3 group/feature">
                      <CheckCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-200" />
                      <span className="text-gray-700 font-medium text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2 md:gap-3">
                  <a
                    href="tel:0576095153"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-800 text-white px-4 py-3 md:px-6 md:py-4 rounded-lg md:rounded-xl font-semibold text-sm md:text-base hover:bg-brand-900 transition-all duration-300 transform hover:scale-105 group/cta"
                  >
                    <PhoneIcon className="h-4 w-4 md:h-5 md:w-5 group-hover/cta:rotate-12 transition-transform duration-300" />
                    اطلب الآن
                  </a>
                  <Link
                    href={`/services/${service.slug}`}
                    className="p-3 md:p-4 border-2 border-gray-200 rounded-lg md:rounded-xl hover:border-brand-800 hover:text-brand-800 transition-all duration-300 group/details"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 md:h-5 md:w-5 group-hover/details:translate-x-1 group-hover/details:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-brand-600/5 rounded-2xl md:rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-20 px-4">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              لم تجد الخدمة التي تبحث عنها؟
            </h3>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              تواصل معنا للحصول على استشارة مجانية وحلول مخصصة تناسب احتياجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="tel:0576095153"
                className="inline-flex items-center justify-center gap-3 bg-brand-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-brand-900 transition-all duration-300 transform hover:scale-105"
              >
                <PhoneIcon className="h-5 w-5 md:h-6 md:w-6" />
                استشارة مجانية
              </a>
              <a
                href="https://wa.me/966576095153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border-2 border-brand-800 text-brand-800 bg-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-lg hover:bg-brand-800 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-lg md:text-xl">💬</span>
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}