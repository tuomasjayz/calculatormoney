import type { Metadata } from 'next'



import { generateCalculatorMetadata } from '../../utils/generateMetadata'



const faqData = [

  {

    question: "How is loan interest calculated?",

    answer: "Loan interest is calculated using the annual interest rate divided by 12 (for monthly payments) and the loan amount. The formula takes into account compound interest over the loan term."

  },

  {

    question: "What factors affect my loan interest rate?",

    answer: "Several factors influence your loan interest rate, including credit score, loan term, loan amount, market conditions, and the type of loan."

  },

  {

    question: "How can I lower my monthly loan payments?",

    answer: "You can lower your monthly payments by: extending the loan term, making a larger down payment, finding a lower interest rate, or improving your credit score before applying."

  }

];



export const metadata = generateCalculatorMetadata(



  'loan-interest',



  'Loan Interest Calculator',



  'Calculate total loan interest and see payment breakdowns with our free loan interest calculator. Compare different loan scenarios and interest rates.',



  [



    'loan interest calculator',



    'interest calculator loan',



    'calculate interest on loan',



    'loan interest rate calculator',



    'total interest calculator',



    'calculate loan interest rate',



    'interest payment calculator',



    'loan calculator with interest'



  ],



  faqData



)






























