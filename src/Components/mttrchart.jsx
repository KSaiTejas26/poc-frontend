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
            text: "Infra Health by Month for Each Product",
            color: "white"
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
                text: "Infra Health Percentage",
                color: "white", // Customize y-axis title color
            },
            grid: {
                color: "rgba(255, 255, 255, 0.2)", // Customize grid line color for x-axis
                borderColor: "rgba(255, 255, 255, 1)", // Customize border line color for x-axis
            }
        },
    },
};
 
const checkinfra = (info) => {
    const monthInfra = new Array(12).fill(0);
    const recInfra = new Array(12).fill(0);
 
    info.forEach((val) => {
        const month = new Date(val.Date).getMonth();
        console.log(month);
        const dd = new Date(val.Date).getUTCDate();
        console.log("DAtew",dd);
        console.log("datessss",recInfra);
        if (recInfra[month] < dd) {
           
            recInfra[month]=dd;
            monthInfra[month] = (val.infra_health_coverage / val.number_of_servers) * 100;
        }
    });
    return monthInfra;
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
    return monthavg;
};
 
const MttrChart = ({ data1 }) => {
    const [data, setData] = useState({
        labels: [],
        datasets: []
    });
 
    useEffect(() => {
        const getData = async () => {
            try {
                // const url = `http://localhost:5000/getCritics/${data1}`;
                // const res = await axios.get(url);
 
            //     const arr = [{
            //         _id: "668ba2e68566a61519ca98f1",
            //         product_name: "ClickPay",
            //         info: [{
            //             crits: {
            //                 total_crits: 40,
            //                 crits_by_sre: 25,
            //                 mttr_by_sre: 12,
            //                 crits_by_nonsre: 15,
            //                 mttr_by_nonsre: 23
            //             },
            //             scom_alerts: {
            //                 total_critical: 100,
            //                 total_warnings: 23
            //             },
            //             _id: "668bb0c167c9ba644e39a60f",
            //             Date: "2002-11-05T00:00:00.000Z",
            //             number_of_servers: 100,
            //             infra_health_coverage: 25,
            //             web_health_coverage: 30
            //         },
            //         {
            //             crits: {
            //                 total_crits: 40,
            //                 crits_by_sre: 25,
            //                 mttr_by_sre: 12,
            //                 crits_by_nonsre: 15,
            //                 mttr_by_nonsre: 23
            //             },
            //             scom_alerts: {
            //                 total_critical: 100,
            //                 total_warnings: 23
            //             },
            //             _id: "668bb0c167c9ba644e39a60f",
            //             Date: "2002-11-07T00:00:00.000Z",
            //             number_of_servers: 100,
            //             infra_health_coverage: 75,
            //             web_health_coverage: 30
            //         }]
            //     }, {
            //         _id: "668ba2e68566a61519ca98f1",
            //         product_name: "PropertyWare",
            //         info: [{
            //             crits: {
            //                 total_crits: 40,
            //                 crits_by_sre: 25,
            //                 mttr_by_sre: 12,
            //                 crits_by_nonsre: 15,
            //                 mttr_by_nonsre: 23
            //             },
            //             scom_alerts: {
            //                 total_critical: 100,
            //                 total_warnings: 23
            //             },
            //             _id: "668bb0c167c9ba644e39a60f",
            //             Date: "2002-12-09T00:00:00.000Z",
            //             number_of_servers: 100,
            //             infra_health_coverage: 50,
            //             web_health_coverage: 30
            //         }]
            //     },{
            //         _id: "668ba2e68566a61519ca98f1",
            //         product_name: "YieldStar",
            //         info: [{
            //             crits: {
            //                 total_crits: 40,
            //                 crits_by_sre: 25,
            //                 mttr_by_sre: 12,
            //                 crits_by_nonsre: 15,
            //                 mttr_by_nonsre: 23
            //             },
            //             scom_alerts: {
            //                 total_critical: 100,
            //                 total_warnings: 23
            //             },
            //             _id: "668bb0c167c9ba644e39a60f",
            //             Date: "2002-05-09T00:00:00.000Z",
            //             number_of_servers: 100,
            //             infra_health_coverage: 50,
            //             web_health_coverage: 30
            //         }]
            //     },
            //     {
            //         _id: "668ba2e68566a61519ca98f1",
            //         product_name: "On-Site",
            //         info: [{
            //             crits: {
            //                 total_crits: 40,
            //                 crits_by_sre: 25,
            //                 mttr_by_sre: 12,
            //                 crits_by_nonsre: 15,
            //                 mttr_by_nonsre: 23
            //             },
            //             scom_alerts: {
            //                 total_critical: 100,
            //                 total_warnings: 23
            //             },
            //             _id: "668bb0c167c9ba644e39a60f",
            //             Date: "2002-09-09T00:00:00.000Z",
            //             number_of_servers: 100,
            //             infra_health_coverage: 60,
            //             web_health_coverage: 30
            //         },
            //         {
            //             crits: {
            //                 total_crits: 40,
            //                 crits_by_sre: 25,
            //                 mttr_by_sre: 12,
            //                 crits_by_nonsre: 15,
            //                 mttr_by_nonsre: 23
            //             },
            //             scom_alerts: {
            //                 total_critical: 100,
            //                 total_warnings: 23
            //             },
            //             _id: "668bb0c167c9ba644e39a60f",
            //             Date: "2002-09-11T00:00:00.000Z",
            //             number_of_servers: 100,
            //             infra_health_coverage: 40,
            //             web_health_coverage: 30
            //         }]
            //     }
            // ];
            const arr = data1;
 
                const monthOrder = [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
 
                const sortedMonths = monthOrder.map((month) => {
                    const date = new Date(Date.parse(`${month} 1, 2023`));
                    return date.toLocaleString("default", { month: "short" });
                });
 
                const colors = [
                    "rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(75, 192, 192)",
                    "rgb(153, 102, 255)", "rgb(255, 159, 64)", "rgb(255, 205, 86)"
                ];
 
                const datasets = arr.map((prod, index) => {
                    const color = colors[index % colors.length];
                    return {
                        label: `${prod.product_name}`,
                        data: checkinfra(prod.info),
                        borderColor: color,
                        backgroundColor: `${color}33` // Add transparency
                    };
                });
                console.log(datasets);
                setData({
                    labels: sortedMonths,
                    datasets: datasets
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
 
        getData();
    }, [data1]);
 
    useEffect(()=>console.log('in mttr data',data1),[data1]);
    return (
        <div style={{ width: "90%" }}>
            <Line data={data} options={options} />
        </div>
    );
};
 
export default MttrChart;
 