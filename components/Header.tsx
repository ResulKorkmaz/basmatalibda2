'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Component mount edildiğinde portal için hazırla
  useEffect(() => {
    setMounted(true)
  }, [])

  // Mobil menü açıldığında body scroll'unu tamamen engelle ve ESC tuşu ile kapatma
  useEffect(() => {
    if (mobileMenuOpen) {
      // Mevcut scroll pozisyonunu kaydet
      const scrollY = window.scrollY
      
      // Body'yi tamamen kilitle
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      
      // ESC tuşu ile menüyü kapatma
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setMobileMenuOpen(false)
        }
      }
      
      document.addEventListener('keydown', handleEscapeKey)
      
      return () => {
        document.removeEventListener('keydown', handleEscapeKey)
        
        // Menü kapandığında scroll pozisyonunu geri getir
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [mobileMenuOpen])

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'لماذا نحن', href: '/#why-us' },
    { name: 'تواصل معنا', href: '/#contact' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 border-b border-gray-100" style={{ zIndex: 99999 }}>
      <nav className="container-custom" aria-label="Global">
        <div className="flex items-center justify-between py-3 lg:py-6 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                <Image
                  src="/logo.png"
                  alt="مؤسسة مكارم الجنوب للترميمات والبناء"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="block">
                <div className="text-base sm:text-xl lg:text-2xl font-bold text-brand-800 arabic-text leading-tight">
                  <span className="sm:hidden">مكارم الجنوب</span>
                  <span className="hidden sm:inline">مؤسسة مكارم الجنوب</span>
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-brand-600 font-medium">
                  للترميمات والبناء
                </div>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-brand-800 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">فتح القائمة الرئيسية</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-base font-semibold text-gray-700 hover:text-brand-800 transition-colors duration-300 group py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-800 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="tel:+966576095153"
              className="flex items-center gap-3 text-white bg-brand-800 px-6 py-3 rounded-xl font-semibold hover:bg-brand-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="hidden xl:inline">اتصل الآن:</span>
              <span>0576095153</span>
            </a>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu - Portal ile render */}
      {mounted && mobileMenuOpen && createPortal(
        <div 
          className="lg:hidden fixed inset-0 flex items-start justify-end"
          role="dialog" 
          aria-modal="true"
          style={{ zIndex: 999999 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/30 mobile-menu-overlay transition-opacity duration-300 ease-out"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel - Modern slide-in */}
          <div 
            className="relative w-full max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out translate-x-0 overflow-y-auto"
            style={{ 
              zIndex: 999999,
              animation: 'slideInRight 0.3s ease-out'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-6 border-b border-gray-200 bg-gray-50">
              <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="مؤسسة مكارم الجنوب"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-800 arabic-text">
                    مكارم الجنوب
                  </div>
                  <div className="text-sm text-brand-600">
                    للترميمات والبناء
                  </div>
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-brand-800 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">إغلاق القائمة</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6">
              <div className="divide-y divide-gray-200">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-xl px-4 py-3 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 hover:text-brand-800 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Mobile CTA Section */}
                <div className="py-6 px-6 space-y-4 bg-gray-50">
                  <a
                    href="tel:+966576095153"
                    className="flex items-center justify-center gap-3 rounded-xl bg-brand-800 px-6 py-4 text-base font-semibold text-white hover:bg-brand-900 transition-all duration-200 transform hover:scale-105"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    اتصل الآن: 0576095153
                  </a>
                  
                  <a
                    href="https://wa.me/966576095153"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-base font-semibold text-white hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <span className="text-lg">💬</span>
                    واتساب
                  </a>
                </div>

                {/* Contact Info */}
                <div className="py-6 px-6 bg-gray-100">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">بإشراف</div>
                    <div className="text-lg font-bold text-brand-800">أبو محمد</div>
                    <div className="text-sm text-gray-600 mt-2">الرياض، المملكة العربية السعودية</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}