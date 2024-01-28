import { Link } from "react-router-dom";
import logo from '../assets/react.svg'
import bg from '../assets/pexels-jonathan-schmer-7967378.jpg'
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import avatar from '../assets/avatar.jpeg'
import { FaRegMessage } from "react-icons/fa6";

const Login = () => {
    const handleSubmit = () => {

    }
    return (
        <div style={{ backgroundImage: `url("${bg}")` }} className=" w-full bg-no-repeat bg-center bg-cover">
            <div className="flex justify-center items-center mx-auto h-screen">
                <div className="bg-white shadow-sm py-5 px-6 rounded-2xl h-auto w-96 space-y-6">
                    <div className="space-y-6">
                        <div className="flex items-center justify-around gap-24 text-xl">
                            <Link to='/'><FaArrowLeft /></Link>
                            <h1>Logo <span className="bg-black p-1 rounded-full text-white">ID</span></h1>
                            <FaRegQuestionCircle />
                        </div>
                        <h1 className="text-center text-2xl font-medium text-black/75">Login with Yandex ID</h1>
                        {/* <h1 className="text-center text-2xl font-medium text-black/75">Sign in to continue</h1> */}
                    </div>

                    <div className="flex justify-center items-center flex-col space-y-3">
                        {/* Switch for mail and telephone */}
                        <label className="switch relative inline-block w-56 h-12 ">
                            <input type="checkbox" className="opacity-0 w-0 h-0" />
                            <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-100 rounded-2xl"></span>
                        </label>
                        {/* Input field */}
                        <input type="search" name="Search" placeholder="Login or Email" className="w-56 py-3 lg:py-3 px-5 lg:px-20 text-xl rounded-2xl focus:outline-none border-gray-400 border-2 text-left" autoComplete="off" />
                        {/* Button */}
                        <button className="w-56 py-3 px-5 bg-slate-800 rounded-2xl text-white">To come in</button>
                        {/* Login using others */}
                    </div>
                    {/* UI for logged in user */}
                    {/* <div className="space-y-2">
                        <div className="flex justify-between items-center bg-gray-200 px-2 rounded-2xl py-2">
                            <div className="flex items-center gap-2">
                                <img src={avatar} alt="" className="w-10 h-10 object-contain rounded-full" />
                                <h1>Raiyan Kabir</h1>
                            </div>
                            <IoIosArrowDown />
                        </div>
                        <div className="flex justify-center items-center bg-gray-200 px-2 rounded-2xl py-3 font-medium text-lg gap-2">
                            <FaRegMessage />
                            <h1>Login via SMS</h1>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Login;