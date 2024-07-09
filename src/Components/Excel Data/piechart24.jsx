import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data1}) => {
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
    // Static data based on the schema provided
    // const staticData = [
    //   {
    //     product_name: "RealPage Exchange",
    //     info: {
    //       sre: [
    //         {
    //           ticket: "1",
    //           impact_duration: 2,
    //           root_cause_code: "A",
    //           Date: "2023-03-01",
    //           Resolution_owner: "Owner1",
    //           Business_unit: "Unit1",
    //           solvedBy: "Non-SRE",
    //         },
    //         {
    //           ticket: "2",
    //           impact_duration: 3,
    //           root_cause_code: "B",
    //           Date: "2023-05-01",
    //           Resolution_owner: "Owner2",
    //           Business_unit: "Unit1",
    //           solvedBy: "SRE",
    //         },
    //       ],
    //       non_sre: [
    //         {
    //           ticket: "3",
    //           impact_duration: 1,
    //           root_cause_code: "C",
    //           Date: "2023-06-01",
    //           Resolution_owner: "Owner3",
    //           Business_unit: "Unit2",
    //           solvedBy: "SRE",
    //         },
    //       ],
    //     },
    //   },
    //   {
    //     product_name: "On-Site",
    //     info: {
    //       sre: [
    //         {
    //           ticket: "4",
    //           impact_duration: 5,
    //           root_cause_code: "D",
    //           Date: "2023-07-01",
    //           Resolution_owner: "Owner4",
    //           Business_unit: "Unit3",
    //           solvedBy: "SRE",
    //         },
    //       ],
    //       non_sre: [
    //         {
    //           ticket: "5",
    //           impact_duration: 4,
    //           root_cause_code: "E",
    //           Date: "2023-08-01",
    //           Resolution_owner: "Owner5",
    //           Business_unit: "Unit4",
    //           solvedBy: "SRE",
    //         },
    //         {
    //           ticket: "6",
    //           impact_duration: 2,
    //           root_cause_code: "F",
    //           Date: "2023-09-01",
    //           Resolution_owner: "Owner6",
    //           Business_unit: "Unit5",
    //           solvedBy: "Non-SRE",
    //         },
    //       ],
    //     },
    //   },
    //   // Add more static products as needed
    // ];
    console.log('statisc data ',data1);
    const staticData = data1;
    


    const filterDataFor2023 = (data) => {
      return data.filter((entry) => {
        const entryDate = new Date(entry.Date);
        return entryDate.getFullYear() === 2024;
      });
    };

    const aggregateCounts = (data) => {
      let sreCount = 0;
      let nonSreCount = 0;

      data.forEach((product) => {
        const sreEntries = filterDataFor2023(product.info.sre);
        const nonSreEntries = filterDataFor2023(product.info.non_sre);
        console.log("daaaaaaaaaaaaa" , " " , sreEntries , " " , nonSreEntries);
        sreEntries.map((o)=>{
          if(o.solvedBy==='SRE') sreCount++;
          else nonSreCount++;
        })
        nonSreEntries.map((o)=>{
          if(o.solvedBy==='SRE') sreCount++;
          else nonSreCount++;
        })
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
