'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-golden-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-golden-700">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p>We collect only essential information to improve your calculator experience:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Calculator usage statistics</li>
                <li>Anonymous ratings and reviews</li>
                <li>Browser type and version</li>
                <li>Device type and screen size</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Improve calculator accuracy and usability</li>
                <li>Enhance user experience</li>
                <li>Fix bugs and technical issues</li>
                <li>Analyze usage patterns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
              <p>We store minimal data locally in your browser:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your calculator ratings</li>
                <li>Calculator preferences</li>
                <li>Recent calculations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p>We use limited third-party services:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Google Analytics for anonymous usage statistics</li>
                <li>Vercel for hosting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>For privacy concerns, contact us at privacy@calculatormoney.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 