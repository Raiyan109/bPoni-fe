import { useState } from 'react';
import Data from '../../public/data.json'
import Donut from './Donut';
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";

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
    }
    return (
        <div className='mt-20'>
            <div className="flex justify-between w-[1100px]">
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