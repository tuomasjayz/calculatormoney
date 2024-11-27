import type { Metadata } from 'next'

import { generateCalculatorMetadata } from '../../utils/generateMetadata'

const faqData = [
  {
    question: "What is compound interest?",
    answer: "Compound interest is when you earn interest not only on your initial investment but also on the accumulated interest from previous periods."
  },
  {
    question: "How does compounding frequency affect returns?",
    answer: "The more frequently interest compounds (daily, monthly, quarterly, etc.), the more your money can grow. More frequent compounding periods result in slightly higher returns."
  },
  {
    question: "What's the difference between simple and compound interest?",
    answer: "Simple interest is calculated only on the principal amount, while compound interest is calculated on both the principal and accumulated interest."
  }
];

export const metadata = generateCalculatorMetadata(

  'compound-interest',

  'Compound Interest Calculator',

  'See how your investments grow with our compound interest calculator. Calculate returns with regular contributions and different compounding frequencies.',

  [

    'compound interest calculator',

    'investment calculator',

    'compound interest formula calculator',

    'interest calculator with monthly deposits',

    'investment growth calculator',

    'compound interest rate calculator',

    'investment growth calculator',

    'calculate compound interest'

  ],

  faqData

)














