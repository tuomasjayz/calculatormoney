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

  title: string;

  data: {

    primaryValue: number;

    secondaryValue: number;

    primaryLabel: string;

    secondaryLabel: string;

  };

}



export default function PieChart({ title, data }: PieChartProps) {

  const chartData = {

    labels: [data.primaryLabel, data.secondaryLabel],

    datasets: [

      {

        data: [data.primaryValue, data.secondaryValue],

        backgroundColor: ['#ff6384', '#36a2eb'],

        borderColor: ['#ff6384', '#36a2eb'],

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
