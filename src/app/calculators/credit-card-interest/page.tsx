'use client';

import { useState, useCallback, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DynamicSlider from '../../components/DynamicSlider';
import ReviewSection from '../../components/ReviewSection';
import FAQSection from '../../components/FAQSection';
import PieChart from '../../components/PieChart';
import BarChart from '../../components/BarChart';
import { CalculatorType } from '../../utils/calculatorTypes';

export default function CreditCardInterestCalculator() {
  const [balance, setBalance] = useState(5000);
  const [interestRate, setInterestRate] = useState(18.9);
  const [monthlyPayment, setMonthlyPayment] = useState(200);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [monthsToPayoff, setMonthsToPayoff] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const calculateCreditCardInterest = useCallback(() => {
    const monthlyRate = interestRate / 100 / 12;
    const initialBalance = balance;

    if (monthlyPayment > balance * monthlyRate) {
      // Calculate months to pay off
      const months = Math.ceil(
        Math.log(monthlyPayment / (monthlyPayment - initialBalance * monthlyRate)) /
        Math.log(1 + monthlyRate)
      );

      const totalPmt = monthlyPayment * months;
      const totalInt = totalPmt - initialBalance;

      setMonthsToPayoff(months);
      setTotalInterest(Number(totalInt.toFixed(2)));
      setTotalPayment(Number(totalPmt.toFixed(2)));
    } else {
      setMonthsToPayoff(Infinity);
      setTotalInterest(Infinity);
      setTotalPayment(Infinity);
    }
  }, [balance, interestRate, monthlyPayment]);

  useEffect(() => {
    calculateCreditCardInterest();
  }, [calculateCreditCardInterest]);

  const calculatorType: CalculatorType = 'credit-card';

  const faqData = [
    {
      question: "How is credit card interest calculated?",
      answer: "Credit card interest is typically calculated using a daily periodic rate (APR/365) applied to your average daily balance. Interest compounds daily, which means you pay interest on previously accrued interest."
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

  return (
    <div className="flex flex-col min-h-screen bg-golden-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-golden-700 text-center">
          Credit Card Interest Calculator
        </h1>
        
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Calculate your credit card interest and see how different payment strategies affect your total costs.
        </p>

        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="space-y-6">
            <DynamicSlider
              label="Credit Card Balance ($)"
              value={balance}
              onChange={setBalance}
              min={100}
              max={50000}
              step={100}
              defaultValue={5000}
            />

            <DynamicSlider
              label="Annual Interest Rate (APR %)"
              value={interestRate}
              onChange={setInterestRate}
              min={0.1}
              max={35}
              step={0.1}
              defaultValue={18.9}
            />

            <DynamicSlider
              label="Monthly Payment ($)"
              value={monthlyPayment}
              onChange={setMonthlyPayment}
              min={10}
              max={2000}
              step={10}
              defaultValue={200}
            />

            <div className="mt-8 bg-golden-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-golden-800">Payment Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Months to Pay Off</p>
                  <p className="text-2xl font-bold text-golden-600">
                    {monthsToPayoff === Infinity ? '∞' : monthsToPayoff}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Total Interest</p>
                  <p className="text-2xl font-bold text-golden-600">
                    {totalInterest === Infinity ? '∞' : `$${totalInterest.toLocaleString()}`}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Total Payment</p>
                  <p className="text-2xl font-bold text-golden-600">
                    {totalPayment === Infinity ? '∞' : `$${totalPayment.toLocaleString()}`}
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
                  primaryValue: balance,
                  secondaryValue: totalInterest === Infinity ? balance : totalInterest,
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
                  primaryValues: [monthlyPayment - (balance * (interestRate/100/12))],
                  secondaryValues: [balance * (interestRate/100/12)],
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
              Our credit card interest calculator helps you understand the true cost of carrying a credit card balance. See how different payment amounts affect your total interest and payoff time.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">How Credit Card Interest Works</h3>
            <p className="mb-4">
              Credit card interest is typically calculated daily using your APR divided by 365. This daily rate is applied to your average daily balance, making credit card debt particularly expensive if not managed properly.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Calculate months to pay off your balance</li>
              <li>See total interest costs</li>
              <li>Compare different payment strategies</li>
              <li>Visualize payment breakdown</li>
              <li>Understand daily interest impact</li>
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