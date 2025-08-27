'use client'

import { useState } from 'react'
import { PhoneIcon, MapPinIcon, ClockIcon, EnvelopeIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    const errors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      errors.name = 'الاسم مطلوب'
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'رقم الهاتف مطلوب'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'رقم الهاتف غير صحيح'
    }
    
    if (!formData.service) {
      errors.service = 'يرجى اختيار نوع الخدمة'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create WhatsApp message
    const message = `السلام عليكم، أرغب في طلب خدمة:\n\nالاسم: ${formData.name}\nرقم الهاتف: ${formData.phone}\nنوع الخدمة: ${formData.service}\nتفاصيل إضافية: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/966576095153?text=${encodeURIComponent(message)}`
    
    // Debug WhatsApp URL
    console.log('WhatsApp URL:', whatsappUrl)
    
    // Try to open WhatsApp
    const newWindow = window.open(whatsappUrl, '_blank')
    if (!newWindow) {
      // Fallback if popup is blocked
      window.location.href = whatsappUrl
    }
    
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      service: '',
      message: ''
    })
    setFormErrors({})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const contactInfo = [
    {
      icon: <PhoneIcon className="h-8 w-8" />,
      title: 'رقم الهاتف',
      value: '0576095153',
      action: 'tel:+966576095153',
      description: 'متاحون 24/7 لاستقبال اتصالاتكم',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <MapPinIcon className="h-8 w-8" />,
      title: 'الموقع',
      value: 'الرياض',
      action: '#',
      description: 'المملكة العربية السعودية',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: 'ساعات العمل',
      value: '24/7',
      action: '#',
      description: 'خدمة متواصلة طوال الأسبوع',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: <EnvelopeIcon className="h-8 w-8" />,
      title: 'واتساب',
      value: '0576095153',
      action: 'https://wa.me/966576095153?text=السلام%20عليكم%2C%20أرغب%20في%20التواصل%20معكم',
      description: 'تواصل سريع عبر الواتساب',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ]

  const services = [
    'ترميم وصيانة المباني',
    'أعمال الدهانات الداخلية والخارجية',
    'تنفيذ الديكورات الحديثة',
    'جبس بورد وعوازل',
    'أسقف سندويش بانل',
    'خدمات أخرى'
  ]

  return (
    <>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Basmatalibda Construction Services",
            "description": "Professional construction, renovation and decoration services in Riyadh",
            "telephone": "+966576095153",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Riyadh",
              "addressCountry": "SA"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+966576095153",
              "contactType": "customer service",
              "availableLanguage": "Arabic"
            }
          })
        }}
      />

      <section 
        id="contact" 
        className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden"
        aria-labelledby="contact-heading"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200 to-transparent rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full transform -rotate-1">
                📞 تواصل معنا الآن
              </span>
            </div>
            <h2 
              id="contact-heading"
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent arabic-text mb-6 leading-tight"
            >
              تواصل معنا
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نحن هنا لخدمتكم ومساعدتكم في تحقيق مشاريعكم. تواصلوا معنا بأي طريقة تناسبكم واحصلوا على استشارة مجانية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 lg:items-start">
            {/* Enhanced Contact Form */}
            <div className="relative group h-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                    احصل على عرض سعر مجاني
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      الاسم الكامل *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg ${
                          formErrors.name ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                        }`}
                        placeholder="أدخل اسمك الكامل"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {formErrors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      رقم الهاتف *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg ${
                          formErrors.phone ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                        }`}
                        placeholder="05xxxxxxxx"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                      نوع الخدمة المطلوبة *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 border-2 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg ${
                          formErrors.service ? 'border-red-500' : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <option value="">اختر نوع الخدمة</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {formErrors.service && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <span>⚠️</span> {formErrors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      تفاصيل إضافية
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 hover:border-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg resize-none"
                      placeholder="أضف أي تفاصيل إضافية حول مشروعك..."
                    ></textarea>
                  </div>
                  </div>

                  <div className="mt-auto space-y-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-6 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <span className="text-2xl group-hover:animate-bounce">💬</span>
                          إرسال الطلب عبر الواتساب
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium">استجابة فورية خلال دقائق</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-6 h-full flex flex-col">
              {/* Contact Cards */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">معلومات التواصل</h3>
                <div className="space-y-4 h-full flex flex-col justify-between">
                {contactInfo.map((item, index) => (
                  <article
                    key={index}
                    className="relative group flex-1"
                    itemScope
                    itemType="https://schema.org/ContactPoint"
                  >
                    <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden h-full">
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                          <div className={`relative p-4 bg-gradient-to-r ${item.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                            <div className="text-white">{item.icon}</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-800 transition-colors duration-300" itemProp="name">
                            {item.title}
                          </h4>
                          <a 
                            href={item.action}
                            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                            target={item.action.startsWith('http') ? '_blank' : '_self'}
                            rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                            itemProp="telephone"
                          >
                            {item.value}
                          </a>
                          <p className="text-gray-600 mt-2 leading-relaxed" itemProp="description">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center px-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-200/50 shadow-lg">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                لماذا يثق بنا العملاء؟
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl lg:text-4xl">⚡</div>
                  <p className="font-bold text-gray-900 text-sm md:text-base">رد سريع</p>
                  <p className="text-xs md:text-sm text-gray-600">خلال دقائق</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl lg:text-4xl">🏆</div>
                  <p className="font-bold text-gray-900 text-sm md:text-base">جودة عالية</p>
                  <p className="text-xs md:text-sm text-gray-600">معايير احترافية</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl lg:text-4xl">💯</div>
                  <p className="font-bold text-gray-900 text-sm md:text-base">ضمان شامل</p>
                  <p className="text-xs md:text-sm text-gray-600">على جميع الأعمال</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl lg:text-4xl">🎯</div>
                  <p className="font-bold text-gray-900 text-sm md:text-base">أسعار عادلة</p>
                  <p className="text-xs md:text-sm text-gray-600">بدون مفاجآت</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
