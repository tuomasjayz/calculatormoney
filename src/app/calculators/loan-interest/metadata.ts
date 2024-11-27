import type { Metadata } from 'next';
import { generateCalculatorMetadata } from '../../utils/generateMetadata';

const faqData = [
  {
    question: "How is loan interest calculated?",
    answer: "Loan interest is calculated based on your principal amount, interest rate, and loan term. The interest can be simple (calculated only on principal) or compound (calculated on principal and accumulated interest)."
  },
  {
    question: "What factors affect my loan interest rate?",
    answer: "Several factors influence your loan interest rate, including credit score, loan term length, loan amount, market conditions, loan type, and the lender's policies."
  },
  {
    question: "How can I reduce my loan interest costs?",
    answer: "You can reduce loan interest costs by making larger down payments, choosing shorter loan terms, improving your credit score, making extra payments, or refinancing to a lower rate."
  },
  {
    question: "What's the difference between APR and interest rate?",
    answer: "The interest rate is the basic cost of borrowing, while APR (Annual Percentage Rate) includes both the interest rate and other loan costs like fees and points."
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
    'loan calculator with interest',
    'loan amortization calculator',
    'calculate total interest paid',
    'loan cost calculator',
    'interest charges calculator'
  ],
  faqData
);