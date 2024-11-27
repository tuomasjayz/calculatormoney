 'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DynamicSlider from '../../components/DynamicSlider';
import ReviewSection from '../../components/ReviewSection';
import FAQSection from '../../components/FAQSection';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import { CalculatorType } from '../../utils/calculatorTypes';

export default function LoanInterestCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    calculateLoanInterest();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoanInterest = () => {
    const principal = Number(loanAmount);
    const annualRate = Number(interestRate) / 100;
    const months = Number(loanTerm) * 12;
    const monthlyRate = annualRate / 12;

    // Calculate monthly payment using amortization formula
    const monthlyPmt = principal * (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPmt = monthlyPmt * months;
    const totalInt = totalPmt - principal;

    setMonthlyPayment(Number(monthlyPmt.toFixed(2)));
    setTotalInterest(Number(totalInt.toFixed(2)));
    setTotalPayment(Number(totalPmt.toFixed(2)));
  };

  const calculatorType: CalculatorType = 'loan-interest';

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

  return (
    <div className="flex flex-col min-h-screen bg-golden-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-golden-700 text-center">
          Loan Interest Calculator
        </h1>
        
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Calculate total interest costs and see payment breakdowns for any loan. Compare different scenarios to make informed borrowing decisions.
        </p>

        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="space-y-6">
            <DynamicSlider
              label="Loan Amount ($)"
              value={loanAmount}
              onChange={setLoanAmount}
              min={1000}
              max={1000000}
              step={1000}
              defaultValue={100000}
            />

            <DynamicSlider
              label="Annual Interest Rate (%)"
              value={interestRate}
              onChange={setInterestRate}
              min={0.1}
              max={30}
              step={0.1}
              defaultValue={5}
            />

            <DynamicSlider
              label="Loan Term (Years)"
              value={loanTerm}
              onChange={setLoanTerm}
              min={1}
              max={40}
              step={1}
              defaultValue={30}
            />

            <div className="mt-8 bg-golden-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-golden-800">Loan Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Monthly Payment</p>
                  <p className="text-2xl font-bold text-golden-600">
                    ${monthlyPayment.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Total Interest</p>
                  <p className="text-2xl font-bold text-golden-600">
                    ${totalInterest.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Total Payment</p>
                  <p className="text-2xl font-bold text-golden-600">
                    ${totalPayment.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-golden-700">Payment Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[300px]">
              <PieChart 
                title="Cost Distribution"
                data={{
                  primaryValue: loanAmount,
                  secondaryValue: totalInterest,
                  primaryLabel: 'Principal',
                  secondaryLabel: 'Interest'
                }}
              />
            </div>
            <div className="h-[300px]">
              <BarChart 
                title="Monthly Payment Breakdown"
                data={{
                  labels: ['Monthly Payment'],
                  primaryValues: [monthlyPayment - (loanAmount * (interestRate/100/12))],
                  secondaryValues: [loanAmount * (interestRate/100/12)],
                  primaryLabel: 'Principal',
                  secondaryLabel: 'Interest'
                }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-golden-700">About The Calculator</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our loan interest calculator helps you understand the true cost of borrowing by showing you both the total interest paid and how your monthly payments are split between principal and interest.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">How Loan Interest Works</h3>
            <p className="mb-4">
              Loan interest is calculated based on your principal amount, interest rate, and loan term. Using amortization, your monthly payment remains constant while the proportion of principal to interest changes over time.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Calculate total interest costs</li>
              <li>See monthly payment breakdowns</li>
              <li>Compare different loan scenarios</li>
              <li>Visualize cost distribution</li>
              <li>Understand amortization impact</li>
            </ul>
          </div>
        </div>

        <ReviewSection calculatorType={calculatorType} />
        <FAQSection faqs={faqData} />
      </main>
      <Footer />
    </div>
  );
}