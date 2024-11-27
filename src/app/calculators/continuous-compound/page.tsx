'use client';

import { CalculatorType } from '../../utils/calculatorTypes';

import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import Footer from '../../components/Footer';

import DynamicSlider from '../../components/DynamicSlider';

import ReviewSection from '../../components/ReviewSection';

import FAQSection from '../../components/FAQSection';

import PieChart from '../../components/PieChart';

import BarChart from '../../components/BarChart';



export default function ContinuousCompoundCalculator() {

  const [principal, setPrincipal] = useState(10000);

  const [interestRate, setInterestRate] = useState(5);

  const [years, setYears] = useState(10);

  const [futureValue, setFutureValue] = useState<number>(0);

  const [totalInterest, setTotalInterest] = useState<number>(0);



  useEffect(() => {

    calculateContinuousCompound();

  }, [principal, interestRate, years]);



  const calculateContinuousCompound = () => {

    const P = principal;

    const r = interestRate / 100;

    const t = years;

    const e = Math.E;



    // A = Pe^(rt)

    const A = P * Math.pow(e, r * t);

    const interest = A - P;



    setFutureValue(Number(A.toFixed(2)));

    setTotalInterest(Number(interest.toFixed(2)));

  };



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

  const calculatorType: CalculatorType = 'continuous-compound';

  const barChartData = {

    labels: Array.from({ length: years }, (_, i) => `Year ${i + 1}`),

    primaryValues: Array(years).fill(principal / years),

    secondaryValues: Array(years).fill(totalInterest / years),

    primaryLabel: 'Principal',

    secondaryLabel: 'Interest'

  };



  return (

    <div className="flex flex-col min-h-screen bg-golden-50">

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">

        <h1 className="text-4xl font-bold mb-4 text-golden-700 text-center">

          Continuous Compound Interest Calculator

        </h1>

        

        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">

          Calculate continuous compound interest using e^(rt) formula. See how your investments grow with continuous compounding.

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

              label="Annual Interest Rate (%)"

              value={interestRate}

              onChange={setInterestRate}

              min={0.1}

              max={20}

              step={0.1}

              defaultValue={5}

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

                  <p className="text-gray-600">Initial Investment</p>

                  <p className="text-2xl font-bold text-golden-600">

                    ${principal.toLocaleString()}

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



        <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">

          <h2 className="text-2xl font-bold mb-6 text-golden-700">Investment Growth Analysis</h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="h-[300px]">

              <PieChart 

                title="Investment Composition"

                data={{

                  primaryValue: principal,

                  secondaryValue: totalInterest,

                  primaryLabel: 'Principal',

                  secondaryLabel: 'Interest'

                }}

              />

            </div>

            <div className="h-[300px]">

              <BarChart 

                title="Growth Over Time"

                data={barChartData}

              />

            </div>

          </div>

        </div>



        <ReviewSection calculatorType={calculatorType} />

        <FAQSection faqs={faqData} />

      </main>

      <Footer />

    </div>

  );

} 






