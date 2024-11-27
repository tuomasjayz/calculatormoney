'use client';



import { useState, useEffect } from 'react';

import Header from '../../components/Header';

import Footer from '../../components/Footer';

import DynamicSlider from '../../components/DynamicSlider';

import ReviewSection from '../../components/ReviewSection';

import FAQSection from '../../components/FAQSection';

import PieChart from '../../components/charts/PieChart';

import BarChart from '../../components/charts/BarChart';

import { CalculatorType } from '../../utils/calculatorTypes';



export default function CreditCardCalculator() {

  const [balance, setBalance] = useState(5000);

  const [interestRate, setInterestRate] = useState(18.9);

  const [monthlyPayment, setMonthlyPayment] = useState(200);

  const [timeToPayOff, setTimeToPayOff] = useState<number>(0);

  const [totalInterest, setTotalInterest] = useState<number>(0);

  const [totalPayment, setTotalPayment] = useState<number>(0);



  useEffect(() => {

    calculatePayoff();

  }, [balance, interestRate, monthlyPayment]);



  const calculatePayoff = () => {

    const monthlyRate = (interestRate / 100) / 12;

    const initialBalance = Number(balance);

    const payment = Number(monthlyPayment);



    if (monthlyRate > 0 && payment > 0) {

      // Calculate months to pay off

      const months = Math.ceil(

        Math.log(payment / (payment - (initialBalance * monthlyRate))) /

        Math.log(1 + monthlyRate)

      );



      const totalPmt = payment * months;

      const totalInt = totalPmt - initialBalance;



      setTimeToPayOff(months);

      setTotalPayment(Number(totalPmt.toFixed(2)));

      setTotalInterest(Number(totalInt.toFixed(2)));

    }

  };



  const faqData = [

    {

      question: "How is credit card interest calculated?",

      answer: "Credit card interest is typically calculated using a daily periodic rate (annual rate divided by 365) and applied to your average daily balance. Our calculator uses monthly compounding for simplicity."

    },

    {

      question: "Why should I pay more than the minimum payment?",

      answer: "Paying only the minimum payment extends your repayment period and significantly increases the total interest paid. Increasing your monthly payment reduces both the payoff time and total interest."

    },

    {

      question: "How can I pay off my credit card debt faster?",

      answer: "To pay off credit card debt faster: 1) Pay more than the minimum payment, 2) Transfer to a lower interest rate card, 3) Stop using the card while paying it off, 4) Make bi-weekly payments instead of monthly."

    },

    {

      question: "What is a good credit card interest rate?",

      answer: "Credit card interest rates typically range from 12% to 24%. Rates below 15% are considered good, while rates above 20% are high. Your rate depends on your credit score and card type."

    }

  ];



  const calculatorType: CalculatorType = 'credit-card';



  return (

    <div className="flex flex-col min-h-screen bg-golden-50">

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">

        <h1 className="text-4xl font-bold mb-4 text-golden-700 text-center">

          Credit Card Payoff Calculator

        </h1>

        

        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">

          Calculate how long it will take to pay off your credit card balance and see the total interest cost.

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

              label="Annual Interest Rate (%)"

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

                    {timeToPayOff.toLocaleString()}

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

                  primaryValue: balance,

                  secondaryValue: totalInterest,

                  primaryLabel: 'Principal',

                  secondaryLabel: 'Interest'

                }}

              />

            </div>

            <div className="h-[300px]">

              <BarChart 

                title="Monthly Payment Allocation"

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

              Our credit card payoff calculator helps you understand exactly how long it will take to pay off your credit card debt and the total interest you'll pay. By visualizing your debt payoff journey, you can make better decisions about your monthly payments and develop an effective debt elimination strategy.

            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">How Credit Card Interest Works</h3>

            <p className="mb-4">

              Credit card interest is typically calculated daily using your annual percentage rate (APR) divided by 365. The interest compounds, meaning you pay interest on previously accrued interest, which can make credit card debt particularly expensive if not managed properly.

            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features</h3>

            <ul className="list-disc pl-6 mb-4">

              <li>Calculate exact payoff timeline based on your payment amount</li>

              <li>See total interest costs over the life of your debt</li>

              <li>Understand how different payment amounts affect your payoff time</li>

              <li>Visualize the breakdown between principal and interest payments</li>

              <li>Compare different payment strategies to find the best approach</li>

            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">Tips for Faster Payoff</h3>

            <ul className="list-disc pl-6 mb-4">

              <li>Pay more than the minimum payment whenever possible</li>

              <li>Consider balance transfer options to lower your interest rate</li>

              <li>Stop using the card while paying it off</li>

              <li>Make bi-weekly payments to reduce interest charges</li>

              <li>Apply any extra money (bonuses, tax returns) to your credit card debt</li>

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
