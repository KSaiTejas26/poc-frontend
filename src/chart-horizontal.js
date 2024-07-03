import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const Horizontalchart = () => {
  const [data, setData] = useState({
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:5000/getdata';
      const labelSet = [];
      const dataSet1 = [];
      const dataSet2 = [];
      const dataSet3 = [];
      const monthOrder = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      await fetch(url)
        .then((data) => {
          console.log('Api data', data);
          return data.json();
        })
        .then((res) => {
          console.log('ressss', res);

          // Sort the response based on month
          res.sort((a, b) => monthOrder.indexOf(a.Month) - monthOrder.indexOf(b.Month));

          for (const val of res) {
            dataSet1.push(val.NumberOfRecovered);
            dataSet2.push(val.NumberOfDeaths);
            dataSet3.push(val.NumberOfNewCases);
            labelSet.push(val.Month);
          }

          setData({
            labels: labelSet,
            datasets: [
              {
                label: 'NumberOfRecovered',
                data: dataSet1,
                borderColor: 'rgb(255, 99, 132)', // Pink border color
                backgroundColor: 'rgba(255, 182, 193, 0.5)', // Light pink background color
              },
              {
                label: 'NumberOfDeaths',
                data: dataSet2,
                borderColor: 'rgb(53, 162, 235)', // Blue border color
                backgroundColor: 'rgba(53, 162, 235, 0.5)', // Light blue background color
              },
              {
                label: 'NumberOfNewCases',
                data: dataSet3,
                borderColor: 'rgb(255, 165, 0)', // Orange border color
                backgroundColor: 'rgba(255, 165, 0, 0.5)', // Light orange background color
              },
            ],
          });

          console.log('arrData', dataSet1, dataSet2);
        })
        .catch((e) => {
          console.log('error', e);
        });
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '80%', height: '50%' }}>
      {console.log('dataaaaaaaa', data)}
      <Bar data={data} options={options} />
    </div>
  );
};

export default Horizontalchart;
