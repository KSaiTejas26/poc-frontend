import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white", // Customize legend text color
      }
    },
    datalabels: {
      color: "white", // Customize data label text color
      formatter: (value, context) => {
        // Display label with value
        const label = context.chart.data.labels[context.dataIndex];
        return `${label}: ${value}`;
      },
    },
  },
};

const LineChart = ({ data1 }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Root Cause Distribution",
        data: [],
        backgroundColor: [],
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    console.log("in useeffect");
    console.log("belo ", data1);
    if (data1) {
      console.log("data1 ", data1);
      const rootCauseCounts = {};
      data1.info.forEach((infoItem) => {
        const rootCause = infoItem.root_cause_code;
        console.log("rc ", rootCause);
        if (rootCause) {
          if (rootCauseCounts[rootCause]) {
            rootCauseCounts[rootCause]++;
          } else {
            rootCauseCounts[rootCause] = 1;
          }
        }
      });

      console.log("dic ", rootCauseCounts);
      const labels = Object.keys(rootCauseCounts);
      const counts = Object.values(rootCauseCounts);
      const colors = labels.map(
        () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
      ); 

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Root Cause Distribution",
            data: counts,
            backgroundColor: colors,
            hoverOffset: 4,
          },
        ],
      });
    }
  }, [data1]);

  return (
    <div style={{ width: "80%" }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
