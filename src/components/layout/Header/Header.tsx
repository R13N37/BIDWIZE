import React from 'react';
import logo from '../../../assets/Logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import CustomButton from '@/components/shared/CustomButton/CustomButton';


type Props = {
    content : string;
    style : string;
};

const Header: React.FC<Props> = ({ }) => {
    return (
        <div className="flex flex-wrap items-center justify-around bg-[#3f5159] pr-[1rem] pl-[1rem]">
             <div className='flex items-center gap-10'>
                <img src={logo} className="w-[8rem] h-[5rem]" alt="logo" />
                <div className='flex'>
                    <CustomButton content={'Home'} style={'flex justify-center h-[6rem] w-[7rem] bg-red-500 items-center bg-transparent hover:bg-black duration-200 hover:text-white font-mono font-bold'}></CustomButton>
                    <CustomButton content={'Categories'} style={"flex justify-center h-[6rem] w-[7rem] bg-red-500 items-center bg-transparent hover:bg-black duration-200 hover:text-white font-mono font-bold"}></CustomButton>
                    <CustomButton content={'About'} style={"flex justify-center h-[6rem] w-[7rem] bg-red-500 items-center bg-transparent hover:bg-black duration-200 hover:text-white font-mono font-bold"}></CustomButton>
                    <CustomButton content={'Contact'} style={"flex justify-center h-[6rem] w-[7rem] bg-red-500 items-center bg-transparent hover:bg-black duration-200 hover:text-white font-mono font-bold"}></CustomButton>
                </div>
             </div>
            <div className='flex items-center gap-5'>
                <a href='#' className='border rounded-full hover:border-blue-500 hover:bg-blue-500'><FaFacebookF className='text-4xl text-black hover:text-white p-2'/></a>
                <a href='#' className='border rounded-full hover:border-pink-500 hover:bg-pink-500'><FaInstagram className='text-4xl text-black hover:text-white p-2'/></a>
                <a href='#' className='border rounded-full hover:border-blue-400 hover:bg-blue-400'><FaTelegramPlane className='text-4xl text-black hover:text-white p-2'/></a>
                <a href='#' className='border rounded-full hover:border-black hover:bg-black'><FaTiktok className='text-4xl text-black hover:text-white p-2'/></a>
                <a href='#' className='border rounded-full hover:border-black hover:bg-black'><CgProfile className='text-4xl text-black hover:text-white p-2'/></a>
            </div> 
        </div>
    );
};

export default Header;