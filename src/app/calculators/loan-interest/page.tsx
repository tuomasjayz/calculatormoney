'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DynamicSlider from '../../components/DynamicSlider';
import ReviewSection from '../../components/ReviewSection';
import FAQSection from '../../components/FAQSection';
import PieChart from '../../components/charts/PieChart';
import BarChart from '../../components/charts/BarChart';

export default function LoanInterestCalculator() {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(15);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    calculateLoanDetails();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoanDetails = () => {
    const principal = loanAmount;
    const calculatedInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (principal && calculatedInterestRate && numberOfPayments) {
      const monthlyPaymentCalc = 
        principal * 
        (calculatedInterestRate * Math.pow(1 + calculatedInterestRate, numberOfPayments)) / 
        (Math.pow(1 + calculatedInterestRate, numberOfPayments) - 1);
      
      const totalPaymentCalc = monthlyPaymentCalc * numberOfPayments;
      const totalInterestCalc = totalPaymentCalc - principal;

      setMonthlyPayment(Number(monthlyPaymentCalc.toFixed(2)));
      setTotalInterest(Number(totalInterestCalc.toFixed(2)));
      setTotalPayment(Number(totalPaymentCalc.toFixed(2)));
    }
  };

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
    },
    {
      question: "Should I choose a shorter or longer loan term?",
      answer: "A shorter loan term typically means higher monthly payments but less total interest paid. A longer term reduces monthly payments but increases the total interest cost."
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
          Calculate your monthly loan payments, total interest, and see how different loan terms and interest rates affect your payments.
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
              label="Interest Rate (%)"
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
              max={30}
              step={1}
              defaultValue={15}
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
                title="Yearly Breakdown"
                data={{
                  labels: Array.from({ length: loanTerm }, (_, i) => `Year ${i + 1}`),
                  primaryValues: Array(loanTerm).fill(loanAmount / loanTerm),
                  secondaryValues: Array(loanTerm).fill(totalInterest / loanTerm),
                  primaryLabel: 'Principal',
                  secondaryLabel: 'Interest'
                }}
              />
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-golden-700">About The Calculator</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our loan interest calculator helps you understand the true cost of borrowing money. Whether you're considering a personal loan, auto loan, or any other type of financing, this calculator shows you exactly how interest affects your total repayment amount.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">How Loan Interest Works</h3>
            <p className="mb-4">
              Loan interest is calculated based on your principal amount, interest rate, and loan term. Using an amortization formula, we show you how your payments are split between principal and interest over time, helping you make informed borrowing decisions.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Calculate total interest costs over the loan term</li>
              <li>See monthly payment breakdowns</li>
              <li>Compare different loan scenarios</li>
              <li>Visualize payment distribution with interactive charts</li>
              <li>Understand amortization schedules</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Tips for Lower Interest Costs</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Choose shorter loan terms when possible</li>
              <li>Make extra payments toward principal</li>
              <li>Improve your credit score for better rates</li>
              <li>Compare offers from multiple lenders</li>
              <li>Consider refinancing if rates drop</li>
            </ul>
          </div>
        </div>

        <ReviewSection calculatorType="loan-interest" />

        <FAQSection faqs={faqData} />
      </main>
      <Footer />
    </div>
  );
}