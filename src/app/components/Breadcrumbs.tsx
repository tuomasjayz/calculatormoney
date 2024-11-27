'use client';

interface BreadcrumbsProps {
  calculatorType: string;
  title: string;
}

export default function Breadcrumbs({ calculatorType, title }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://calculatormoney.com"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Calculators",
      "item": "https://calculatormoney.com/calculators"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": title,
      "item": `https://calculatormoney.com/calculators/${calculatorType}`
    }]
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="text-sm mb-6 max-w-2xl mx-auto">
        <ol className="list-none p-0 inline-flex text-golden-600">
          <li className="flex items-center">
            <a href="/" className="hover:text-golden-700">Home</a>
            <span className="mx-2 text-gray-500">/</span>
          </li>
          <li className="flex items-center">
            <a href="/calculators" className="hover:text-golden-700">Calculators</a>
            <span className="mx-2 text-gray-500">/</span>
          </li>
          <li className="text-gray-600">{title}</li>
        </ol>
      </nav>
    </>
  );
} 