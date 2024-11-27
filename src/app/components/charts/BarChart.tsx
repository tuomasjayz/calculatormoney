'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  title: string;
  data: {
    labels: string[];
    primaryValues: number[];
    secondaryValues: number[];
    primaryLabel: string;
    secondaryLabel: string;
  };
}

export default function BarChart({ title, data }: BarChartProps) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.primaryLabel,
        data: data.primaryValues,
        backgroundColor: '#EBA54D',
        barPercentage: 0.8,
        categoryPercentage: 0.9,
      },
      {
        label: data.secondaryLabel,
        data: data.secondaryValues,
        backgroundColor: '#E79127',
        barPercentage: 0.8,
        categoryPercentage: 0.9,
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          boxWidth: 10,
        }
      },
      tooltip: {
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        cornerRadius: 4,
        callbacks: {
          label: function(context: any) {
            const value = context.raw;
            return `${context.dataset.label}: $${value.toLocaleString()}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 11
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          callback: function(value: any) {
            return `$${(value/1000).toFixed(0)}k`;
          },
          font: {
            size: 11
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-full">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">{title}</h3>
      <div className="h-[250px]">
        <Bar data={chartData} options={barOptions} />
      </div>
    </div>
  );
} 