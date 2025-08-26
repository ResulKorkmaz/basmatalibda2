'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { PhoneIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroImages = [
    {
      src: '/hero1.jpg',
      alt: 'مؤسسة مكارم الجنوب - مشاريع البناء والترميم'
    },
    {
      src: '/hero2.jpg', 
      alt: 'مؤسسة مكارم الجنوب - أعمال الدهانات والديكورات'
    },
    {
      src: '/hero3.jpg',
      alt: 'مؤسسة مكارم الجنوب - جبس بورد وأسقف معلقة'
    }
  ]

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Slider - Left Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden card-shadow group">
              {/* Images */}
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>


            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold arabic-text text-gray-900 leading-tight">
                مؤسسة مكارم الجنوب
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-700">
                للترميمات والبناء
              </h2>
              <div className="flex items-center gap-3 text-lg md:text-xl text-gray-700">
                <span>بإشراف:</span>
                <span className="font-bold text-brand-800">أبو محمد</span>
              </div>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600">
              نحن متخصصون في تقديم خدمات الترميم والبناء بأعلى معايير الجودة والاحترافية. 
              فريقنا ذو الخبرة الواسعة يضمن تنفيذ مشاريعكم وفق أحدث التقنيات والمعايير العالمية.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">جودة عالية وخامات متينة</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">تنفيذ سريع ومتقن</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">أسعار تنافسية</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg card-shadow">
                <CheckCircleIcon className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">ضمان على جميع الأعمال</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0536095153"
                className="flex items-center justify-center gap-3 bg-brand-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-900 transition-all duration-200 transform hover:scale-105 card-shadow"
              >
                <PhoneIcon className="h-6 w-6" />
                اتصل الآن: 0536095153
              </a>
              <a
                href="#services"
                className="flex items-center justify-center px-8 py-4 border-2 border-brand-800 text-brand-800 bg-white rounded-lg font-bold text-lg hover:bg-brand-800 hover:text-white transition-all duration-200 transform hover:scale-105 card-shadow"
              >
                تعرف على خدماتنا
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-800">+500</div>
                <div className="text-sm md:text-base text-gray-600">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-800">+300</div>
                <div className="text-sm md:text-base text-gray-600">عميل راضٍ</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-800">10+</div>
                <div className="text-sm md:text-base text-gray-600">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}