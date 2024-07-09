// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import axios from "axios";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//       labels: {
//         color: "white",
//       },
//     },
//     title: {
//       display: true,
//       text: "Number of Criticals and Warnings by Month",
//       color: "white",
//     },
//     tooltip: {
//       callbacks: {
//         label: function (tooltipItem) {
//           return tooltipItem.dataset.label + ": " + tooltipItem.formattedValue;
//         },
//       },
//     },
//   },
//   scales: {
//     x: {
//       ticks: {
//         color: "white",
//       },
//       title: {
//         display: true,
//         text: "Month",
//         color: "white",
//       },
//       grid: {
//         color: "rgba(255, 255, 255, 0.2)",
//         borderColor: "rgba(255, 255, 255, 1)",
//       },
//     },
//     y: {
//       ticks: {
//         color: "white",
//       },
//       title: {
//         display: true,
//         text: "Count",
//         color: "white",
//       },
//       grid: {
//         color: "rgba(255, 255, 255, 0.2)",
//         borderColor: "rgba(255, 255, 255, 1)",
//       },
//     },
//   },
// };

// const countCriticalsAndWarningsPerMonth = (data1) => {
//   const monthCounts = new Array(12).fill(0);
//   const warningsCounts = new Array(12).fill(0);

// //   data1.forEach((item) => {
//     data1.forEach((i) => {
//       const date = new Date(i.Date);
//       const month = date.getMonth();
//       monthCounts[month] += i.crits.total_crits;
//       warningsCounts[month] += i.scom_alerts.total_warnings;
//     });
// //   });

//   return { monthCounts, warningsCounts };
// };

// const LineChart = ({ data1 }) => {
//   const [data, setData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     const getData = () => {
//       if (data1 && data1.length > 0) {
//         const monthOrder = [
//           "January",
//           "February",
//           "March",
//           "April",
//           "May",
//           "June",
//           "July",
//           "August",
//           "September",
//           "October",
//           "November",
//           "December",
//         ];

//         const colors = [
//           "rgb(255, 99, 132)",
//           "rgb(54, 162, 235)",
//           "rgb(75, 192, 192)",
//           "rgb(153, 102, 255)",
//           "rgb(255, 159, 64)",
//           "rgb(255, 205, 86)",
//         ];

//         const datasets = data1.map((prod, index) => {
//           const color = colors[index % colors.length];
//           const { monthCounts, warningsCounts } = countCriticalsAndWarningsPerMonth(prod.info);

//           return [
//             {
//               label: `${prod.product_name} - Total Criticals`,
//               data: monthCounts,
//               borderColor: color,
//               backgroundColor: `${color}33`, // Add transparency
//             },
//             {
//               label: `${prod.product_name} - Total Warnings`,
//               data: warningsCounts,
//               borderColor: color,
//               backgroundColor: `${color}33`, // Add transparency
//               borderDash: [5, 5], // Example for dashed border
//             },
//           ];
//         }).flat(); // Use flat() to flatten the nested array into a single array of datasets

//         setData({
//           labels: monthOrder,
//           datasets: datasets,
//         });
//       }
//     };

//     getData();
//   }, [data1]);

//   return (
//     <div style={{ width: "90%" }}>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default LineChart;

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
 
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white",
      },
    },
    title: {
      display: true,
      text: "Number of Criticals and Warnings by Month",
      color: "white",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const { dataset, dataIndex } = context;
          const currentValue = dataset.data[dataIndex];
          const prevValue = dataIndex > 0 ? dataset.data[dataIndex - 1] : currentValue;
          const reduction = currentValue !== 0 ? ((prevValue - currentValue) / currentValue) * 100 : 0;
          const reductionText = dataIndex > 0 ? ` (${reduction.toFixed(2)}% reduction)` : '';
          return `${dataset.label}: ${currentValue}${reductionText}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",
      },
      title: {
        display: true,
        text: "Month",
        color: "white",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 1)",
      },
    },
    y: {
      ticks: {
        color: "white",
      },
      title: {
        display: true,
        text: "Count",
        color: "white",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 1)",
      },
    },
  },
};
 
const countCriticalsAndWarningsPerMonth = (data1) => {
  const monthCounts = new Array(12).fill(0);
  const warningsCounts = new Array(12).fill(0);
 
  data1.forEach((i) => {
    const date = new Date(i.Date);
    const month = date.getMonth();
    monthCounts[month] += i.crits.total_crits;
    warningsCounts[month] += i.scom_alerts.total_warnings;
  });
 
  return { monthCounts, warningsCounts };
};
 
const LineChart = ({ data1 }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
 
  useEffect(() => {
    const getData = () => {
      if (data1 && data1.length > 0) {
        const monthOrder = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
 
        const colors = [
          "rgb(255, 99, 132)", // Red
          "rgb(54, 162, 235)", // Blue
          "rgb(75, 192, 192)", // Teal
          "rgb(153, 102, 255)", // Purple
          "rgb(255, 159, 64)", // Orange
          "rgb(255, 205, 86)", // Yellow
          "rgb(60, 179, 113)", // Green - new color added
        ];
 
        const datasets = data1
          .map((prod, index) => {
            const color = colors[index % colors.length];
            const { monthCounts, warningsCounts } =
              countCriticalsAndWarningsPerMonth(prod.info);
            return [
              {
                label: `${prod.product_name} - Total Criticals`,
                data: monthCounts,
                borderColor: color,
                backgroundColor: `${color}33`, // Add transparency
              },
              {
                label: `${prod.product_name} - Total Warnings`,
                data: warningsCounts,
                borderColor: color,
                backgroundColor: `${color}33`, // Add transparency
                borderDash: [5, 5], // Example for dashed border
              },
            ];
          })
          .flat(); // Use flat() to flatten the nested array into a single array of datasets
 
        setData({
          labels: monthOrder,
          datasets: datasets,
        });
      }
    };
 
    getData();
  }, [data1]);
 
  return (
    <div style={{ width: "90%" }}>
      <Line data={data} options={options} />
    </div>
  );
};
 
export default LineChart;