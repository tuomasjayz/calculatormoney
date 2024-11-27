'use client';



import Header from '../components/Header';

import Footer from '../components/Footer';



export default function TermsOfService() {

  return (

    <div className="flex flex-col min-h-screen bg-golden-50">

      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">

        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">

          <h1 className="text-4xl font-bold mb-8 text-golden-700">Terms of Service</h1>

          <div className="prose max-w-none">

            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            

            <section className="mb-8">

              <h2 className="text-2xl font-semibold mb-4">1. Calculator Usage</h2>

              <p>Our calculators are provided for informational purposes only:</p>

              <ul className="list-disc pl-6 mb-4">

                <li>Results are estimates and not financial advice</li>

                <li>Verify calculations with financial professionals</li>

                <li>Use at your own risk</li>

                <li>Results may vary based on many factors</li>

              </ul>

            </section>



            <section className="mb-8">

              <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>

              <ul className="list-disc pl-6 mb-4">

                <li>Provide accurate input data</li>

                <li>Use calculators responsibly</li>

                <li>Do not attempt to manipulate results</li>

                <li>Report any bugs or issues</li>

              </ul>

            </section>



            <section className="mb-8">

              <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>

              <p>All content on this website is protected:</p>

              <ul className="list-disc pl-6 mb-4">

                <li>Calculator algorithms and code</li>

                <li>Website design and layout</li>

                <li>Text and graphics</li>

                <li>Brand names and logos</li>

              </ul>

            </section>



            <section className="mb-8">

              <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>

              <p>We make no warranties about:</p>

              <ul className="list-disc pl-6 mb-4">

                <li>Calculator accuracy</li>

                <li>Financial outcomes</li>

                <li>Website availability</li>

                <li>Third-party content</li>

              </ul>

            </section>



            <section>

              <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>

              <p>For terms of service questions, contact us at terms@calculatormoney.com</p>

            </section>

          </div>

        </div>

      </main>

      <Footer />

    </div>

  );

} 
