'use client';

import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

interface PieChartProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

export default function CustomPieChart({ data }: PieChartProps) {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color),
        borderColor: data.map(item => item.color),
        borderWidth: 1,
      },
    ],
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
            const value = context.raw;
            return `$${value.toLocaleString()}`;
          }
        }
      }
    },
  };

  return (
    <div className="h-[300px] w-full">
      <Pie data={chartData} options={options} />
    </div>
  );
} 