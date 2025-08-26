import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const services = [
    { name: 'ترميم وصيانة المباني', href: '/services/building-renovation-maintenance' },
    { name: 'أعمال الدهانات', href: '/services/interior-exterior-painting' },
    { name: 'الديكورات الحديثة', href: '/services/modern-decoration' },
    { name: 'جبس بورد وعوازل', href: '/services/gypsum-board-insulation' },
    { name: 'أسقف سندويش بانل', href: '/services/sandwich-panel-ceilings' },
    { name: 'جودة التنفيذ', href: '/services/high-quality-implementation' }
  ]

  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'جميع الخدمات', href: '/services' },
    { name: 'تواصل معنا', href: '/#contact' },
    { name: 'عن الشركة', href: '/#why-us' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtLTEwIDMwaDYwdjJoLTYweiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuMDMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                  <Image
                    src="/logo.png"
                    alt="مؤسسة مكارم الجنوب للترميمات والبناء"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold arabic-text">مؤسسة مكارم الجنوب</h3>
                  <p className="text-gray-400 text-lg">للترميمات والبناء</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                نحن نفخر بتقديم خدمات الترميم والبناء بأعلى معايير الجودة والاحترافية في الرياض. 
                فريقنا المتخصص يضمن تنفيذ مشاريعكم بدقة وإتقان منذ أكثر من 10 سنوات.
              </p>

              <div className="flex items-center gap-3 p-4 bg-gray-800 rounded-xl border border-gray-700">
                <div className="text-3xl">👷‍♂️</div>
                <div>
                  <div className="text-gray-400 text-sm">بإشراف:</div>
                  <div className="font-semibold text-brand-400 text-lg">أبو محمد</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <div className="text-xl font-bold text-brand-400">+500</div>
                  <div className="text-xs text-gray-400">مشروع</div>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <div className="text-xl font-bold text-brand-400">+300</div>
                  <div className="text-xs text-gray-400">عميل</div>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <div className="text-xl font-bold text-brand-400">10+</div>
                  <div className="text-xs text-gray-400">سنوات</div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold relative">
                خدماتنا
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-400"></div>
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-brand-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-brand-400 transition-colors"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Contact */}
            <div className="space-y-6">
              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold relative">
                  روابط سريعة
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-400"></div>
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-brand-400 transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-brand-400 transition-colors"></span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold relative">
                  تواصل معنا
                  <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-brand-400"></div>
                </h4>
                <div className="space-y-3">
                  <a 
                    href="tel:0576095153" 
                    className="flex items-center gap-3 text-gray-300 hover:text-brand-400 transition-colors duration-200 group"
                  >
                    <PhoneIcon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                    <span>0576095153</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPinIcon className="h-5 w-5" />
                    <span>الرياض، المملكة العربية السعودية</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <ClockIcon className="h-5 w-5" />
                    <span>متاحون 24/7 لخدمتكم</span>
                  </div>
                  
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/966576095153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 mt-4"
                  >
                    <span className="text-lg">💬</span>
                    <span className="font-semibold">واتساب</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-gray-400 mb-2">
                  © {currentYear} مؤسسة مكارم الجنوب للترميمات والبناء. جميع الحقوق محفوظة.
                </p>
                <p className="text-gray-500 text-sm">
                  مرخصة ومعتمدة في المملكة العربية السعودية
                </p>
              </div>

              {/* Social & Designer Credit */}
              <div className="flex flex-col items-center md:items-left gap-3">
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="tel:0576095153"
                    className="w-10 h-10 bg-gray-800 hover:bg-brand-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                    title="اتصل بنا"
                  >
                    <PhoneIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://wa.me/966576095153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                    title="واتساب"
                  >
                    <span className="text-sm">💬</span>
                  </a>
                </div>

                {/* Designer Credit */}
                <a
                  href="https://www.falconprodigital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-500 hover:text-brand-400 transition-all duration-200 text-sm"
                >
                  <span>تصميم وتطوير بواسطة</span>
                  <span className="font-semibold group-hover:text-brand-300">Falcon Pro Global</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
