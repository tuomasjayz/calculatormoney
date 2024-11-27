import type { Metadata } from 'next'

import { generateCalculatorMetadata } from '../../utils/generateMetadata'

const faqData = [
  {
    question: "How much should I save monthly?",
    answer: "The amount you should save monthly depends on your goal amount, timeframe, and expected return rate. Our calculator helps you determine this by considering your initial savings and target amount."
  },
  {
    question: "What interest rate should I use?",
    answer: "The interest rate depends on your investment strategy. Savings accounts typically offer 0.5-2%, while investment accounts might average 5-8% long-term. Consider your risk tolerance and investment timeline."
  },
  {
    question: "Should I include my initial savings?",
    answer: "Yes, including your initial savings can significantly reduce the required monthly contributions. It gives you a head start and allows your existing savings to grow with interest."
  }
];

export const metadata = generateCalculatorMetadata(

  'savings-goal',

  'Savings Goal Calculator',

  'Calculate how much you need to save monthly to reach your financial goals. Plan your savings with our free calculator showing interest growth.',

  [

    'savings goal calculator',

    'savings calculator',

    'goal calculator',

    'monthly savings calculator',

    'savings planner calculator',

    'savings interest calculator',

    'savings account interest calculator',

    'savings interest rate calculator'

  ],

  faqData

) 


