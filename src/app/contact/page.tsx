import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-golden-700 text-center">
          Contact CalculatorMoney.com
        </h1>
        
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden-500"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-golden-500 text-white py-2 rounded-md hover:bg-golden-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Contact Information</h2>
            <p className="text-gray-600">
              Email: info@calculatormoney.com
            </p>
            <p className="text-gray-600">
              Address: Virtual Office, Internet Space
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
