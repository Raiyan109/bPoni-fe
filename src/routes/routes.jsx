import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";


const Layout = () => {
    return (
        <div className="main">
            <Navbar />
            <div className="container flex">
                <div className="menuContainer w-auto lg:w-[480px] py-1 px-3 lg:px-7 border-r border-gray-500">
                    <Menu />
                </div>
                <div className="contentContainer py-1 px-7 w-full">
                    <Outlet />
                </div>
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
            // {
            //     path: '/login',
            //     element: <Login />
            // },
            // {
            //     path: '/signUp',
            //     element: <SignUp />
            // },
            // {
            //     path: '/forgot-password',
            //     element: <ForgotPassword />
            // },
        ]
    }
])

export default routes