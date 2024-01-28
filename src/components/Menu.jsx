import { Link } from 'react-router-dom';
import donut from '../assets/donut.jpeg'


const Menu = () => {
    return (
        <div className='menu'>
            <div className="item flex flex-col gap-3 mb-3">
                <span className="title text-xl font-bold">Main</span>
                <Link to='/' className='flex items-center gap-2'>
                    <span className="listItemTitle">Delivery Unavailable</span>
                </Link>
            </div>
            <div className="item flex flex-col gap-3 mb-3">
                <span className="title text-xl font-bold">Catalog</span>
                <Link to='/' className='flex items-center gap-2 hover:bg-gray-200 rounded-md px-2 py-3'>
                    <img src={donut} alt="" className='w-10 h-10 object-contain rounded-full' />
                    <span className="listItemTitle text-lg font-medium">Home</span>
                </Link>
            </div>

        </div>
    );
};

export default Menu;