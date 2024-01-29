import { useRef } from "react";

const LocationPopup = ({ setShowPopupLocation, showPopupLocation }) => {
    const popupRef = useRef()

    const closePopup = (e) => {
        if (popupRef.current === e.target) {
            setShowPopupLocation(!showPopupLocation)
        }
    }
    return (
        <div ref={popupRef} onClick={closePopup} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10">
            <div className="mt-10 flex flex-col gap-5">

                <div className="flex justify-center items-center bg-white px-20 py-10 flex-col gap-5 mx-4 rounded-xl">
                    <button
                        className="place-self-end p-4 rounded-full"
                        onClick={() => setShowPopupLocation(!showPopupLocation)}>X</button>
                    <h1 className="text-white text-2xl">Add New Item</h1>


                </div>
            </div>
        </div>
    );
};

export default LocationPopup;