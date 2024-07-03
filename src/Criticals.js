import { useEffect, useState } from "react";
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
import { Line } from "react-chartjs-2";
import axios from "axios";

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
    },
    title: {
      display: true,
      text: "Number of Criticals by Month for Each Product",
    },
  },
};

const countCriticalsPerMonth = (dates, year) => {
  console.log("d", dates.getFullYear);
  console.log('vvv',dates.get)
  const monthCounts = new Array(13).fill(0);
  dates.map((date) => {
    console.log((date+"").substring(0,4));
    if ((date+"").substring(0,4) == year) {
      const month = Number((date+"").substring(5,7));
      monthCounts[month-1]++;
    }
  });
  return monthCounts;
};

const LineChart = () => {
  var count23 = [];
  var count24 = [];
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
        label: "2023 - RealPage Payments",
        data: [],
        borderColor: "rgb(255, 165, 0)", // Orange border color
        backgroundColor: "rgba(255, 165, 0, 0.5)", // Light orange background color
      },
    ],
  });
  //   const [criticsdata, setcriticsdata] = useState({});
  var criticsdata = {};
  const getData = async () => {
    const url = "http://localhost:5000/getCritics";
    try {
      const res = await fetch(url)
        .then((data) => {
          console.log("Api data", data);
          return data.json();
        })
        .then((res) => {
          console.log("ressss", res);
          const arr = res.filter((prod) => {
            return prod.product_name === "LeasingDesk Screening";
          });
          criticsdata = arr;
          console.log("u", criticsdata);
          count23 = countCriticalsPerMonth(criticsdata[0].Dates, 2023);
          count24 = countCriticalsPerMonth(criticsdata[0].Dates, 2024);
          console.log("x", count23);
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
      
          const sortedMonths = monthOrder.map((month) => {
            const date = new Date(Date.parse(`${month} 1, 2023`));
            return date.toLocaleString("default", { month: "short" });
          });
      
          setData({
            labels: sortedMonths,
            datasets: [
              {
                label: "2023 - Onesite",
                data: count23,
                borderColor: "rgb(255, 99, 132)", // Pink border color
                backgroundColor: "rgba(255, 182, 193, 0.5)", // Light pink background color
              },
              {
                label: "2024 - Onesite",
                data: count24,
                borderColor: "rgb(255, 165, 0)", // Orange border color
                backgroundColor: "rgba(255, 165, 0, 0.5)", // Light orange background color
              },
            ],
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("innnnnnnnnnn ", criticsdata);
  }, [criticsdata]);

  useEffect(() => {
    getData();
    console.log("count0", count23);

    
    // const onesiteDates = staticData.find(product => product.product_name === 'onsesite').Dates;
    // const propertywareDates = staticData.find(product => product.product_name === 'propertyware').Dates;
    console.log('bbbb',count23)
    
  }, []);

  return (
    <div style={{ width: "80%", height: "50%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
