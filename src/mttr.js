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
            text: "Average MTTR by Month for Each Product",
            color:"white"
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
            text: "Average MTTR",
            color: "white", // Customize y-axis title color
          },
          grid: {
            color: "rgba(255, 255, 255, 0.2)", // Customize grid line color for x-axis
            borderColor: "rgba(255, 255, 255, 1)", // Customize border line color for x-axis
          }
        },
      },
};

const countCriticalsPerMonth = (info, year) => {

    const monthCounts = new Array(12).fill(0); 
    const monthsum = new Array(12).fill(0); 
    const monthavg = new Array(12).fill(0); 
    info.forEach((val) => {
        if (new Date(val.Date).getFullYear() === year) {
            const month = new Date(val.Date).getMonth();
            monthCounts[month]++;
            monthsum[month] = monthsum[month] + val.impact_duration;
        }
    });
    for (let i = 0; i < 12; i++) {
        if (monthCounts[i] != 0) {

            monthavg[i] = monthsum[i] / monthCounts[i];
        }
    }

    console.log('arra ', monthCounts);
    return monthavg;
};

const MttrChart = ({ data1 }) => {
    console.log("datatata", data1);
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: `2023 -${data1.product_name}`,
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

    useEffect(() => {
        const getData = async () => {
            try {
                // const url = `http://localhost:5000/getCritics/${data1}`;
                // const res = await axios.get(url);


                //console.log("Fetched data:", criticsdata); 


                const count23 = countCriticalsPerMonth(data1.info, 2023);
                const count24 = countCriticalsPerMonth(data1.info, 2024);

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
        <div style={{ width: "90%" }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default MttrChart;