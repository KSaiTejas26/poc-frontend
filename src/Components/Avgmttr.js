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

const GroupedBarChart = ({data1}) => {
    const critsbysre=()=>{
        const totalduration=new Array(12).fill(0)
        const totalcrits=new Array(12).fill(0)
        const avgcrits=new Array(12).fill(0)
        data1.map((prod)=>{
          prod.info.map((ele)=>{
            const month = new Date(ele.Date).getMonth();
            totalduration[month]+=ele.crits.mttr_by_sre;
            totalcrits[month]+=ele.crits.crits_by_sre;
          })
        })
        for(let i=0;i<12;i++)
        {
            if(totalcrits[i]!=0)
            {
                avgcrits[i]=totalduration[i]/totalcrits[i];
            }
        }
        return avgcrits;
     }
     const critsbynonsre=()=>{
        const totalduration=new Array(12).fill(0)
        const totalcrits=new Array(12).fill(0)
        const avgcrits=new Array(12).fill(0)
        data1.map((prod)=>{
          prod.info.map((ele)=>{
            const month = new Date(ele.Date).getMonth();
            totalduration[month]+=ele.crits.mttr_by_nonsre;
            totalcrits[month]+=ele.crits.crits_by_nonsre;
          })
        })
        for(let i=0;i<12;i++)
        {
            if(totalcrits[i]!=0)
            {
                avgcrits[i]=totalduration[i]/totalcrits[i];
            }
        }
        return avgcrits;
    }
  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'SRE',
        data: critsbysre(),
        backgroundColor: '#ff6384'
      },
      {
        label: 'NonSRE',
        data: critsbynonsre(),
        backgroundColor: '#36a2eb'
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
        text: "MTTR",
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
          text: "Average MTTR",
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

export default GroupedBarChart;
