import React from 'react'
import logo from '../assets/Illustration (3).png'

const Main = () => {
  return (

    <div className='bg-[#F5F7FA] w-full h-[600px] pl-20 pt-10'>
      <div className='flex items-center gap-64'>

        <div>
          <h1 className='text-5xl w-[440px]'>Lessons and insights from 8 years</h1>
          <p className='text-gray-500 mt-5'>Where to grow your business as a photographer: site or social media?</p>
          <button className='w-[100px] h-[50px] bg-[#4CAF4F] text-white mt-5 rounded-md'>Register</button>
        </div>

        <div >
          <img className="w-[500px] h-[400px]" src={logo} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Main  
