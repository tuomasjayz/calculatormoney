'use client';



import { useState, useEffect } from 'react';

import Header from '../../components/Header';

import Footer from '../../components/Footer';

import DynamicSlider from '../../components/DynamicSlider';

import ReviewSection from '../../components/ReviewSection';

import FAQSection from '../../components/FAQSection';

import SavingsCharts from '../../components/SavingsCharts';



export default function SavingsGoalCalculator() {

  const [targetAmount, setTargetAmount] = useState(50000);

  const [initialSavings, setInitialSavings] = useState(5000);

  const [timeframe, setTimeframe] = useState(5);

  const [interestRate, setInterestRate] = useState(2);

  const [monthlyContribution, setMonthlyContribution] = useState<number>(0);

  const [totalContributions, setTotalContributions] = useState<number>(0);

  const [totalInterest, setTotalInterest] = useState<number>(0);



  useEffect(() => {

    calculateSavings();

  }, [targetAmount, initialSavings, timeframe, interestRate]);



  const calculateSavings = () => {

    const r = interestRate / 100 / 12; // Monthly interest rate

    const n = timeframe * 12; // Total months

    const P = initialSavings;

    const FV = targetAmount;



    // Calculate required monthly payment using FV formula

    // FV = P(1+r)^n + PMT[((1+r)^n-1)/r]

    // Solve for PMT

    if (r > 0) {

      const PMT = (FV - P * Math.pow(1 + r, n)) * r / (Math.pow(1 + r, n) - 1);

      setMonthlyContribution(Number(PMT.toFixed(2)));



      // Calculate total contributions

      const totalContrib = initialSavings + (PMT * n);

      setTotalContributions(Number(totalContrib.toFixed(2)));



      // Calculate total interest

      setTotalInterest(Number((targetAmount - totalContrib).toFixed(2)));

    } else {

      // If no interest, simple division

      const monthlyAmount = (targetAmount - initialSavings) / n;

      setMonthlyContribution(Number(monthlyAmount.toFixed(2)));

      setTotalContributions(Number(targetAmount.toFixed(2)));

      setTotalInterest(0);

    }

  };



  const faqData = [

    {

      question: "How much should I save monthly?",

      answer: "The amount you should save monthly depends on your goal amount, timeframe, and expected return rate. Our calculator helps you determine this by considering your initial savings and target amount."

    },

    {

      question: "What interest rate should I use?",

      answer: "The interest rate depends on your investment strategy. Savings accounts typically offer 0.5-2%, while investment accounts might average 5-8% long-term. Consider your risk tolerance and investment timeline."

    },

    {

      question: "Should I include my initial savings?",

      answer: "Yes, including your initial savings can significantly reduce the required monthly contributions. It gives you a head start and allows your existing savings to grow with interest."

    },

    {

      question: "How can I reach my goal faster?",

      answer: "To reach your goal faster, you can: 1) Increase your monthly contributions, 2) Start with a larger initial deposit, 3) Seek investments with higher returns (considering risk), or 4) Reduce your target amount."

    }

  ];



  return (

    <div className="flex flex-col min-h-screen bg-gray-50">

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">

        <h1 className="text-4xl font-bold mb-4 text-golden-700 text-center">

          Savings Goal Calculator

        </h1>

        

        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">

          Plan your savings strategy and calculate how much you need to save monthly to reach your financial goals.

        </p>



        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">

          <div className="space-y-6">

            <DynamicSlider

              label="Target Amount ($)"

              value={targetAmount}

              onChange={setTargetAmount}

              min={1000}

              max={1000000}

              step={1000}

              defaultValue={50000}

            />



            <DynamicSlider

              label="Initial Savings ($)"

              value={initialSavings}

              onChange={setInitialSavings}

              min={0}

              max={targetAmount}

              step={1000}

              defaultValue={5000}

            />



            <DynamicSlider

              label="Time to Reach Goal (Years)"

              value={timeframe}

              onChange={setTimeframe}

              min={1}

              max={30}

              step={1}

              defaultValue={5}

            />



            <DynamicSlider

              label="Expected Annual Return (%)"

              value={interestRate}

              onChange={setInterestRate}

              min={0}

              max={15}

              step={0.1}

              defaultValue={2}

            />



            <div className="mt-8 bg-golden-50 p-6 rounded-lg">

              <h2 className="text-xl font-semibold mb-4 text-golden-800">Savings Plan</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white p-4 rounded-lg shadow">

                  <p className="text-gray-600">Monthly Savings Needed</p>

                  <p className="text-2xl font-bold text-golden-600">

                    ${monthlyContribution.toLocaleString()}

                  </p>

                </div>

                <div className="bg-white p-4 rounded-lg shadow">

                  <p className="text-gray-600">Total Contributions</p>

                  <p className="text-2xl font-bold text-golden-600">

                    ${totalContributions.toLocaleString()}

                  </p>

                </div>

                <div className="bg-white p-4 rounded-lg shadow">

                  <p className="text-gray-600">Interest Earned</p>

                  <p className="text-2xl font-bold text-golden-600">

                    ${totalInterest.toLocaleString()}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>



        <SavingsCharts 

          initialAmount={initialSavings}

          totalContributions={totalContributions - initialSavings}

          totalInterest={totalInterest}

          years={timeframe}

        />



<div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">

          <h2 className="text-2xl font-bold mb-4 text-golden-700">About The Calculator</h2>

          <div className="prose max-w-none">

            <p className="mb-4">

              Our savings goal calculator helps you create a clear path to reach your financial targets. Whether you're saving for a down payment, emergency fund, or major purchase, this calculator shows exactly how much you need to save monthly.

            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">How Savings Goals Work</h3>

            <p className="mb-4">

              The calculator considers your initial savings, target amount, timeframe, and expected return rate to determine the required monthly savings. It shows how both your regular contributions and compound interest work together to reach your goal.

            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features</h3>

            <ul className="list-disc pl-6 mb-4">

              <li>Calculate required monthly savings</li>

              <li>See impact of initial savings amount</li>

              <li>Understand how interest affects growth</li>

              <li>Visualize progress with interactive charts</li>

              <li>Adjust timeframe to match your needs</li>

            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">Savings Tips</h3>

            <ul className="list-disc pl-6 mb-4">

              <li>Set realistic, achievable goals</li>

              <li>Automate your monthly savings</li>

              <li>Consider high-yield savings accounts</li>

              <li>Review and adjust your plan regularly</li>

              <li>Build an emergency fund first</li>

            </ul>

          </div>

        </div>



        <ReviewSection calculatorType="savings-goal" />



        <FAQSection faqs={faqData} />

      </main>

      <Footer />

    </div>

  );

} 
