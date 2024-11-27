import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReviewProvider } from './context/ReviewContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CalculatorMoney.com | Financial Calculators for Smart Money Management',
  description: 'Powerful online financial calculators for loans, mortgages, credit cards, and investments. Make informed financial decisions with our easy-to-use tools.',
  keywords: [
    'financial calculators',
    'loan calculator',
    'mortgage calculator',
    'credit card interest calculator',
    'compound interest calculator',
    'investment calculator',
    'financial planning tools',
    'money management',
    'interest rate calculator'
  ],
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
    { rel: 'shortcut icon', url: '/favicon.png' }
  ],
  authors: [{ name: 'Tuomas J.' }],
  openGraph: {
    title: 'CalculatorMoney.com - Financial Calculators',
    description: 'Powerful financial calculators to help you make informed money decisions',
    type: 'website',
    url: 'https://calculatormoney.com',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'CalculatorMoney.com Financial Calculators'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'CalculatorMoney.com',
      'url': 'https://calculatormoney.com',
      'description': 'Powerful online financial calculators for smart money management',
      'publisher': {
        '@type': 'Organization',
        'name': 'CalculatorMoney.com',
        'logo': {
          '@type': 'ImageObject',
          'url': '/favicon.png'
        }
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://calculatormoney.com/calculators/{search_term}',
        'query-input': 'required name=search_term'
      }
    })
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReviewProvider>
          {children}
        </ReviewProvider>
      </body>
    </html>
  )
}
