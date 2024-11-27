import type { Metadata } from 'next'



import { generateCalculatorMetadata } from '../../utils/generateMetadata'



const faqData = [

  {

    question: "What is continuous compound interest?",

    answer: "Continuous compound interest is calculated using the mathematical constant 'e' and represents interest that is compounded infinitely many times per year, providing the theoretical maximum interest possible."

  },

  {

    question: "How does continuous compounding differ from regular compounding?",

    answer: "Continuous compounding yields slightly higher returns than annual or monthly compounding because interest is calculated and added to the principal continuously rather than at fixed intervals."

  },

  {

    question: "Why use the 'e' constant in calculations?",

    answer: "The mathematical constant 'e' (approximately 2.71828) naturally arises as the limit of compound interest as the compounding frequency approaches infinity."

  }

];



export const metadata = generateCalculatorMetadata(



  'continuous-compound',



  'Continuous Compound Interest Calculator',



  'Calculate continuous compound interest using e^(rt) formula. See how your investments grow with continuous compounding for maximum returns.',



  [



    'continuous compound interest calculator',



    'continuous compounding calculator',



    'continuous interest calculator',



    'e compound interest calculator',



    'exponential growth calculator',



    'continuous compound formula calculator',



    'continuous rate calculator',



    'compound interest continuous'



  ],



  faqData



) 


