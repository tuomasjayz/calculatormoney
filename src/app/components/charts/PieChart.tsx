'use client';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title: string;
  data: {
    primaryValue: number;
    secondaryValue: number;
    primaryLabel: string;
    secondaryLabel: string;
  };
}

export default function PieChart({ title, data }: PieChartProps) {
  const simpleData = {
    labels: [data.primaryLabel, data.secondaryLabel],
    datasets: [{
      label: 'Amount',
      data: [data.primaryValue, data.secondaryValue],
      backgroundColor: ['#EBA54D', '#E79127'],
      borderColor: ['#EBA54D', '#E79127'],
      borderWidth: 1,
    }]
  };

  const simpleOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.label}: $${context.raw.toLocaleString()}`;
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">{title}</h3>
      <div className="h-[250px]">
        <Pie data={simpleData} options={simpleOptions} />
      </div>
    </div>
  );
} 