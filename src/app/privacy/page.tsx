import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-golden-700 text-center">
          Privacy Policy
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Information Collection</h2>
            <p className="text-gray-600">
              CalculatorMoney.com does not collect personal information when you use our calculators. 
              All calculations are performed client-side and no data is stored or transmitted.
            </p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use minimal cookies solely for website functionality and analytics. 
              No personal tracking or data selling occurs.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Data Security</h2>
            <p className="text-gray-600">
              We are committed to protecting your privacy and ensuring the security of any 
              information that may be collected through our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Contact</h2>
            <p className="text-gray-600">
              For any privacy-related questions, please contact us at privacy@calculatormoney.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
