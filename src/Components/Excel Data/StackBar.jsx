import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
const GroupedStackedBarChart = ({data1}) => {
    // const arr=[
    //     {
    //         product_name: "Spend Management (OpsInsight)",
    //         info: {
    //             sre: [
    //                 {
    //                     ticket: "000041602",
    //                     impact_duration: 87,
    //                     root_cause_code: "Vendor Outage",
    //                     Date: "2023-05-17T18:30:00.000Z",
    //                     Resolution_owner: "Linux Engineers",
    //                     Business_unit: "Spend Management",
    //                     solvedBy: "SRE",
    //                     _id: "668d01f0a03b9fa46c9b7b0f"
    //                 }
    //             ],
    //             non_sre: [
    //                 {
    //                     ticket: "000041603",
    //                     impact_duration: 1358,
    //                     root_cause_code: "Product Process",
    //                     Date: "2023-05-19T18:30:00.000Z",
    //                     Resolution_owner: "Client",
    //                     Business_unit: "Spend Management",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f0a03b9fa46c9b7b13"
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         product_name: "Velocity",
    //         info: {
    //             sre: [
    //                 {
    //                     ticket: "000041605",
    //                     impact_duration: 68,
    //                     root_cause_code: "Product Process",
    //                     Date: "2024-05-21T18:30:00.000Z",
    //                     Resolution_owner: "Product Team - Spend & Utility",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "SRE",
    //                     _id: "668d01f0a03b9fa46c9b7b17"
    //                 }
    //             ],
    //             non_sre: [
    //                 {
    //                     ticket: "000041605",
    //                     impact_duration: 68,
    //                     root_cause_code: "Product Process",
    //                     Date: "2023-05-21T18:30:00.000Z",
    //                     Resolution_owner: "Product Team - Spend & Utility",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f0a03b9fa46c9b7b17"
    //                 },
    //                 {
    //                     ticket: "000041605",
    //                     impact_duration: 68,
    //                     root_cause_code: "Product Process",
    //                     Date: "2024-05-21T18:30:00.000Z",
    //                     Resolution_owner: "Product Team - Spend & Utility",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f0a03b9fa46c9b7b17"
    //                 },
    //                 {
    //                     ticket: "000041607",
    //                     impact_duration: 75,
    //                     root_cause_code: "Application Health - Application Software Failures",
    //                     Date: "2023-05-21T18:30:00.000Z",
    //                     Resolution_owner: "Microsoft DBA",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f0a03b9fa46c9b7b1b"
    //                 },
    //                 {
    //                     ticket: "000041608",
    //                     impact_duration: 407,
    //                     root_cause_code: "Vendor Outage",
    //                     Date: "2023-05-22T18:30:00.000Z",
    //                     Resolution_owner: "Network Services",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f0a03b9fa46c9b7b20"
    //                 },
    //                 {
    //                     ticket: "000041609",
    //                     impact_duration: 556,
    //                     root_cause_code: "Change - Infrastructure Release",
    //                     Date: "2023-05-22T18:30:00.000Z",
    //                     Resolution_owner: "NOC",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f0a03b9fa46c9b7b26"
    //                 },
    //                 {
    //                     ticket: "000041612",
    //                     impact_duration: 530,
    //                     root_cause_code: "Change - Infrastructure Release",
    //                     Date: "2023-05-22T18:30:00.000Z",
    //                     Resolution_owner: "Microsoft DBA",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f0a03b9fa46c9b7b2d"
    //                 },
    //                 {
    //                     ticket: "000041613",
    //                     impact_duration: 41,
    //                     root_cause_code: "Infrastructure Health - Capacity Management",
    //                     Date: "2023-05-22T18:30:00.000Z",
    //                     Resolution_owner: "Microsoft DBA",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f1a03b9fa46c9b7b35"
    //                 },
    //                 {
    //                     ticket: "000041618",
    //                     impact_duration: 1,
    //                     root_cause_code: "Infrastructure Health - Network Connectivity",
    //                     Date: "2023-05-24T18:30:00.000Z",
    //                     Resolution_owner: "Product Owner",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f1a03b9fa46c9b7b3e"
    //                 },
    //                 {
    //                     ticket: "000041621",
    //                     impact_duration: 60,
    //                     root_cause_code: "Infrastructure Health - Capacity Management",
    //                     Date: "2023-05-25T18:30:00.000Z",
    //                     Resolution_owner: "NOC",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f1a03b9fa46c9b7b48"
    //                 },
    //                 {
    //                     ticket: "000041622",
    //                     impact_duration: 75,
    //                     root_cause_code: "Change - Code Release",
    //                     Date: "2023-05-25T18:30:00.000Z",
    //                     Resolution_owner: "Engineering – Smart Building Solutions",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f1a03b9fa46c9b7b53"
    //                 },
    //                 {
    //                     ticket: "000041623",
    //                     impact_duration: 208,
    //                     root_cause_code: "Change - Infrastructure Release",
    //                     Date: "2023-05-26T18:30:00.000Z",
    //                     Resolution_owner: "Network Services",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f1a03b9fa46c9b7b5f"
    //                 },
    //                 {
    //                     ticket: "000041624",
    //                     impact_duration: 137,
    //                     root_cause_code: "Change - Infrastructure Release",
    //                     Date: "2023-05-29T18:30:00.000Z",
    //                     Resolution_owner: "Microsoft DBA",
    //                     Business_unit: "RUM Core",
    //                     solvedBy: "non-sre",
    //                     _id: "668d01f1a03b9fa46c9b7b6c"
    //                 }
    //             ]
    //         }
    //     }
    // ]

    const arr = data1
    const popsre=(year)=>{
        const sre = new Array(12).fill(0);
        arr.map((prod)=>{
            prod.info.sre.map((ele)=>{
                if(new Date(ele.Date).getFullYear()==year)
                {
                    const month = new Date(ele.Date).getMonth();
                    sre[month]++;
 
                }
               
            })
        })
        return sre;
    }
    const popnonsre=(year)=>{
        const nonsre = new Array(12).fill(0);
        arr.map((prod)=>{
            prod.info.non_sre.map((ele)=>{
                if(new Date(ele.Date).getFullYear()==year)
                {
                    const month = new Date(ele.Date).getMonth();
                    nonsre[month]++;
 
                }
               
            })
        })
        return nonsre;
    }
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'SRE - 2023',
        data: popsre(2023),
        backgroundColor: '#ff6384',
        stack: 'Group 1'
      },
      {
        label: 'NON SRE - 2023',
        data: popnonsre(2023),
        backgroundColor: '#36a2eb',
        stack: 'Group 1'
      },
      {
        label: 'SRE - 2024',
        data: popsre(2024),
        backgroundColor: '#ffcd56',
        stack: 'Group 2'
      },
      {
        label: 'NON SRE - 2024',
        data: popnonsre(2024),
        backgroundColor: '#4bc0c0',
        stack: 'Group 2'
      }
    ]
  };
 
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
 
  return <Bar data={data} options={options} />;
};
 
export default GroupedStackedBarChart;