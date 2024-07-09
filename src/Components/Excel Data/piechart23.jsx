import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data1 }) => {
  const [chartData, setChartData] = useState({
    labels: ["SRE", "Non-SRE"],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        hoverBackgroundColor: [
          "rgb(54, 162, 235, 0.7)",
          "rgb(255, 99, 132, 0.7)",
        ],
      },
    ],
  });

  useEffect(() => {
    console.log("statisc data ", data1);
    const staticData = data1;

    const filterDataFor2023 = (data) => {
      return data.filter((entry) => {
        const entryDate = new Date(entry.Date);
        return entryDate.getFullYear() === 2023;
      });
    };

    const aggregateCounts = (data) => {
      let sreCount = 0;
      let nonSreCount = 0;

      data.forEach((product) => {
        const sreEntries = filterDataFor2023(product.info.sre);
        const nonSreEntries = filterDataFor2023(product.info.non_sre);
        console.log("daaaaaaaaaaaaa", " ", sreEntries, " ", nonSreEntries);
        sreEntries.map((o) => {
          if (o.solvedBy === "SRE") sreCount++;
          else nonSreCount++;
        });
        nonSreEntries.map((o) => {
          if (o.solvedBy === "SRE") sreCount++;
          else nonSreCount++;
        });
      });
      return [sreCount, nonSreCount];
    };

    const [sreCount, nonSreCount] = aggregateCounts(staticData);

    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        {
          ...prevData.datasets[0],
          data: [sreCount, nonSreCount],
        },
      ],
    }));
  }, []);

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      {/* <h3>Issues Solved by SRE vs Non-SRE</h3> */}
      <Pie
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  const total = tooltipItem.dataset.data.reduce(
                    (acc, value) => acc + value,
                    0
                  );
                  const value = tooltipItem.raw;
                  const percentage = ((value / total) * 100).toFixed(2);
                  return `${tooltipItem.label}: ${value} (${percentage}%)`;
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
