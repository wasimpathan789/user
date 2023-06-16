import React from "react";
// import PersonIcon from '@mui/icons-material/Person';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import vector from '../assets/vector.png'
import vector2 from '../assets/vector2.png'


// AiFillCreditCard

const Loan = () => {
  return (
    <div className="bg-[#AAA3FF]  md:relative w-full h-56 rounded-2xl mt-4 grid grid-cols-1 md:grid-cols-3 py-2  ">
      <div className="first border-[#FFFFFF] border-r-[1px] flex justify-center items-center flex-col">
        <FaBeer className="h-12 w-12 text-white" />
        <h3 className="text-white text-xl mt-2 ">SME Loan</h3>
      </div>
      <div className="middle border-[#FFFFFF] border-r-[1px] flex justify-center items-center flex-col">
        <FaBeer className="h-12 w-12 text-white" />
        <h3 className="text-white text-xl mt-2 ">Local Purchase</h3>
        <h4 className="text-white text-xl mt-2 ">Order</h4>

        <button className="bg-white px-8 py-2 rounded-md mt-4 text-[#292D32]">
          Apply
        </button>
      </div>
      <div className="last border-[#FFFFFF]  flex justify-center items-center flex-col">
        <FaBeer className="h-12 w-12 text-white" />
        <h3 className="text-white text-xl mt-2 ">SME Loan</h3>
      </div>
      <div className="overlay absolute flex justify-between  "> 
      <div>
        <img src={vector} alt="" />
      </div>
      <div className="flex">
        {/* <img src="" alt="" /> */}

      </div>
      <div>
        <img src={vector2} alt="" />
      </div>
      
      </div> 
    </div>
  );
};

export default Loan;
