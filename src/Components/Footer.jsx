import React from 'react'
import { IconButton , Input } from "@material-tailwind/react";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'
import {BiSend} from 'react-icons/bi'

const Footer = () => {
  return (
<footer id='contact' className="border-t-2 bg-mainBgColor border-sixty mt-9 dark:bg-gray-900">
    <div className=" flex  mb-5 flex-col sm:justify-around w-11/12 mx-auto gap-5 sm:flex-row
    ">
        <div className='mt-5'>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Newsletter</h2>
            <form className=' flex items-center justify-center gap-3 sm:flex-col'>
            <Input variant="standard" label="Email"/>
            <IconButton ripple className='w-full bg-primary' ><BiSend style={{width: '100%'}} /></IconButton>
            </form>

        </div>
        <div className='mt-5'>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Call Us</h2>
            <h3 className='text-primary font-semibold'>+57 018000 4245477 </h3>
        </div>
    </div>
    <div className="py-6 px-4  bg-gradient-to-t from-mainBgColor  to-mainBgColor  flex flex-col items-center gap-2 justify-center ">
        <p className="text-sm text-gray-500 dark:text-gray-300 sm:text-center w-ful">© 2022 <a href="#">KoalaFit™</a>. All Rights Reserved.
        </p>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-white">
                <BsFacebook/>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-white">
                <BsInstagram/>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-white">
                <BsTwitter/>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-white">
                <BsGithub/>
            </a>
        </div>
    </div>
</footer>

  )
}

export default Footer