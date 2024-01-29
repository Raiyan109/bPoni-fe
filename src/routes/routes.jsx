import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Cart from "../components/Cart";
import AllDonuts from "../components/AllDonuts";
import DonutDetails from "../components/DonutDetails";
import { AiFillMessage } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Layout = () => {
    const [openMessage, setOpenMessage] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <div className="main">
            <Navbar />
            <div className="flex">
                <div className="menuContainer w-[480px] py-1 px-3 lg:px-7 relative">
                    <Menu />


                </div>
                <button className="p-4 md:hidden absolute top-16 left-5 z-20" onClick={() => setShowSidebar(!showSidebar)}>
                    <RxHamburgerMenu />
                </button>
                {showSidebar &&
                    <div className="absolute top-14 right-7 bg-green-200 pb-20 px-3">
                        <h1>HI</h1>
                    </div>
                }
                <div className="contentContainer py-1 px-7 w-full z-30 h-screen">
                    <Outlet />
                </div>
                <div className="menuContainer fixed top-44 right-10">
                    <Cart />
                </div>
                {openMessage && (
                    <div className="bg-white rounded-2xl w-80 h-[500px] py-4 px-3 absolute bottom-32 left-5">
                        <ul>
                            <li className="flex justify-between items-center border-b pb-3 text-xl font-normal">I want to place an order
                                <IoIosArrowForward />
                            </li>
                            <li className="flex justify-between items-center border-b pb-3 text-xl font-normal">Something went wrong with the app
                                <IoIosArrowForward />
                            </li>
                            <li className="flex justify-between items-center border-b pb-3 text-xl font-normal">I want to become a partner
                                <IoIosArrowForward />
                            </li>


                        </ul>
                    </div>
                )}
                <button className="absolute bottom-5 left-5 bg-yellow-400 p-5 rounded-full text-3xl glowing-btn" onClick={() => setOpenMessage(!openMessage)}>
                    <AiFillMessage />
                </button>
            </div>
            <Footer />
        </div>
    )
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-donuts',
                element: <AllDonuts />
            },
            {
                path: '/donuts/:id',
                element: <DonutDetails />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
])

export default routes