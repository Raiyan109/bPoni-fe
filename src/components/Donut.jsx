import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { LuArrowUpDown } from "react-icons/lu";
import { ITEM_PROVIDER } from "../context/itemContext";

const Donut = ({ id, name, image, price }) => {
    const { addToCart, cartItems } = useContext(ITEM_PROVIDER)

    const cartItemAmount = cartItems[id]
    return (
        <div className='bg-white rounded-2xl py-5 px-2 space-y-3 h-72 w-44 flex flex-col items-center'>
            <img src={image} className='w-20 h-20 object-contain' />
            <div className=''>
                <h1 className='text-xl text-left'>{price}</h1>
                <h2 className='mb-3'>{name}</h2>
                <LuArrowUpDown className='text-gray-300 mb-3' />
                <button className='flex justify-center items-center py-3 px-16 bg-primary rounded-xl'
                    onClick={() => addToCart(id)}
                >
                    <FaPlus />
                    {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            </div>
        </div>
    );
};

export default Donut;