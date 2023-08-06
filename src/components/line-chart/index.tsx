import React from "react";
import { Line } from "react-chartjs-2";
// @ts-ignore
import faker from 'faker';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Group 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: '#FFCC21',
    },
    {
      label: 'Group 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: '#8FE9D0',
    },
  ],
};
const LineChart = () => {
  return <Line options={options} data={data}/>
}

export default LineChart;