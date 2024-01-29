import { useState } from 'react';
import Data from '../../public/data.json'
import Donut from './Donut';
// import { IoIosArrowDown } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import { IoFilterSharp } from "react-icons/io5";

const AllDonuts = () => {
    const [filterText, setFilterText] = useState('popular')


    const filteredList = Data.filter((d) => {
        if (filterText === 'popular') {
            return d.popular === true;
        } else if (filterText === 'less expensive') {
            return parseInt(d.price) < 500; // Filter items with price less than 500
        } else if (filterText === 'most expensive') {
            return parseInt(d.price) >= 500; // Filter items with price greater than or equal to 500
        }
        return true; // Return true to include all items if filterText doesn't match any condition
    });

    const selectedFilter = (filterValue) => {
        setFilterText(filterValue);
    }
    const handleFilterValueChange = e => {
        selectedFilter(e.target.value)
        console.log(e.target.value);
    }
    return (
        <div className='mt-20'>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Documents</a></li>
                    <li>Add Document</li>
                </ul>
            </div>
            <div className="flex justify-between w-[1000px]">
                <div className='w-44 py-3 bg-yellow-400 rounded-2xl mt-3 flex items-center justify-evenly gap-4 font-semibold'>
                    {/* <label htmlFor="">Filter by city</label> */}
                    <LuArrowUpDown />
                    <select name="" id="" defaultValue='false'
                        // value={sort}
                        onChange={handleFilterValueChange}
                        className='bg-yellow-400 outline-none border-none w-24 -ml-5'
                    >
                        <option value="popular">Popular First</option>
                        <option value="less expensive">Less expensive first</option>
                        <option value="most expensive">Most expensive first</option>
                    </select>
                </div>

                <div className='place-self-end'>
                    <div className="drawer drawer-end ">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button bg-gray-300 w-32 py-3 px-3 flex items-center justify-between rounded-2xl font-bold">All Filters <IoFilterSharp /></label>

                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu w-96 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li>
                                    <div className='bg-white rounded-2xl h-20 relative'>
                                        <div className='absolute top-3 left-4 text-xl font-bold'>X</div>
                                        <div className='absolute top-3 left-44 text-xl font-bold'>Filters</div>
                                    </div>
                                </li>
                                <li>
                                    <div className='bg-white rounded-2xl h-screen relative mt-2'>
                                        <div className='absolute top-3 left-3 text-xl font-bold'>Show First</div>
                                        <div className='absolute top-16 left-4 text-xl font-bold'>
                                            <div className="form-control border-b pb-2">
                                                <label className="label cursor-pointer flex justify-between gap-60">
                                                    <span className="label-text text-xl font-normal">Popular</span>
                                                    <input type="radio"
                                                        onChange={handleFilterValueChange}
                                                        value='popular'
                                                        id='popular'
                                                        name="filterText"
                                                        checked={filterText === 'popular'}
                                                        className="radio checked:bg-yellow-500" />
                                                </label>
                                            </div>
                                            <div className="form-control border-b  pb-2">
                                                <label className="label cursor-pointer">
                                                    <span className="label-text text-xl font-normal">Least Expensive</span>
                                                    <input type="radio"

                                                        onChange={handleFilterValueChange}
                                                        value='less expensive'
                                                        id='less expensive'
                                                        name="filterText" className="radio checked:bg-yellow-500" checked={filterText === 'less expensive'} />
                                                </label>
                                            </div>
                                            <div className="form-control border-b pb-2">
                                                <label className="label cursor-pointer">
                                                    <span className="label-text text-xl font-normal">Expensive</span>
                                                    <input type="radio"
                                                        onChange={handleFilterValueChange}
                                                        value='most expensive'
                                                        id='most expensive'
                                                        name="filterText" className="radio checked:bg-yellow-500" checked={filterText === 'most expensive'} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center mt-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3'>
                    {filteredList.map(({ id, name, image, price }) => (
                        <Donut key={id} name={name} image={image} price={price} id={id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllDonuts;