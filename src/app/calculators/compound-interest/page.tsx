'use client';



import { useState, useEffect } from 'react';

import Header from '../../components/Header';

import Footer from '../../components/Footer';

import DynamicSlider from '../../components/DynamicSlider';

import ReviewSection from '../../components/ReviewSection';

import FAQSection from '../../components/FAQSection';

import CompoundCharts from '../../components/CompoundCharts';



export default function CompoundInterestCalculator() {

  const [principal, setPrincipal] = useState(10000);

  const [monthlyContribution, setMonthlyContribution] = useState(100);

  const [interestRate, setInterestRate] = useState(7);

  const [years, setYears] = useState(10);

  const [compoundingFrequency, setCompoundingFrequency] = useState(12); // Monthly

  const [futureValue, setFutureValue] = useState<number>(0);

  const [totalContributions, setTotalContributions] = useState<number>(0);

  const [totalInterest, setTotalInterest] = useState<number>(0);



  useEffect(() => {

    calculateCompoundInterest();

  }, [principal, monthlyContribution, interestRate, years, compoundingFrequency]);



  const calculateCompoundInterest = () => {

    const r = interestRate / 100;

    const n = compoundingFrequency;

    const t = years;

    const PMT = monthlyContribution;

    const P = principal;



    // Calculate future value with monthly contributions

    const FV = P * Math.pow(1 + r/n, n*t) + 

               PMT * (Math.pow(1 + r/n, n*t) - 1) / (r/n);



    const totalContrib = P + (PMT * 12 * t);

    const totalInt = FV - totalContrib;



    setFutureValue(Number(FV.toFixed(2)));

    setTotalContributions(Number(totalContrib.toFixed(2)));

    setTotalInterest(Number(totalInt.toFixed(2)));

  };



  const faqData = [

    {

      question: "What is compound interest?",

      answer: "Compound interest is when you earn interest not only on your initial investment but also on the accumulated interest from previous periods. This creates a snowball effect that can significantly grow your money over time."

    },

    {

      question: "How does compounding frequency affect returns?",

      answer: "The more frequently interest compounds (daily, monthly, quarterly, etc.), the more your money can grow. More frequent compounding periods result in slightly higher returns because interest is reinvested more often."

    },

    {

      question: "What's the difference between simple and compound interest?",

      answer: "Simple interest is calculated only on the principal amount, while compound interest is calculated on both the principal and accumulated interest. Compound interest leads to faster growth of your investment."

    },

    {

      question: "How can I maximize compound interest?",

      answer: "To maximize compound interest: 1) Start early to give your money more time to grow, 2) Make regular contributions, 3) Reinvest earnings instead of withdrawing them, 4) Seek investments with higher returns while considering risk, and 5) Choose more frequent compounding periods if possible."

    }

  ];



  return (

    <div className="flex flex-col min-h-screen bg-gray-50">

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">

        <h1 className="text-4xl font-bold mb-4 text-golden-700 text-center">

          Compound Interest Calculator

        </h1>

        

        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">

          See how your investments can grow over time with the power of compound interest.

        </p>



        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">

          <div className="space-y-6">

            <DynamicSlider

              label="Initial Investment ($)"

              value={principal}

              onChange={setPrincipal}

              min={1000}

              max={1000000}

              step={1000}

              defaultValue={10000}

            />



            <DynamicSlider

              label="Monthly Contribution ($)"

              value={monthlyContribution}

              onChange={setMonthlyContribution}

              min={0}

              max={10000}

              step={100}

              defaultValue={100}

            />



            <DynamicSlider

              label="Annual Interest Rate (%)"

              value={interestRate}

              onChange={setInterestRate}

              min={0.1}

              max={20}

              step={0.1}

              defaultValue={7}

            />



            <DynamicSlider

              label="Investment Period (Years)"

              value={years}

              onChange={setYears}

              min={1}

              max={40}

              step={1}

              defaultValue={10}

            />



            <div className="mt-8 bg-golden-50 p-6 rounded-lg">

              <h2 className="text-xl font-semibold mb-4 text-golden-800">Investment Summary</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white p-4 rounded-lg shadow">

                  <p className="text-gray-600">Future Value</p>

                  <p className="text-2xl font-bold text-golden-600">

                    ${futureValue.toLocaleString()}

                  </p>

                </div>

                <div className="bg-white p-4 rounded-lg shadow">

                  <p className="text-gray-600">Total Contributions</p>

                  <p className="text-2xl font-bold text-golden-600">

                    ${totalContributions.toLocaleString()}

                  </p>

                </div>

                <div className="bg-white p-4 rounded-lg shadow">

                  <p className="text-gray-600">Total Interest</p>

                  <p className="text-2xl font-bold text-golden-600">

                    ${totalInterest.toLocaleString()}

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>



        <CompoundCharts 

          principal={principal}

          totalContributions={totalContributions}

          totalInterest={totalInterest}

          years={years}

        />



<div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">

          <h2 className="text-2xl font-bold mb-4 text-golden-700">About The Calculator</h2>

          <div className="prose max-w-none">

            <p className="mb-4">

              Our compound interest calculator shows you how your investments can grow over time through the power of compounding. See how regular contributions and reinvested earnings can accelerate your wealth building journey.

            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">How Compound Interest Works</h3>

            <p className="mb-4">

              Compound interest means you earn interest not only on your initial investment but also on previously accumulated interest. This creates an exponential growth effect that can significantly boost your returns over longer time periods.

            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features</h3>

            <ul className="list-disc pl-6 mb-4">

              <li>Calculate future value of investments</li>

              <li>See impact of monthly contributions</li>

              <li>Compare different interest rates</li>

              <li>Understand compounding frequency effects</li>

              <li>Visualize growth with interactive charts</li>

            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-700">Investment Tips</h3>

            <ul className="list-disc pl-6 mb-4">

              <li>Start investing early to maximize compounding</li>

              <li>Make regular contributions to accelerate growth</li>

              <li>Reinvest dividends and interest earnings</li>

              <li>Consider higher-yield investments for longer terms</li>

              <li>Use tax-advantaged accounts when possible</li>

            </ul>

          </div>

        </div>



        <ReviewSection calculatorType="compound-interest" />



        <FAQSection faqs={faqData} />

      </main>

      <Footer />

    </div>

  );

}


