import type { Metadata } from 'next'

import { generateCalculatorMetadata } from '../../utils/generateMetadata'

const faqData = [
  {
    question: "How is mortgage interest calculated?",
    answer: "Mortgage interest is calculated using an amortization formula that factors in the loan amount, interest rate, and loan term."
  },
  {
    question: "What is PMI and when is it required?",
    answer: "Private Mortgage Insurance (PMI) is typically required when your down payment is less than 20% of the home's value."
  },
  {
    question: "How does the down payment affect my mortgage?",
    answer: "A larger down payment reduces your loan amount, leading to lower monthly payments and less total interest paid."
  }
];

export const metadata = generateCalculatorMetadata(

  'mortgage-interest',

  'Mortgage Interest Calculator',

  'Calculate your monthly mortgage payments including principal, interest, taxes & insurance (PITI). Free mortgage calculator with amortization schedule.',

  [

    'mortgage interest calculator',

    'mortgage payment calculator',

    'mortgage calculator with taxes and insurance',

    'PITI calculator',

    'home loan calculator',

    'mortgage interest rate calculator',

    'house payment calculator',

    'mortgage amortization calculator'

  ],

  faqData

); 






