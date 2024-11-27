'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Calculators() {
  const calculators = [
    {
      title: "Mortgage Interest Calculator",
      description: "Calculate your monthly mortgage payments including PITI.",
      path: "/calculators/mortgage-interest",
      icon: "🏠"
    },
    {
      title: "Loan Payment Calculator",
      description: "Calculate monthly payments and total interest for any loan.",
      path: "/calculators/loan-payment",
      icon: "💰"
    },
    {
      title: "Loan Interest Calculator",
      description: "See total interest costs and payment breakdowns.",
      path: "/calculators/loan-interest",
      icon: "📊"
    },
    {
      title: "Credit Card Calculator",
      description: "Plan your credit card debt payoff strategy.",
      path: "/calculators/credit-card",
      icon: "💳"
    },
    {
      title: "Compound Interest Calculator",
      description: "See how your investments grow with compound interest.",
      path: "/calculators/compound-interest",
      icon: "📈"
    },
    {
      title: "Continuous Compound Calculator",
      description: "Calculate maximum theoretical returns with e^(rt) formula.",
      path: "/calculators/continuous-compound",
      icon: "∞"
    },
    {
      title: "Savings Goal Calculator",
      description: "Calculate monthly savings needed to reach your goals.",
      path: "/calculators/savings-goal",
      icon: "🎯"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-golden-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-golden-700 text-center">
          Financial Calculators
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Choose from our collection of free financial calculators to help you make informed decisions about loans, investments, savings, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {calculators.map((calc, index) => (
            <Link 
              href={calc.path} 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{calc.icon}</span>
                  <h2 className="text-xl font-semibold text-golden-700">
                    {calc.title}
                  </h2>
                </div>
                <p className="text-gray-600">
                  {calc.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 