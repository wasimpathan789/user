import React from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import frame from '../assets/frame.png'
import Loan from './Loan'
import rect from '../assets/rect.png'
import yellow from '../assets/yellow.png'
import white from '../assets/white.png'
import { Link } from 'react-router-dom'



const Dashboard = () => {
  return (
    <div className='bg-[#ddddff] w-full h-auto px-2  lg:px-[4rem] py-2 lg:py-8'>
        {/* <Navbar/> */}
        <h1 className=' text-[24px] text-[#1b1b1b] font-semibold  '>User overview</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
        <ProductCard title={"Overall"} title1={" Porgress"} titlePercentage={"120%"} image={yellow} progressPercentage={90}  />
        <ProductCard  title={"Product"} title1={" Analytic"}  titlePercentage={"120%"} image={white} progressPercentage={90}  />
        <ProductCard  title={"User"} title1={" Analytic"} titlePercentage={"120%"} image={rect} progressPercentage={90}  />

        </div>
        <div className=' mt-12'>
            <h1 className=' text-[24px] text-[#1b1b1b] font-semibold  '>Loan</h1>
            <Loan/>
        </div>
        
        <div className=' bg-transparent rounded-md  lg:bg-white h-auto w-full p-2 lg:p-12 mt-12'>
            <div className='flex flex-col sm:flex-row gap-8 items-start'>
                <div className='w-full sm:w-[30%] h-full'>
                    <img className=' rounded-md w-full h-[400px] sm:h-[250px]' src={frame} alt="" />
                </div>
                <div className='w-full sm:w-[70%]'>
                    <h1 className='font-semibold text-2xl animate-slideRight '>Lorem Headline</h1>
                    <p className='text-xl  font-normal text-[#222222] transition-all  animate-slideRight  mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi. Nam neque eius ad modi, fugiat enim tempora laboriosam in sit amet consectetur adipisicing elit. Nemo, sequi. Nam neque eius ad modi, fugiat enim tempora laboriosam in..</p>
                </div>

            </div>
            <div className='flex flex-col sm:flex-row gap-8 items-start mt-12'>
            <div className='w-full sm:w-[70%]'>
                    <h1 className='font-semibold text-2xl animate-slideLeft '>Lorem Headline</h1>
                    <p className='text-xl  font-normal text-[#222222] animate-slideLeft mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi. Nam neque eius ad modi, fugiat enim tempora laboriosam in sit amet consectetur adipisicing elit. Nemo, sequi. Nam neque eius ad modi, fugiat enim tempora laboriosam in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi. Nam neque eius ad modi, fugiat enim tempora laboriosam in sit amet consectetur adipisicing elit. Nemo, sequi. Nam neque eius ad modi, fugiat enim tempora laboriosam in. .</p>
                </div>
                <div className='w-full sm:w-[30%] h-full'>
                    <img className=' rounded-md w-full h-[400px] sm:h-[250px]' src={frame} alt="" />
                </div>
                   {/* <img className=' rounded-md w-[800px] h-[200px]' src={frame} alt="" /> */}

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12'>
            <img className=' rounded-md w-full   h-[250px]' src={frame} alt="" />

            <img className=' rounded-md w-full  h-[250px]' src={frame} alt="" />
            <img className=' rounded-md w-full   h-[250px]' src={frame} alt="" />
            <img className=' rounded-md w-full  h-[250px]' src={frame} alt="" />


            </div>
        </div>

       

      
    </div>
  )
}

export default Dashboard
