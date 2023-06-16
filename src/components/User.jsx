import React, { useState } from "react";


const User = () => {
  const [gender, setGender] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const formHandler = (e) => {
    e.preventDefault()
    setFname("")
    setLname("")
    setEmail("")
    setPhoneNumber("")
    setGender("")
    setDob("")
    setPassword("")
    setConfirmPassword("")

  }

  return (
    <div className='bg-[#ddddff] w-full h-auto px-4 lg:px-[4rem] py-4 lg:py-8'>
      <h1  className=' text-[24px] text-[#1b1b1b] font-semibold  '>Create User</h1>
      <form onSubmit={formHandler} className='bg-white w-full h-auto p-4 mt-4 rounded-md '>
        <div className='flex justify-between items-center w-full '>
          <h1 className='font-semibold text-xl '>Personal Details</h1>
          <h2 className='text-lg font-thin '>* Marked fields are necessary</h2>
        </div>
        <hr className='mt-4 mb-4 border-[1.5px] text-[#b5b5b5] bg-[#b5b5b5]' />
        <div className='flex flex-col md:flex-row  gap-4'>
          <div className='f-name flex flex-col xs:w-full md:w-[300px]'>
            <label className='text-lg' htmlFor="">First Name*</label>
            <input  value={fname} onChange={(e)=>setFname(e.target.value)}  className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2' type="text" placeholder='Fist Name' />
          </div>
          <div className='l-name flex flex-col  xs:w-full md:w-[300px]'>
            <label className='text-lg' htmlFor="">Last Name*</label>
            <input  value={lname} onChange={(e)=>setLname(e.target.value)}  className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2 ' type="text" placeholder='Last Name' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row  gap-4 mt-[1.3rem]'>
          <div className='f-name flex flex-col xs:w-full md:w-[300px]'>
            <label className='text-lg' htmlFor="">Gender*</label>
            {/* <input className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2' type="select" placeholder='Fist Name' /> */}
            <select value={gender} onChange={(e)=>setGender(e.target.value)}  className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2 bg-transparent '  id="gender" name="carlist" form="carform">
              <option >Select</option>
              <option >Male</option>

              <option >Female</option>
              <option >Other</option>
            </select>
          </div>
          <div className='l-name flex flex-col  xs:w-full md:w-[300px]'>
            <label className='text-lg' htmlFor="">Date of Birth*</label>
            <input  value={dob} onChange={(e)=>setDob(e.target.value)}  className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2 ' type="date" placeholder='Last Name' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row  gap-4 mt-[1.3rem]'>
          <div className='f-name flex flex-col xs:w-full md:w-[300px]'>
            <label className='text-lg' htmlFor="">Email*</label>
            <input  value={email} onChange={(e)=>setEmail(e.target.value)}  className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2' type="text" placeholder='Email' />
          </div>
          <div className='l-name flex flex-col  xs:w-full md:w-[300px]'>
            <label className='text-lg' htmlFor="">Phone Number*</label>
            <input  value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}  className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2 ' type="text" placeholder='Phone Number' />
          </div>
        </div>

        <div className="mt-8">
          <h1  className='font-semibold text-xl '>Create a Password</h1>
        <hr className='mt-4 mb-4 border-[1.5px] text-[#b5b5b5] bg-[#b5b5b5]' />

        <div className='flex flex-col md:flex-row  gap-4 mt-[1.3rem]'>
          <div className='f-name flex flex-col xs:w-full md:w-[300px]'>
            <label className='text-lg' htmlFor="">Password*</label>
            <input  value={password} onChange={(e)=>setPassword(e.target.value)}  className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2' type="password" placeholder='Password' />
          </div>
          <div className='l-name flex flex-col  xs:w-full md:w-[300px]'>
            <label className='text-lg' htmlFor="">Re-Enter Password*</label>
            <input  value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}  className='border-gray-300 mt-2 border-2 rounded-md px-4 py-2 ' type="password" placeholder='Re-Enter Password' />
          </div>
        </div>

        </div>
        <div className="w-full flex justify-start mt-8 ">
          <button type="submit" className=" px-12 py-2 bg-[#aaa3ff] rounded-md"> Create</button>
        </div>

      </form>
      
    </div>
  )
}

export default User
