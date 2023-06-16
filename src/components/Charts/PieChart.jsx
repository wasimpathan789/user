import React, { useState } from 'react'
import {Bar, Pie} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

import { Chart } from "react-google-charts";

export const data = [
  ["", "Hours per Day"],
  ["", 11],
  ["", 20],
  ["", 20],
  ["", 20]

];

export const options = {
  title: "My Daily Activities",
};

const PieChart = ({chartData}) => {
    
  return (
    <div className=''>
         <Chart className='rounded-md bg-red-300'
      chartType="PieChart"
      data={data}
      
      width={"100%"}
      height={"300px"}

    />

      
    </div>
  )
}

export default PieChart
