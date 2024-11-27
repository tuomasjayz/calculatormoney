'use client';



import { useState } from 'react';



interface FAQ {

  question: string;

  answer: string;

}



interface FAQSectionProps {

  faqs: FAQ[];

}



export default function FAQSection({ faqs }: FAQSectionProps) {

  const [openIndex, setOpenIndex] = useState<number | null>(null);



  return (

    <div className="max-w-2xl mx-auto mt-12 bg-white shadow-md rounded-lg p-6">

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">

        Frequently Asked Questions

      </h2>

      <div className="space-y-4">

        {faqs.map((faq, index) => (

          <div key={index} className="border-b border-gray-200 last:border-0">

            <button

              className="w-full py-4 flex justify-between items-center text-left hover:text-golden-600 transition-colors"

              onClick={() => setOpenIndex(openIndex === index ? null : index)}

            >

              <span className="font-medium text-gray-700">{faq.question}</span>

              <span className="ml-4 flex-shrink-0 text-xl">

                {openIndex === index ? '−' : '+'}

              </span>

            </button>

            <div 

              className={`overflow-hidden transition-all duration-300 ${

                openIndex === index ? 'max-h-96' : 'max-h-0'

              }`}

            >

              <p className="pb-4 text-gray-600">

                {faq.answer}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

} 
