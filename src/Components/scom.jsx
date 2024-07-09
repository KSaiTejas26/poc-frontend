import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const ComboBarLineChart = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/productsData"); // Replace with your API endpoint
        setProductsData(response.data);
      } catch (error) {
        console.error('Error fetching products data:', error);
      }
    };

    fetchProductsData();
  }, []);

  const formatChartData = (productsData) => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const datasets = [];

    productsData.forEach((product, index) => {
      const lineColor = getRandomColor();
      const barColor = getRandomColor();

      datasets.push({
        label: `${product.product_name} - Total Criticals`,
        borderColor: `rgb(${lineColor})`,
        backgroundColor: `rgba(${lineColor}, 0.2)`,
        fill: false,
        data: product.crits.map((crit) => crit.total_crits),
        yAxisID: 'y',
        type: 'line'
      });

      datasets.push({
        label: `${product.product_name} - Total Warnings`,
        backgroundColor: `rgb(${barColor})`,
        data: product.crits.map((crit) => crit.total_warnings),
        yAxisID: 'y1',
        type: 'bar'
      });
    });

    return { labels, datasets };
  };

  const chartData = formatChartData(productsData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Combo Bar/Line Chart',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            let label = tooltipItem.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += tooltipItem.raw.toLocaleString();
            return label;
          },
          footer: function(tooltipItems) {
            const productLabel = tooltipItems[0].dataset.label.split(' - ')[0];
            return `Product: ${productLabel}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        position: 'left',
        title: {
          display: true,
          text: 'Total Criticals',
        },
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        title: {
          display: true,
          text: 'Total Warnings',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

// Helper function to get random color value
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `${r}, ${g}, ${b}`;
};

export default ComboBarLineChart;
