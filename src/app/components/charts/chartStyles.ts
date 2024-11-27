export const defaultChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        padding: 20,
        usePointStyle: true,
      }
    },
    tooltip: {
      padding: 12,
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      cornerRadius: 4,
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

export const chartColors = {
  primary: '#EBA54D',
  secondary: '#E79127',
}; 