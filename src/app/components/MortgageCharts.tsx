'use client';

import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';

interface MortgageChartsProps {
  principal: number;
  totalInterest: number;
  totalTaxAndInsurance: number;
  loanTerm: number;
}

export default function MortgageCharts({ 
  principal, 
  totalInterest, 
  totalTaxAndInsurance,
  loanTerm 
}: MortgageChartsProps) {
  // Calculate yearly values
  const yearlyLabels = Array.from({ length: loanTerm }, (_, i) => `Year ${i + 1}`);
  const yearlyPrincipal = Array.from({ length: loanTerm }, () => principal / loanTerm);
  const yearlyInterest = Array.from({ length: loanTerm }, () => totalInterest / loanTerm);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-golden-700">Payment Breakdown</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-[300px]">
          <PieChart 
            title="Total Cost Distribution"
            data={{
              primaryValue: principal,
              secondaryValue: totalInterest + totalTaxAndInsurance,
              primaryLabel: 'Principal',
              secondaryLabel: 'Interest & Fees'
            }}
          />
        </div>
        <div className="h-[300px]">
          <BarChart 
            title="Yearly Payment Breakdown"
            data={{
              labels: yearlyLabels,
              primaryValues: yearlyPrincipal,
              secondaryValues: yearlyInterest,
              primaryLabel: 'Principal',
              secondaryLabel: 'Interest'
            }}
          />
        </div>
      </div>
    </div>
  );
} 