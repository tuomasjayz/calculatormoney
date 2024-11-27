import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About CalculatorMoney.com | Financial Calculator Experts',
  description: 'Learn about CalculatorMoney.com, our mission to provide powerful financial calculators, and how we help you make informed financial decisions.',
  keywords: [
    'financial calculator website',
    'money management tools',
    'financial planning',
    'loan calculators',
    'investment calculators',
    'mortgage calculators',
    'about financial calculator website'
  ],
  authors: [{ name: 'Tuomas J.' }],
  openGraph: {
    title: 'About CalculatorMoney.com',
    description: 'Discover our mission to simplify financial calculations',
    type: 'website',
    url: 'https://calculatormoney.com/about'
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
  }
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  );
}
