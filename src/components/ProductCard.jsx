import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

{/* <div  style={{backgroundColor: `${image}`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} */}

const ProductCard = ({title,title1,titlePercentage,progressPercentage,image}) => {
  return (
    <div  style={{backgroundImage: `url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:'100%'}}  className=' drop-shadow-lg rounded-[15px] py-8  pr-16  px-8 h-auto w-full'>
        <div className='top flex gap-4 justify-between items-center '>
            <div>
            <h1 className='text-[1.6rem] break-keep font-semibold '>{title}</h1>
            <h1 className='text-[1.6rem] break-keep font-semibold '>{title1}</h1>
            </div>
         

            <div className='h-[80px] w-[80px] rounded-3xl border-[#292D32] border-[1.8px] flex justify-center items-center '>
                <h1 className='font-semibold'>{titlePercentage}</h1>
            </div>
          

        </div>
        <div className='bottom mt-12 '>
            <div className='flex justify-between items-center'>
            <div className='flex gap-2 justify-start items-center'> <span className='bg-[#5252B0] h-2 w-2 rounded-full'></span> <h2>Inprogress</h2></div>
            <div>
                <h4>{progressPercentage}%</h4>
            </div>

            </div>
            <div className='mt-4 h-4'>
            <ProgressBar className=' ' completed={progressPercentage} maxCompleted={100} />
            </div>
            

        </div>

    </div>
  )
}

export default ProductCard
