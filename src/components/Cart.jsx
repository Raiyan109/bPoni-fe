import { useContext } from 'react';
import Data from '../../public/data.json'
import { ITEM_PROVIDER } from '../context/ItemContext';
import CartItem from './CartItem';


const Cart = () => {
    const { cartItems, getTotal } = useContext(ITEM_PROVIDER)
    const total = getTotal()
    console.log(total);
    return (
        <>

            <div className="bg-white rounded-2xl w-72 h-[600px] py-3 px-2 z-10">
                <div className="flex justify-between items-center">
                    <h1>Cart</h1>
                    <button>Clear</button>
                </div>
                <div>
                    {Data.map(({ id, name, image, price }) => {
                        if (cartItems[id] !== 0) {
                            return <CartItem key={id} name={name} image={image} price={price} id={id} />
                        }
                    })}
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className="w-60 py-3 px-5 bg-yellow-400 rounded-2xl mt-3 flex items-center justify-center gap-4 font-semibold">
                    <h1>Yes, go to checkout</h1>
                    <h1 className='font-bold'>${total}</h1>
                </button>

            </div>
        </>
    );
};

export default Cart;