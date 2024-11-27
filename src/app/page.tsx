'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const featuredCalculators = [
    {
      title: "Mortgage Interest Calculator",
      description: "Calculate your monthly mortgage payments including PITI.",
      path: "/calculators/mortgage-interest",
      icon: "🏠"
    },
    {
      title: "Compound Interest Calculator",
      description: "See how your investments grow with compound interest.",
      path: "/calculators/compound-interest",
      icon: "📈"
    },
    {
      title: "Credit Card Calculator",
      description: "Plan your credit card debt payoff strategy.",
      path: "/calculators/credit-card",
      icon: "💳"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-golden-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl font-bold mb-6 text-golden-700">
            Free Financial Calculators
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Make smarter financial decisions with our collection of easy-to-use calculators
          </p>
          <Link 
            href="/calculators" 
            className="inline-block bg-golden-600 text-white px-8 py-3 rounded-lg hover:bg-golden-700 transition-colors"
          >
            View All Calculators
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredCalculators.map((calc, index) => (
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

        <div className="max-w-4xl mx-auto mt-16 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-golden-700">About Our Calculators</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our financial calculators help you make informed decisions about loans, investments, savings, and more. Each calculator is designed to be easy to use while providing accurate and detailed results.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-700">Key Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Easy-to-use interface</li>
              <li>Detailed breakdowns and charts</li>
              <li>Expert financial tips</li>
              <li>Mobile-friendly design</li>
              <li>Free to use</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
