import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact() {
  return (
    <>
    <div className="bg-[#F7F7F7] border-t my-2 flex flex-col flex-wrap gap-16">
    <div className="flex flex-col justify-center px-4 flex-wrap md:flex-row  gap-6 mt-10 ">
        <div className="flex flex-wrap flex-col gap-10 justify-center items-center">
            <h1 className='text-4xl font-medium text-center'>Howdy! Tell Us About Your Thinking</h1>
            <h3 className=' text-lg text-center text-gray-600 font-medium'>Contact us with your details & ready to start. Lets provide us a message & contact us!</h3>
        </div>
        <img src="contact.png" alt="" />
    </div>
    <div className=" flex  flex-wrap flex-col md:flex-row gap-14 md:gap-0    justify-center mb-4">
        <div className="flex flex-wrap flex-col w-full  md:border-r md:border-l border-gray-300 pb-4 px-8 md:w-2/5 gap-3">
            <div className="">
            <h1 className='text-3xl font-medium'>Send A Message</h1>
            <h3 className='text-lg text-gray-600 mt-6'>Ask us anything here</h3>
            </div>
            <div className="flex flex-wrap flex-col  gap-4">
                <div className="">
                <label htmlFor="name" className='text-lg'>Name</label>
                <input class="mt-1 text-lg pl-2 w-full border border-black py-2 focus:outline-none focus:ring-0 focus:border-dotted  focus:border-black" placeholder='Name'/>
                </div>
                <div className="">
                <label htmlFor="Email" className='text-lg'>Email</label>
                <input type="text" placeholder='Email' className='mt-1 pl-2 w-full border border-black py-2 focus:outline-none focus:ring-0 focus:border-dotted  focus:border-black'/>
                </div>
                <div className="">
                <label htmlFor="message" className='text-lg'>Message</label>
                <textarea rows={4} className='mt-1 pl-2 pt-1 w-full border border-black focus:outline-none focus:ring-0 focus:border-dotted  focus:border-black' placeholder='Message'></textarea>
                </div>
                <button className='bg-[#69727D] w-1/4 text-white py-2 font-medium hover:bg-black'>SUBMIT</button>
            </div>
        </div>
        <div className="flex flex-wrap w-full flex-col md:w-2/5 px-8">
           <div className="flex flex-wrap flex-col gap-6 border-b border-gray-300 pb-8">
            <h1 className='text-3xl font-medium mb-2'>Contact Information</h1>
            <h3><MailOutlineIcon/> info@krinvi.com</h3>
            <h3><CallIcon/> +91-9354795744</h3>
            <h3><LocationOnIcon/> New Delhi-110092</h3>
           </div>
           <div className="flex flex-wrap flex-col pt-8 gap-6">
            <h1 className='text-3xl font-medium mb-2'>Follow Us</h1>
            <h3 className=''><FacebookRoundedIcon/> Facebook</h3>
            <h3><InstagramIcon/> Instagram</h3>
           </div>
        </div>
    </div>
    </div>
    </>
  )
}
