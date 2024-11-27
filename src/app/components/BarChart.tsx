'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CustomBarChartProps {
  data: any[];
  bars: {
    dataKey: string;
    color: string;
    name: string;
  }[];
  xAxisDataKey: string;
}

export default function CustomBarChart({ data, bars, xAxisDataKey }: CustomBarChartProps) {
  const chartData = {
    labels: data.map(item => item[xAxisDataKey]),
    datasets: bars.map(bar => ({
      label: bar.name,
      data: data.map(item => item[bar.dataKey]),
      backgroundColor: bar.color,
      borderColor: bar.color,
      borderWidth: 1,
    })),
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
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '$' + value.toLocaleString();
          }
        }
      }
    },
  };

  return (
    <div className="h-[300px] w-full">
      <Bar data={chartData} options={options} />
    </div>
  );
} 