import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {UserData} from '../Data'
import { Bar,Pie } from 'react-chartjs-2'
import BarChart from './BarChart'
import PieChart from './PieChart'
import ProgressBar from "@ramonak/react-progress-bar"

const Charts = () => {
  const [userData, setUserData] = useState({
    labels:UserData.map((data)=>data.month),
    datasets:[
      {
        label: "Delhi Users",
        data:UserData.map((data2)=>data2.delhiUsers),
        backgroundColor: "#aaa3ff"
       

      },
      {
        label: "Bihar Users",
        data:UserData.map((data2)=>data2.biharUsers),
        backgroundColor: "##262626"

      }
    ]
    // datasets:[ 1000,2500,5000,10000]
  
  })
  return (
    <div className='bg-[#ddddff] w-full h-full px-4  lg:px-[4rem] py-8'>
      <div className='flex justify-start items-center '>
      <h1 className=' text-[24px] text-[#1b1b1b] font-semibold  '>Charts</h1>
      <div className='flex justify-center items-center w-full'>
      <h3 className='text-center text-xl font-semibold'> <Link>Click here for empty click</Link></h3>

      </div>
      </div>
      <div className='class-container flex flex-col lg:flex-row justify-start items-start gap-4'>
        <div className='left  h-screen w-full lg:w-[70%] '>
          <div className='bg-white h-auto w-full p-8 rounded-md mt-4 '>
            <h1 className='text-xl font-semibold'>Total User joined</h1>
          <BarChart style={{width:"100px", height: "1000px"}}  chartData={userData}/>

          </div>
          <div className='bg-white h-auto w-full p-4  lg:p-8 rounded-md mt-4 '>
          <h1 className='text-xl font-semibold '>Demography</h1>

          <div className='flex gap-4 justify-start items-center mt-8 '>
            <h2 className='text-lg'> Delhi</h2>
            <ProgressBar className='w-1/2' completed="60" bgColor="#aaa3ff"/>
            <h3 className='text-lg'>53%</h3>
          </div>
          <div className='flex gap-4 justify-start items-center mt-8 '>
            <h2 className='text-lg'> Bihar</h2>
            <ProgressBar className='w-1/2' completed="31" bgColor="#2c2c2c"/>
            <h3 className='text-lg'>31%</h3>
          </div>

          </div>

        </div>
        <div className='right w-full  lg:w-[29%] mt-4'>
          <div className='bg-white w-[100%] py-4 px-6 h-auto  rounded-md'>
            <div className='bg-[#aaa3ff] p-4  rounded-md '>
              <h1 className='font-bold text-4xl '>354</h1>
              <h2 className='font-semibold text-[1.4rem] w-full '>Total user count</h2>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <div className='border-r-2 w-[50%] border-r-blue-500'>
                <h1 className='font-bold text-2xl '>20</h1>
                <h3 className='font-[500] text-xl '>New Users</h3>
              </div>
              <div className=' w-[50%] pl-4'>
                <h1 className='font-bold text-2xl '>20</h1>
                <h3 className='font-[500] text-xl '>New Users</h3>
              </div>
            </div>
          </div>

          <div className='mt-4 rounded-md bg-white'>
            <PieChart/>
            <div className='flex w-full  p-4 justify-evenly items-center '>
              <div className='flex gap-4 items-center'>
                <div className='w-8 h-8 bg-gray-500 text-transparent'>
                  .
                </div>
                <h1>00</h1>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-8 h-8 bg-gray-500 text-transparent'>
                  .
                </div>
                <h1>00</h1>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-8 h-8 bg-gray-500 text-transparent'>
                  .
                </div>
                <h1>00</h1>
              </div>
              <div className='flex gap-4 items-center'>
                <div className='w-8 h-8 bg-gray-500 text-transparent'>
                  .
                </div>
                <h1>00</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Charts
