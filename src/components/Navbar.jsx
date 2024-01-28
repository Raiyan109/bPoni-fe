import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaLocationArrow } from "react-icons/fa";
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar.jpeg'
const Navbar = () => {
    return (
        <header className="p-3  text-gray-800">
            <div className="flex justify-between h-16 mx-auto px-3">
                <div className='flex items-center gap-3'>
                    <Link to='/'>Logo</Link>
                    <div className='bg-white shadow-md rounded-md p-1 cursor-pointer w-28'>
                        <div className='flex items-center gap-2 p-2'>
                            <BsFillPersonFill />
                            <BsFillPersonFill />
                        </div>
                    </div>
                </div>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex mt-4">
                        <div className="relative">
                            <span className="absolute top-2 pl-1">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <CiSearch />
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-lg sm:w-auto focus:outline-none border-gray-400 border-2" autoComplete="off" />
                        </div>
                    </li>
                    <li className="flex mt-4">
                        <div className="relative">
                            <span className="absolute top-2 pl-1">
                                <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                    <FaLocationArrow />
                                </button>
                            </span>
                            <button className=" py-2 px-10 text-sm rounded-lg sm:w-auto focus:outline-none border-gray-400 border-2" autoComplete="off">
                                Enter delivery address
                            </button>
                        </div>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 mt-4 hidden lg:flex">
                    <div className="flex flex-col gap-1 items-center">
                        <button className="self-center px-8 rounded"><GiHamburgerMenu /></button>
                        <h1 className="text-sm md:text-lg">Orders</h1>
                    </div>

                    <img src={avatar} alt="" className="w-10 h-10 object-contain rounded-full" />

                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;