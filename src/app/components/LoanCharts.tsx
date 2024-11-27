'use client';

import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';

interface LoanChartsProps {
  loanAmount: number;
  totalInterest: number;
  loanTerm: number;
}

export default function LoanCharts({ loanAmount, totalInterest, loanTerm }: LoanChartsProps) {
  const validLoanAmount = Number(loanAmount) || 0;
  const validTotalInterest = Number(totalInterest) || 0;
  const validLoanTerm = Number(loanTerm) || 1;

  const yearlyLabels = Array.from({ length: validLoanTerm }, (_, i) => `Year ${i + 1}`);
  const yearlyPrincipal = Array.from({ length: validLoanTerm }, () => validLoanAmount / validLoanTerm);
  const yearlyInterest = Array.from({ length: validLoanTerm }, () => validTotalInterest / validLoanTerm);

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-golden-700">Payment Analysis</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-[300px]">
          <PieChart 
            title="Cost Distribution"
            data={{
              primaryValue: validLoanAmount,
              secondaryValue: validTotalInterest,
              primaryLabel: 'Principal',
              secondaryLabel: 'Interest'
            }}
          />
        </div>
        <div className="h-[300px]">
          <BarChart 
            title="Yearly Breakdown"
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