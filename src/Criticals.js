import { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white", // Customize legend text color
      }
    },
    title: {
      display: true,
      text: "Number of Criticals by Month for Each Product",
      color:'white'
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white", // Customize x-axis labels color
      },
      title: {
        display: true,
        text: "Month",
        color: "white", // Customize x-axis title color
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Customize grid line color for x-axis
        borderColor: "rgba(255, 255, 255, 1)", // Customize border line color for x-axis
      }
    },
    y: {
      ticks: {
        color: "white", // Customize y-axis labels color
      },
      title: {
        display: true,
        text: "Count",
        color: "white", // Customize y-axis title color
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Customize grid line color for x-axis
        borderColor: "rgba(255, 255, 255, 1)", // Customize border line color for x-axis
      }
    },
  },
};

const countCriticalsPerMonth = (dates, year) => {
  console.log('wwwwwww ',year);
  console.log('daaaaaa ',dates);
  const monthCounts = new Array(12).fill(0); 
  dates.forEach((date) => {
    if (new Date(date).getFullYear() === year) {
      const month = new Date(date).getMonth();
      monthCounts[month]++;
    }
  });
  console.log('arra ',monthCounts);
  return monthCounts;
};

const LineChart = ({ data1 }) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "2023 - RealPage Payments",
        data: [],
        borderColor: "rgb(255, 99, 132)", 
        backgroundColor: "rgba(255, 182, 193, 0.5)", 
      },
      {
        label: "2024 - RealPage Payments",
        data: [],
        borderColor: "rgb(255, 165, 0)", 
        backgroundColor: "rgba(255, 165, 0, 0.5)", 
      },
    ],
  });

  useEffect(()=>console.log(data1))
  useEffect(() => {
    const getData = async () => {
      try {
        const criticsdata = data1.info;

        console.log("Fetched data:", criticsdata[0].Date);

        const arr = criticsdata.map(o=>o.Date);
        console.log('arrr ',arr);
        const count23 = countCriticalsPerMonth(arr, 2023);
        const count24 = countCriticalsPerMonth(arr, 2024);

        console.log("Count for 2023:", count23); 
        console.log("Count for 2024:", count24); 

        const monthOrder = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];

        const sortedMonths = monthOrder.map((month) => {
          const date = new Date(Date.parse(`${month} 1, 2023`));
          return date.toLocaleString("default", { month: "short" });
        });

        setData({
          labels: sortedMonths,
          datasets: [
            {
              label: `2023 - ${data1.product_name}`,
              data: count23,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 182, 193, 0.5)",
            },
            {
              label: `2024 - ${data1.product_name}`,
              data: count24,
              borderColor: "rgb(255, 165, 0)",
              backgroundColor: "rgba(255, 165, 0, 0.5)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [data1]);

  return (
    <div style={{ width: "90%"}}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
