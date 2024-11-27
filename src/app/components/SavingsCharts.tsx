'use client';

import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';

interface SavingsChartsProps {
  initialAmount: number;
  totalContributions: number;
  totalInterest: number;
  years: number;
}

export default function SavingsCharts({ 
  initialAmount, 
  totalContributions,
  totalInterest,
  years 
}: SavingsChartsProps) {
  const validInitial = Number(initialAmount) || 0;
  const validContributions = Number(totalContributions) || 0;
  const validInterest = Number(totalInterest) || 0;

  // Calculate yearly growth
  const yearlyLabels = Array.from({ length: years }, (_, i) => `Year ${i + 1}`);
  
  // Calculate progressive growth for more realistic visualization
  const yearlyContributions = Array.from({ length: years }, (_, i) => {
    const yearlyContrib = validContributions / years;
    return yearlyContrib * (i + 1);
  });

  const yearlyInterest = Array.from({ length: years }, (_, i) => {
    const yearlyInt = validInterest / years;
    return yearlyInt * (i + 1);
  });

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-golden-700">Savings Growth Analysis</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-[300px]">
          <PieChart 
            title="Savings Composition"
            data={{
              primaryValue: validInitial + validContributions,
              secondaryValue: validInterest,
              primaryLabel: 'Total Deposits',
              secondaryLabel: 'Interest Earned'
            }}
          />
        </div>
        <div className="h-[300px]">
          <BarChart 
            title="Growth Over Time"
            data={{
              labels: yearlyLabels,
              primaryValues: yearlyContributions.map((contrib, i) => validInitial + contrib),
              secondaryValues: yearlyInterest,
              primaryLabel: 'Cumulative Savings',
              secondaryLabel: 'Interest'
            }}
          />
        </div>
      </div>
    </div>
  );
} 