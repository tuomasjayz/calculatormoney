'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-golden-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">CalculatorMoney.com</h3>
            <p className="text-gray-300">
              Free financial calculators to help you make better money decisions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-gray-300 hover:text-white">
                  Calculators
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-golden-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} CalculatorMoney.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}






