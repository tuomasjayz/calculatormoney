import type { Metadata } from 'next';

import { generateCalculatorMetadata } from '../../utils/generateMetadata';

const faqData = [
  {
    question: "How is the loan payment calculated?",
    answer: "The loan payment is calculated using an amortization formula that considers the principal amount, interest rate, and loan term."
  },
  {
    question: "What factors affect my loan payment?",
    answer: "Your loan payment is primarily affected by three factors: the loan amount (principal), the interest rate, and the loan term."
  },
  {
    question: "Should I choose a shorter or longer loan term?",
    answer: "A shorter loan term means higher monthly payments but less total interest paid. A longer term reduces monthly payments but increases total interest."
  }
];

export const metadata = generateCalculatorMetadata(
  'loan-payment',
  'Loan Payment Calculator',
  'Calculate your monthly loan payments and total interest costs. See payment breakdowns and amortization schedules with our free loan calculator.',
  [
    'loan payment calculator',
    'loan calculator',
    'loan interest calculator',
    'monthly payment calculator',
    'auto loan calculator',
    'personal loan calculator',
    'loan amortization calculator',
    'calculate loan interest'
  ],
  faqData
); 






























