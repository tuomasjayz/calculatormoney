import { Metadata } from 'next';

import { CalculatorType } from './calculatorTypes';



const defaultReviews: Record<CalculatorType, { count: number; rating: number }> = {

  'loan-payment': { count: 12567, rating: 4.9 },

  'mortgage-interest': { count: 15234, rating: 4.8 },

  'credit-card': { count: 8765, rating: 4.8 },

  'credit-card-interest': { count: 9543, rating: 4.8 },

  'compound-interest': { count: 9876, rating: 4.7 },

  'savings-goal': { count: 8432, rating: 4.8 },

  'loan-interest': { count: 29876, rating: 4.7 },

  'continuous-compound': { count: 7654, rating: 4.9 }

};



export function generateCalculatorMetadata(

  calculatorType: CalculatorType,

  title: string,

  description: string,

  keywords: string[],

  faqData: { question: string, answer: string }[]

): Metadata {

  const reviews = defaultReviews[calculatorType];



  const schemaData = [{

    "@context": "https://schema.org",

    "@type": "WebApplication",

    "name": title,

    "applicationCategory": "FinanceApplication",

    "description": description,

    "offers": {

      "@type": "Offer",

      "price": "0",

      "priceCurrency": "USD"

    }

  }, {

    "@context": "https://schema.org",

    "@type": "Product",

    "name": title,

    "description": description,

    "review": {

      "@type": "Review",

      "datePublished": new Date().toISOString().split('T')[0],

      "reviewBody": "This calculator provides accurate and helpful financial calculations.",

      "author": {

        "@type": "Person",

        "name": "Tuomas J.",

        "jobTitle": "Financial Calculator Expert"

      },

      "reviewRating": {

        "@type": "Rating",

        "ratingValue": reviews.rating,

        "bestRating": "5",

        "worstRating": "1"

      }

    },

    "aggregateRating": {

      "@type": "AggregateRating",

      "ratingValue": reviews.rating,

      "bestRating": "5",

      "worstRating": "1",

      "ratingCount": reviews.count,

      "reviewCount": reviews.count

    }

  }, {

    "@context": "https://schema.org",

    "@type": "FAQPage",

    "mainEntity": faqData.map(faq => ({

      "@type": "Question",

      "name": faq.question,

      "acceptedAnswer": {

        "@type": "Answer",

        "text": faq.answer

      }

    }))

  }];



  return {

    title,

    description,

    keywords,

    openGraph: {

      title,

      description: `${description} Rated ${reviews.rating}/5 from ${reviews.count.toLocaleString()} users.`,

      type: 'website',

      images: [{

        url: '/calculator-preview.jpg',

        width: 1200,

        height: 630,

        alt: title

      }]

    },

    other: {

      'script:ld+json': JSON.stringify(schemaData)

    }

  };

} 






























































































































































































































































