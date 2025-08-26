import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مؤسسة مكارم الجنوب للترميمات والبناء',
  description: 'مؤسسة مكارم الجنوب للترميمات والبناء - خدمات ترميم وصيانة المباني، أعمال الدهانات، الديكورات الحديثة، جبس بورد وعوازل في الرياض',
  keywords: 'ترميم، بناء، دهانات، ديكورات، جبس بورد، عوازل، الرياض، مقاولات، صيانة مباني',
  authors: [{ name: 'مؤسسة مكارم الجنوب' }],
  robots: 'index, follow',
  metadataBase: new URL('https://makarimaljanoub.com'),
  openGraph: {
    title: 'مؤسسة مكارم الجنوب للترميمات والبناء',
    description: 'مؤسسة مكارم الجنوب للترميمات والبناء - خدمات ترميم وصيانة المباني، أعمال الدهانات، الديكورات الحديثة، جبس بورد وعوازل في الرياض',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'مؤسسة مكارم الجنوب للترميمات والبناء',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مؤسسة مكارم الجنوب للترميمات والبناء',
    description: 'مؤسسة مكارم الجنوب للترميمات والبناء - خدمات ترميم وصيانة المباني، أعمال الدهانات، الديكورات الحديثة، جبس بورد وعوازل في الرياض',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-arabic-sans antialiased">
        {children}
      </body>
    </html>
  )
}
