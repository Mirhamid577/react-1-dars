import React from 'react'
import Logo from '../assets/Clients Logos.png'
const Center = () => {
    return (
        <div className='h-[800px] pt-10'>
            <div className='text-center flex gap-6 flex-col'>

                <div className='flex gap-3 flex-col'>
                    <h1 className='text-5xl'>Our Clients</h1>
                    <p>We have been working with some Fortune 500+ clients</p>
                </div>

                <div className='flex items-center justify-center '>
                    <img src={Logo} alt="" />
                </div>

            </div>

            <div className='mt-12'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-4xl w-[520px] text-center'>Manage your entire community in a single system</h1>
                </div>


                <div>
                    <img src="" alt="" />
                    <h2 className='text-3xl w-[200px] text-center'>Membership Organisations</h2>
                    <p className='text-gray-500 w-[300px]'>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>

        </div>
    )
}

export default Center