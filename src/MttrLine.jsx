// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
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
//       text: "Average MTTR by Month",
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
//         text: "Average MTTR (hours)",
//         color: "white",
//       },
//       grid: {
//         color: "rgba(255, 255, 255, 0.2)",
//         borderColor: "rgba(255, 255, 255, 1)",
//       },
//     },
//   },
// };

// // Function to calculate average MTTR for each month
// const calculateAverageMTTR = (data) => {
//   const months = new Array(12).fill(null).map(() => ({
//     mttr_by_sre: [],
//     mttr_by_nonsre: [],
//   }));

//   data.forEach((item) => {
//     const date = new Date(item.Date);
//     const month = date.getMonth();
//     months[month].mttr_by_sre.push(item.crits.mttr_by_sre);
//     months[month].mttr_by_nonsre.push(item.crits.mttr_by_nonsre);
//   });

//   const averageMTTRbyMonth = months.map((month) => ({
//     mttr_by_sre: month.mttr_by_sre.length
//       ? month.mttr_by_sre.reduce((acc, val) => acc + val, 0) / month.mttr_by_sre.length
//       : 0,
//     mttr_by_nonsre: month.mttr_by_nonsre.length
//       ? month.mttr_by_nonsre.reduce((acc, val) => acc + val, 0) / month.mttr_by_nonsre.length
//       : 0,
//   }));

//   return averageMTTRbyMonth;
// };

// const BarChart = ({ data1 }) => {
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

//         // Assuming data1 is an array of product data
//         const datasets = data1.map((prod, index) => {
//           const color = colors[index % colors.length];
//           const averageMTTR = calculateAverageMTTR(prod.info);

//           return [
//             {
//               label: `${prod.product_name} - Average MTTR by SRE`,
//               data: averageMTTR.map((month) => month.mttr_by_sre),
//               backgroundColor: color,
//               borderColor: color,
//             },
//             {
//               label: `${prod.product_name} - Average MTTR by non-SRE`,
//               data: averageMTTR.map((month) => month.mttr_by_nonsre),
//               backgroundColor: `rgba(${color.match(/\d+/g).join(",")}, 0.5)`, // Semi-transparent color for non-SRE
//               borderColor: color,
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
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;



import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Average MTTR by Month",
      color: "white",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.dataset.label + ": " + tooltipItem.formattedValue;
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
        text: "Average MTTR (hours)",
        color: "white",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 1)",
      },
    },
  },
};
 
// Function to calculate average MTTR for each month
const calculateAverageMTTR = (data, aggregate = false) => {
  const months = new Array(12).fill(null).map(() => ({
    mttr_by_sre: [],
    mttr_by_nonsre: [],
  }));
 
  data.forEach((item) => {
    const date = new Date(item.Date);
    const month = date.getMonth();
    // console.log('monnn',months);
    months[month].mttr_by_sre.push(item.crits.mttr_by_sre);
    months[month].mttr_by_nonsre.push(item.crits.mttr_by_nonsre);
    // console.log('monnn',months);
  });
 
  const averageMTTRbyMonth = months.map((month) => ({
    mttr_by_sre: month.mttr_by_sre.length
      ? month.mttr_by_sre.reduce((acc, val) => acc + val, 0) /
        month.mttr_by_sre.length
      : 0,
    mttr_by_nonsre: month.mttr_by_nonsre.length
      ? month.mttr_by_nonsre.reduce((acc, val) => acc + val, 0) /
        month.mttr_by_nonsre.length
      : 0,
  }));
 
  if (aggregate) {
    const totalSRE = averageMTTRbyMonth.reduce((acc, month) => acc + month.mttr_by_sre, 0);
    const totalNonSRE = averageMTTRbyMonth.reduce((acc, month) => acc + month.mttr_by_nonsre, 0);
    return {
      mttr_by_sre: totalSRE / 12,
      mttr_by_nonsre: totalNonSRE / 12,
    };
  }
 
  return averageMTTRbyMonth;
};
 
const BarChart = ({ data1 }) => {
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
 
        // Check if all products are selected
        const allSelected = data1.length === 7;
 
        let datasets;
 
        if (allSelected) {
          // Aggregate data across all products
          const aggregatedData = data1.flatMap((prod) => prod.info);
          const averageMTTR = calculateAverageMTTR(aggregatedData);
 
          datasets = [
            {
              label: "Average MTTR by SRE",
              data: monthOrder.map((_, i) => averageMTTR[i]?.mttr_by_sre || 0),
              backgroundColor: colors[0],
              borderColor: colors[0],
            },
            {
              label: "Average MTTR by non-SRE",
              data: monthOrder.map((_, i) => averageMTTR[i]?.mttr_by_nonsre || 0),
              backgroundColor: `rgba(${colors[0].match(/\d+/g).join(",")}, 0.5)`, // Semi-transparent color for non-SRE
              borderColor: colors[0],
            },
          ];
        } else {
          // Calculate and display data for each product individually
          datasets = data1
            .map((prod, index) => {
              const color = colors[index % colors.length];
              const averageMTTR = calculateAverageMTTR(prod.info);
 
              return [
                {
                  label: `${prod.product_name} - Average MTTR by SRE`,
                  data: averageMTTR.map((month) => month.mttr_by_sre),
                  backgroundColor: color,
                  borderColor: color,
                },
                {
                  label: `${prod.product_name} - Average MTTR by non-SRE`,
                  data: averageMTTR.map((month) => month.mttr_by_nonsre),
                  backgroundColor: `rgba(${color.match(/\d+/g).join(",")}, 0.5)`, // Semi-transparent color for non-SRE
                  borderColor: color,
                },
              ];
            })
            .flat(); // Use flat() to flatten the nested array into a single array of datasets
        }
 
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
      <Bar data={data} options={options} />
    </div>
  );
};
 
export default BarChart;
