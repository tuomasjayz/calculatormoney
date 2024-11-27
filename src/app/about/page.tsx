import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-golden-700 text-center">
          About CalculatorMoney.com
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Our Mission</h2>
            <p className="text-gray-600">
              CalculatorMoney.com is dedicated to providing powerful, user-friendly financial calculators 
              that help individuals make informed financial decisions. We believe in transparency, 
              accuracy, and empowering users with the tools they need to understand their financial landscape.
            </p>
          </section>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Who We Are</h2>
            <p className="text-gray-600">
              Founded by Tuomas J., our team consists of financial experts and software engineers 
              committed to creating intuitive, accurate financial calculation tools. We understand 
              the complexity of financial planning and aim to simplify it through technology.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Our Calculators</h2>
            <p className="text-gray-600">
              We offer a comprehensive suite of financial calculators covering loans, investments, 
              mortgages, and more. Each calculator is designed to provide clear, actionable insights 
              to help you make smart financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-golden-700">Contact Us</h2>
            <p className="text-gray-600">
              Have questions or suggestions? Reach out to us at info@calculatormoney.com
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
