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
    },
    title: {
      display: true,
      text: "Number of Criticals by Month for Each Product",
    },
  },
};

const countCriticalsPerMonth = (dates, year) => {
  console.log('wwwwwww ',year)
  console.log('daaaaaa ',dates);
  const monthCounts = new Array(12).fill(0); // Changed to 12 because there are 12 months in a year
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
        borderColor: "rgb(255, 99, 132)", // Pink border color
        backgroundColor: "rgba(255, 182, 193, 0.5)", // Light pink background color
      },
      {
        label: "2024 - RealPage Payments",
        data: [],
        borderColor: "rgb(255, 165, 0)", // Orange border color
        backgroundColor: "rgba(255, 165, 0, 0.5)", // Light orange background color
      },
    ],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `http://localhost:5000/getCritics/${data1}`;
        const res = await axios.get(url);
        const criticsdata = res.data;

        console.log("Fetched data:", criticsdata); // Debug: Check fetched data

        const count23 = countCriticalsPerMonth(criticsdata[0].Dates, 2023);
        const count24 = countCriticalsPerMonth(criticsdata[0].Dates, 2024);

        console.log("Count for 2023:", count23); // Debug: Check count23
        console.log("Count for 2024:", count24); // Debug: Check count24

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
              label: "2023 - RealPage Payments",
              data: count23,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 182, 193, 0.5)",
            },
            {
              label: "2024 - RealPage Payments",
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
    <div style={{ width: "80%", height: "50%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
