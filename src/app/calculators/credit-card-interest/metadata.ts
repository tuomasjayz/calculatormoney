import type { Metadata } from 'next';

import { generateCalculatorMetadata } from '../../utils/generateMetadata';



const faqData = [

  {

    question: "How is credit card interest calculated?",

    answer: "Credit card interest is typically calculated using a daily periodic rate (APR/365) applied to your average daily balance. Interest compounds daily, meaning you pay interest on previously accrued interest."

  },

  {

    question: "What is APR and how does it affect my interest?",

    answer: "APR (Annual Percentage Rate) is your yearly interest rate. To calculate daily interest, divide your APR by 365. This daily rate is applied to your balance each day."

  },

  {

    question: "How can I minimize credit card interest?",

    answer: "To minimize interest: pay your full balance each month, make payments early in the billing cycle, avoid cash advances, and consider balance transfer cards with lower rates."

  },

  {

    question: "What is a grace period?",

    answer: "A grace period is the time between your statement date and payment due date when you can pay your full balance without incurring interest charges. This typically applies only to purchases."

  }

];



export const metadata = generateCalculatorMetadata(

  'credit-card',

  'Credit Card Interest Calculator',

  'Calculate your credit card interest charges and see how different payment strategies affect your total costs. Free calculator with daily interest compounding.',

  [

    'credit card interest calculator',

    'credit card calculator',

    'calculate credit card interest',

    'credit card interest rate calculator',

    'credit card payment calculator',

    'calculate credit card payments',

    'credit card apr calculator',

    'daily interest calculator'

  ],

  faqData

);
