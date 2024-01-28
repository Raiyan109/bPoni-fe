
const CartItem = ({ id, name, image, price }) => {
    return (
        <div className="flex items-center justify-around">
            <img src={image} alt="" className="w-16 h-16 object-contain" />
            <div className="flex flex-col items-center">
                <h1>{name}</h1>
                <h1>{price}</h1>
            </div>
            <div className="rounded-2xl bg-gray-200 py-1 px-2 flex items-center gap-4">
                <h1 className="text-lg font-medium">-</h1>
                <h1 className="text-lg font-medium">1</h1>
                <h1 className="text-lg font-medium">+</h1>
            </div>
        </div>
    );
};

export default CartItem;