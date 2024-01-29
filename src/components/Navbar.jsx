import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaLocationArrow } from "react-icons/fa";
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.jpeg'
import { useState } from "react";
import LocationPopup from "./LocationPopup";

const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
    const [showPopupLocation, setShowPopupLocation] = useState(false)
    return (
        <header className="p-3 text-gray-800 ">

            <div className="flex justify-between px-3 items-center">
                <div className="flex items-center justify-evenly gap-10">
                    <div className='flex items-center gap-3'>
                        <Link to='/' className="text-sm font-normal lg:text-2xl lg:font-bold border-r pr-5 mr-3 border-black/60">Logooooooooooo</Link>
                        <div className='bg-white shadow-md rounded-md p-1 cursor-pointer w-auto lg:w-28'>
                            <div className='flex items-center gap-2 p-2'>
                                <BsFillPersonFill />
                                <BsFillPersonFill />
                            </div>
                        </div>
                    </div>
                    <div className="items-center justify-evenly space-x-3 flex">
                        <div className="flex justify-center items-center mt-2">
                            <div className="relative">
                                <span className="absolute top-1 lg:top-2 left-1 lg:left-2 pl-1">
                                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring text-xl lg:text-2xl">
                                        <CiSearch />
                                    </button>
                                </span>
                                <input type="search" name="Search" placeholder="Search..." className="w-4 lg:w-60 py-1 lg:py-3 px-5 lg:px-20 text-sm rounded-2xl focus:outline-none border-gray-400 border-2 text-left" autoComplete="off" />
                            </div>
                        </div>

                        <div className="flex mt-2" onClick={() => setShowPopupLocation(true)}>
                            <div className="relative rounded-2xl w-auto focus:outline-none border-gray-400 border-2">
                                <span className="absolute top-1 lg:top-3 left-1 lg:left-2 pl-1">
                                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring text-sm lg:text-xl">
                                        <FaLocationArrow />
                                    </button>
                                </span>
                                <button className="py-2 px-5 lg:px-12 font-bold text-xl" autoComplete="off">
                                    <h1 className="hidden md:block">Enter delivery address</h1>
                                </button>
                            </div>
                        </div>

                        {showPopupLocation &&
                            <LocationPopup setShowPopupLocation={setShowPopupLocation} showPopupLocation={showPopupLocation} />
                        }
                    </div>
                </div>
                <div className="items-center flex-shrink-0 mt-4 hidden lg:flex">
                    <Link to='/login' className='flex justify-center items-center py-3 px-10 bg-gray-300 rounded-2xl font-medium text-xl'>
                        Login
                    </Link>
                    <div className="flex flex-col gap-1 items-center">
                        <button className="self-center px-8 rounded"><GiHamburgerMenu /></button>
                        <h1 className="text-sm md:text-lg">Orders</h1>
                    </div>

                    <img src={avatar} alt="" className="w-10 h-10 object-contain rounded-full" />

                </div>
                {showModal &&
                    <div className="mt-4 flex flex-col-reverse items-center absolute top-14 right-7 bg-orange-200 pb-20 px-3">
                        <div className="flex gap-1 items-center">
                            <button className=" rounded"><GiHamburgerMenu /></button>
                            <h1 className="text-sm md:text-lg">Orders</h1>
                        </div>

                        <img src={avatar} alt="" className="w-10 h-10 object-contain rounded-full" />

                    </div>
                }
                <button className="p-4 lg:hidden" onClick={() => setShowModal(!showModal)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="border-b border-gray-200 pt-4 mx-12"></div>
        </header>
    );
};

export default Navbar;