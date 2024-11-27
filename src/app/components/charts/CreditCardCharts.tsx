'use client';

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CreditCardChartsProps {
  currentBalance: number;
  totalInterestPaid: number;
  monthsToPayOff: number;
  monthlyPayment: number;
}

export default function CreditCardCharts({
  currentBalance,
  totalInterestPaid,
  monthsToPayOff,
  monthlyPayment
}: CreditCardChartsProps) {
  const pieData = {
    labels: ['Principal Balance', 'Total Interest'],
    datasets: [{
      data: [currentBalance, totalInterestPaid],
      backgroundColor: ['#EBA54D', '#E79127'],
      borderColor: ['#EBA54D', '#E79127'],
      borderWidth: 1,
    }]
  };

  const monthlyData = {
    labels: Array.from({ length: Math.min(monthsToPayOff, 12) }, (_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: 'Monthly Payment',
        data: Array.from({ length: Math.min(monthsToPayOff, 12) }, () => monthlyPayment),
        backgroundColor: '#EBA54D',
      },
      {
        label: 'Interest Portion',
        data: Array.from({ length: Math.min(monthsToPayOff, 12) }, (_, i) => {
          const remainingBalance = currentBalance - (monthlyPayment * i);
          return Math.max(0, (remainingBalance * (totalInterestPaid / currentBalance / monthsToPayOff)));
        }),
        backgroundColor: '#E79127',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `$${context.raw.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return `$${value.toLocaleString()}`;
          }
        }
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-golden-700">Payment Analysis</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Total Cost Distribution</h3>
          <div className="h-[300px] relative">
            <Pie data={pieData} options={options} />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Monthly Payment Breakdown</h3>
          <div className="h-[300px] relative">
            <Bar data={monthlyData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
} 