import { Link } from 'react-router-dom';
import donut from '../assets/donut.jpeg'
import sand from '../assets/sandwich.jpg'


const Menu = () => {
    return (
        <div className='menu'>
            <div className="item flex flex-col gap-3 mb-3">
                <span className="title text-xl font-bold hidden lg:block">Main</span>
                <Link to='/' className='flex items-center gap-2'>
                    <span className="listItemTitle hidden lg:block">Delivery Unavailable</span>
                </Link>
            </div>
            <div className="item flex flex-col gap-3 mb-3">
                <span className="title text-xl font-bold hidden lg:block">Catalog</span>
                <Link to='/' className='flex items-center gap-2 hover:bg-gray-200 rounded-md px-1 lg:px-2 py-3'>
                    <img src={donut} alt="" className='w-10 h-10 object-contain rounded-full' />
                    <span className="listItemTitle text-lg font-medium hidden lg:block">Donut</span>
                </Link>
                <Link to='/' className='flex items-center gap-2 hover:bg-gray-200 rounded-md px-1 lg:px-2 py-3'>
                    <img src={sand} alt="" className='w-10 h-10 object-contain rounded-full' />
                    <span className="listItemTitle text-lg font-medium hidden lg:block">Sandwich</span>
                </Link>
            </div>

        </div>
    );
};

export default Menu;