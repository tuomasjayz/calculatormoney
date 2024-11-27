'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DynamicSlider from '../../components/DynamicSlider';
import ReviewSection from '../../components/ReviewSection';
import FAQSection from '../../components/FAQSection';

export default function CreditCardInterestCalculator() {
  const [currentBalance, setCurrentBalance] = useState(5000);
  const [annualInterestRate, setAnnualInterestRate] = useState(18.9);
  const [minimumPayment, setMinimumPayment] = useState(3);
  const [monthlyPayment, setMonthlyPayment] = useState(200);
  const [totalInterestPaid, setTotalInterestPaid] = useState<number>(0);
  const [monthsToPayOff, setMonthsToPayOff] = useState<number>(0);

  useEffect(() => {
    calculateCreditCardInterest();
  }, [currentBalance, annualInterestRate, minimumPayment, monthlyPayment]);

  const calculateCreditCardInterest = () => {
    const balance = currentBalance;
    const aprRate = annualInterestRate / 100 / 12;
    const minPaymentPercent = minimumPayment / 100;
    const fixedMonthlyPayment = monthlyPayment;

    let remainingBalance = balance;
    let totalInterest = 0;
    let months = 0;

    while (remainingBalance > 0) {
      const monthlyPaymentAmount = fixedMonthlyPayment || 
        Math.max(remainingBalance * minPaymentPercent, 20);

      const monthlyInterest = remainingBalance * aprRate;
      totalInterest += monthlyInterest;

      remainingBalance = remainingBalance + monthlyInterest - monthlyPaymentAmount;

      months++;

      if (months > 600 || remainingBalance < 1) {
        break;
      }
    }

    setTotalInterestPaid(Number(totalInterest.toFixed(2)));
    setMonthsToPayOff(months);
  };

  const faqData = [
    {
      question: "How is credit card interest calculated?",
      answer: "Credit card interest is typically calculated using your daily balance and the card's Annual Percentage Rate (APR) divided by 365 days. This daily rate is applied to your balance each day."
    },
    {
      question: "What is APR and how does it affect my payments?",
      answer: "Annual Percentage Rate (APR) is the yearly interest rate. A higher APR means you'll pay more in interest if you carry a balance. For example, an 18% APR means you're paying about 1.5% per month in interest."
    },
    {
      question: "How can I reduce credit card interest?",
      answer: "You can reduce credit card interest by: making more than the minimum payment, transferring balances to a lower-rate card, negotiating with your card issuer for a lower rate, or paying off the balance in full each month."
    },
    {
      question: "Why should I pay more than the minimum payment?",
      answer: "Paying only the minimum extends your repayment period and increases the total interest paid. Even small additional payments can significantly reduce your repayment time and total cost."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-golden-700 text-center">
          Credit Card Interest Calculator
        </h1>
        
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Calculate how long it will take to pay off your credit card and the total interest you'll pay.
        </p>

        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="space-y-6">
            <DynamicSlider
              label="Current Balance ($)"
              value={currentBalance}
              onChange={setCurrentBalance}
              min={100}
              max={50000}
              step={100}
              defaultValue={5000}
            />

            <DynamicSlider
              label="Annual Interest Rate (APR %)"
              value={annualInterestRate}
              onChange={setAnnualInterestRate}
              min={0}
              max={36}
              step={0.1}
              defaultValue={18.9}
            />

            <DynamicSlider
              label="Minimum Payment (%)"
              value={minimumPayment}
              onChange={setMinimumPayment}
              min={1}
              max={10}
              step={0.5}
              defaultValue={3}
            />

            <DynamicSlider
              label="Monthly Payment ($)"
              value={monthlyPayment}
              onChange={setMonthlyPayment}
              min={0}
              max={currentBalance}
              step={10}
              defaultValue={200}
            />

            <div className="mt-8 bg-golden-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-golden-800">Payment Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Total Interest</p>
                  <p className="text-2xl font-bold text-golden-600">
                    ${totalInterestPaid.toLocaleString()}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-gray-600">Months to Pay Off</p>
                  <p className="text-2xl font-bold text-golden-600">
                    {monthsToPayOff.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ReviewSection 
          initialReviewCount={42567}
          initialRating={4.9}
          calculatorType="credit-card-interest"
        />

        <FAQSection faqs={faqData} />
      </main>
      <Footer />
    </div>
  );
}


