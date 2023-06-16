// import './Table.css'
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
// import {api} from './Api'
import {Api} from './Api.js'
import { useState } from "react";

const Table = () => {
  // const [data, setData] = useState(Api)
  const [searchInput, setSearchInput] = useState('');

  // const
  return (
    <div className="bg-[#ddddff] h-[98%] flex flex-col items-start w-full px-2  lg:px-[4rem] py-2 lg:py-8">
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="flex justify-between  items-center w-full ">
          <div className="w-full">
            <h1 className=" text-[24px] text-[#1b1b1b] font-semibold  ">
              Charts
            </h1>
          </div>

          <div className="flex justify-center items-center w-full">
            <h3 className="text-center text-xl font-semibold">
              {" "}
              <Link>Click here for empty click</Link>
            </h3>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className=" relative w-[17rem] px-4   border-2 border-[#a0a0b1] rounded-md h-[2.5rem] ">
            <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}
              type="text"
              className="w-[90%] border-0 bg-transparent outline-none h-full"
            />
            <AiOutlineSearch className=" text-2xl absolute mt-[-28px] ml-[80%]" />
          </div>
        </div>
      </div>
      {/* table  */}
      <div className="bg-white rounded-md w-full h-full  md:h-[28rem]  mt-8 flex flex-col justify-between items-center p-4  ">
        <div className="flex justify-between items-center w-full">
          <h1> History</h1>
          <div className="flex gap-4 ">
            <h4>Show</h4>
            <select className="w-16 h-8 rounded-md" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
            <h4>List</h4>
          </div>
        </div>

        <table className=" hidden md:flex  w-full  flex-col h-auto md:h-screen  mt-4 overflow-scroll">
          <thead className="thead w-full h-16 flex  justify-center items-center bg-[#aaa3ff] rounded-t-md ">
            <tr className="flex w-full ">
              <th className="flex w-16   justify-center items-center">Sr. No.</th>
              <th className="flex w-[19%]  justify-center items-center ">Transaction Code</th>

              <th className="flex w-[19%] justify-center items-center">Name</th>
              <th className="flex w-[19%] justify-center items-center">invest Amount</th>
              <th className="flex w-[19%]  justify-center items-center">Intrest Rate</th>
              <th className="flex w-[19%]  justify-center items-center">Option</th>

            </tr>
          </thead>
          <tbody className="tbody w-full h-16 ">

            {
                Api.filter((d,i)=>{
                  if(d===''){
                    return d;
                  } else{
                    return d.name.toLowerCase().includes(searchInput) || d.amount.includes(searchInput) ;
                  }
                }).map((el,i)=>(
                    <tr key={i} className="flex w-full border-gray-300 border-b-2 h-12 ">
                        <td className="flex w-16   justify-center items-center ">{i}</td>
                        <td className="flex w-[19%] justify-center items-center  ">{el.code}</td>
                        <td className="flex w-[19%]  justify-center items-center ">{el.name}</td>
                        <td className="flex w-[19%] justify-center items-center  ">{el.amount}</td>
                        <td className="flex w-[19%] justify-center items-center  ">{el.intrest}</td>
                        <td className="flex w-[19%] justify-center items-center  ">Option</td>




                        </tr>

                ))
            }
            
          </tbody>
        </table>

        <div className="flex md:hidden mt-8 md:mt-0 w-full flex-col gap-4 overflow-scroll ">
          {
              
                Api.filter((d,i)=>{
                  if(d===''){
                    return d;
                  } else{
                    return d.name.toLowerCase().includes(searchInput) || d.amount.includes(searchInput) ;
                  }
                }).map((p,i)=>(
              <div className="flex w-full justify-between border-2 p-4 rounded-md shadow-md border-red-400">
          
                <div className=" w-full ">
                  <div className="flex justify-between items-center w-full border-b-[1px] mb-4 border-gray-400" >
                    <h1 className="flex justify-start h-auto w-full p-2">SR. No.</h1>
                    <h2  className="flex justify-end h-auto w-full p-2">{p.id}</h2>
                  </div>
                  <div className="flex justify-between w-full border-b-[1px] border-gray-400" >
                    <h1  className="flex justify-start h-auto w-full p-2">Transaction Code</h1>
                    <h2  className=" flex justify-end h-auto w-full p-2">{p.code}</h2>
                  </div>
                  <div className="flex justify-between items-center w-full border-b-[1px] mb-4 border-gray-400" >
                    <h1 className="flex justify-start h-auto w-full p-2">Name</h1>
                    <h2  className="flex justify-end h-auto w-full p-2">{p.name}</h2>
                  </div>
                  <div className="flex justify-between items-center w-full border-b-[1px] mb-4 border-gray-400" >
                    <h1 className="flex justify-start h-auto w-full p-2">Invest Amount</h1>
                    <h2  className="flex justify-end h-auto w-full p-2">{p.amount}</h2>
                  </div>
                  <div className="flex justify-between items-center w-full border-b-[1px] mb-4 border-gray-400" >
                    <h1 className="flex justify-start h-auto w-full p-2">Intrest Rate</h1>
                    <h2  className="flex justify-end h-auto w-full p-2">{p.intrest}</h2>
                  </div>
                  <div className="flex justify-between items-center w-full border-b-[1px] mb-4 border-gray-400" >
                    <h1 className="flex justify-start h-auto w-full p-2">Option</h1>
                    <h2  className="flex justify-end h-auto w-full p-2">{p.id}</h2>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
      
      </div>
    </div>
  );
};

export default Table;
