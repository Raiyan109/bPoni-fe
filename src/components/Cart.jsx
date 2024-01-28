import { useContext } from 'react';
import Data from '../../public/data.json'
import { ITEM_PROVIDER } from '../context/itemContext';
import CartItem from './CartItem';


const Cart = () => {
    const { cartItems } = useContext(ITEM_PROVIDER)
    return (
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
    );
};

export default Cart;