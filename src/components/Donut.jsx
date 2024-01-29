import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { LuArrowUpDown } from "react-icons/lu";
import { ITEM_PROVIDER } from "../context/itemContext";
import DonutDetails from "./DonutDetails";

const Donut = ({ id, name, image, price }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [detailsId, setDetailsId] = useState('')
    const { addToCart, cartItems, removeFromCart } = useContext(ITEM_PROVIDER)

    const cartItemAmount = cartItems[id]

    const handleDonutDetails = () => {
        document.getElementById('my_modal_5').showModal()
        setDetailsId(id)
    }
    return (
        <>

            <div className='bg-white rounded-2xl py-5 px-2 space-y-3 h-72 w-44 flex flex-col items-center z-10' onClick={handleDonutDetails}

            >
                <img src={image} className='w-20 h-20 object-contain' />
                <div className=''>
                    <h1 className='text-xl text-left'>{price}</h1>
                    <h2 className='mb-3'>{name}</h2>
                    <LuArrowUpDown className='text-gray-300 mb-3' />
                    <button className='flex items-center justify-center py-3 w-32 bg-primary rounded-xl'
                        onClick={() => addToCart(id)}
                    >

                        {cartItemAmount === 0 ? <><FaPlus /></> :
                            <>
                                <div className="flex items-center gap-5">
                                    <h1 className="text-2xl font-medium cursor-pointer hover:text-amber-900" onClick={() => removeFromCart(id)}>-</h1>
                                    <h1 className="text-lg font-medium">{cartItems[id]}</h1>
                                    <h1 className="text-2xl font-medium cursor-pointer hover:text-amber-900" onClick={() => addToCart(id)}>+</h1>
                                </div>
                            </>
                        }
                        {/* {cartItemAmount > 0 && <>({cartItemAmount})</>} */}
                    </button>
                </div>
            </div>
            {showDetails &&
                <DonutDetails setShowDetails={setShowDetails} showDetails={showDetails} />
            }
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <DonutDetails detailsId={id} />
            </dialog>
        </>
    );
};

export default Donut;