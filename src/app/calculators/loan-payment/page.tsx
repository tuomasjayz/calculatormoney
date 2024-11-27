'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DynamicSlider from '../../components/DynamicSlider';
import ReviewSection from '../../components/ReviewSection';
import FAQSection from '../../components/FAQSection';
import PieChart from '../../components/charts/PieChart';
import BarChart from '../../components/charts/BarChart';

export default function LoanPaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(3);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
    const principal = Number(loanAmount);

    if (monthlyRate > 0 && numberOfPayments > 0) {
      const monthlyPmt = 
        principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      const totalPmt = monthlyPmt * numberOfPayments;
      const totalInt = totalPmt - principal;

      setMonthlyPayment(Number(monthlyPmt.toFixed(2)));
      setTotalPayment(Number(totalPmt.toFixed(2)));
      setTotalInterest(Number(totalInt.toFixed(2)));
    } else {
      const monthlyPmt = principal / numberOfPayments;
      setMonthlyPayment(Number(monthlyPmt.toFixed(2)));
      setTotalPayment(principal);
      setTotalInterest(0);
    }
  };

  const faqData = [
    {
      question: "How is the loan payment calculated?",
      answer: "The loan payment is calculated using an amortization formula that considers the principal amount, interest rate, and loan term. The formula ensures that each payment covers both principal and interest."
    },
    {
      question: "What factors affect my loan payment?",
      answer: "Your loan payment is primarily affected by three factors: the loan amount (principal), the interest rate, and the loan term. A higher principal or interest rate will increase payments, while a longer term will lower monthly payments but increase total interest paid."
    },
    {
      question: "Should I choose a shorter or longer loan term?",
      answer: "A shorter loan term typically means higher monthly payments but less total interest paid. A longer term reduces monthly payments but increases the total interest cost. Choose based on your monthly budget and long-term financial goals."
    },
    {
      question: "How can I reduce my loan payments?",
      answer: "You can reduce loan payments by: securing a lower interest rate, making a larger down payment, extending the loan term (though this increases total interest), or improving your credit score to qualify for better rates."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-golden-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-golden-700 text-center">
          Loan Payment Calculator
        </h1>
        
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Calculate your monthly loan payments and see the total cost of your loan including interest.
        </p>

        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="space-y-6">
            <DynamicSlider
              label="Loan Amount ($)"
              value={loanAmount}
              onChange={setLoanAmount}
              min={1000}
              max={100000}
              step={1000}
              defaultValue={10000}
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
              max={10}
              step={1}
              defaultValue={3}
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
        <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-golden-700">About The Calculator</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our loan payment calculator helps you determine your monthly loan payments and understand the total cost of borrowing. Whether you're considering an auto loan, personal loan, or other financing, this calculator provides clear insights into your payment structure.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">How Loan Payments Work</h3>
            <p className="mb-4">
              Each loan payment includes both principal and interest, calculated using an amortization formula. Early payments go mostly toward interest, while later payments primarily reduce the principal balance. Understanding this helps you make informed borrowing decisions.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Calculate monthly payment amounts</li>
              <li>See total interest costs over loan term</li>
              <li>Understand payment breakdowns</li>
              <li>Compare different loan scenarios</li>
              <li>Visualize amortization with charts</li>
            </ul>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Loan Tips</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Compare loans with different terms</li>
              <li>Consider making extra payments</li>
              <li>Check for prepayment penalties</li>
              <li>Understand the impact of interest rates</li>
              <li>Factor in all loan costs</li>
            </ul>
          </div>
        </div>
        
        <ReviewSection calculatorType="loan-payment" />

        <FAQSection faqs={faqData} />
      </main>
      <Footer />
    </div>
  );
} 