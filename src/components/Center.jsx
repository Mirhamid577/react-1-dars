import React from 'react'
import Logo from '../assets/Clients Logos.png'
import Logo2 from '../assets/Icon (3).png'
import Logo3 from '../assets/Frame 35.png'
const Center = () => {
    return (
        <div className='h-[800px] pt-10'>
            <div className='text-center flex gap-6 flex-col'>

                <div className='flex gap-3 flex-col'>
                    <h1 className='text-5xl'>Our Clients</h1>
                    <p>We have been working with some Fortune 500+ clients</p>
                </div>

                <div className='flex items-center justify-center '>
                    <img className='w-[1300px]' src={Logo} alt="" />
                </div>

            </div>

            <div className='mt-12'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-4xl w-[520px] text-center'>Manage your entire community in a single system</h1>
                </div>

                <div className='flex items-center container mx-auto justify-between p-5'>
                    <div className='flex items-center flex-col justify-center'>
                        <img className='w-[100px] h-[100px]' src={Logo2} alt="" />
                        <h2 className='text-3xl w-[200px] text-center'>Membership Organisations</h2>
                        <p className='text-gray-500 w-[300px] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>


                    <div className='flex items-center flex-col justify-center'>
                        <img className='w-[100px] h-[100px]' src={Logo2} alt="" />
                        <h2 className='text-3xl w-[200px] text-center'>Membership Organisations</h2>
                        <p className='text-gray-500 w-[300px] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>


                    <div className='flex items-center flex-col justify-center'>
                        <img className='w-[100px] h-[100px]' src={Logo2} alt="" />
                        <h2 className='text-3xl w-[200px] text-center'>Membership Organisations</h2>
                        <p className='text-gray-500 w-[300px] text-center'>Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>

            </div>

            <div className='container mx-auto flex items-center justify-center mt-[50px]'>
                <div>
                    <img className='w-[700px] h-[600px]' src={Logo3} alt="" />
                </div>

                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[#4D4D4D] text-[40px] w-[600px] font-bold'>The unseen of spending three years at Pixelgrade</h1>
                    <p className='text-[#717171] w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className='bg-[#4CAF4F] w-[170px] h-[55px]'>Learn More</button>
                </div>
            </div>

        </div>
    )
}

export default Center