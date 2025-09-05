import React from 'react'
import logo from '../assets/react.svg'
const Header = () => {
  return (
   <header>
    <nav className='flex justify-around items-center h-[80px]'>
        <img src={logo} alt=""  className='w-[90px] h-[20px]'/>


        <ul className='flex gap-9 items-center'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><button className='bg-[#4CAF4F] rounded-[5px] p-1.5 text-white '>Register Now</button></li>
        </ul>

    </nav>
   </header>
   )
}

export default Header


