import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/Ri";
import { MdOutlineClose } from "react-icons/Md";
import './Navbar.css'



// RiMenu3Fill

const Navbar = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [user, setUser] = useState(false)
  const [gender, setGender] = useState(false)
  const [close, setClose] = useState(false);


  const [open, setOpen] = useState(false);

  const hamburgerHandler = () => {
    setOpen(!open);
  }
  const popUpHandler = () => {
    setClose(!close)


  }
  const userHandler = () => {
    setUser(!user);
  }
  return (
    <nav className="navbar ">

      <div className="logo">
        <h1 className=" text-white text-[20px] font-semibold uppercase ">Logo icon</h1>
      </div>
      
      <ul className={open ? "navLinks" : "navLinks active"}>
          <li className=" font-normal"><Link to={"dashboard"} className="text-white font-semibold text-lg ml-4 ">
           
           Dashboard
         </Link></li>
         <div onClick={popUpHandler} className=" userContainer text-white  font-semibold text-lg ml-4 ">
          User
          <div className={close ? 'bg-purple-300 w-40 relative md:absolute lg:absolute ml-2 md:ml-[-40px] mt-4 z-10 border-[1px] border-gray-400 flex flex-col justify-center items-center rounded-md ' : ' hidden'}>
            <Link to={"table"} className=' border-gray-400 border-b-[1px] rounded-t-md text-lg  w-full h-12 flex items-center justify-center bg-white text-center font-thin text-black'>User Table</Link>
            <Link to={'user'} className='  w-full h-12 flex items-center justify-center font-thin rounded-b-md text-lg  bg-white text-center text-black'>Create User</Link>
        </div>
         </div>
         {/* <li><Link to={"user"} className="text-white font-semibold text-lg ml-4 ">
           
           User
         </Link></li> */}
         <li><Link to={"charts"} className="text-white font-semibold text-lg ml-4 ">
           
           Chart
         </Link></li>
       
      
         
        </ul>
    
     
      <div className=" xs:block min-[680px]:hidden  " onClick={hamburgerHandler}>
        {open ?   <MdOutlineClose  style={{fontSize: "30px",color:"white"}}/> :   <RiMenu3Fill style={{fontSize: "30px",color:"white"}}/>  }
    

        
      </div>
    </nav>
  );
};

export default Navbar;
