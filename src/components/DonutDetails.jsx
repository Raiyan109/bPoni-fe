import { useRef } from "react";
import { useParams } from "react-router-dom";

const DonutDetails = ({ setShowDetails, showDetails, detailsId }) => {
    const popupRef = useRef()
    const { id } = useParams()
    console.log(detailsId);
    const closePopup = (e) => {
        if (popupRef.current === e.target) {
            setShowDetails(!showDetails)
        }
    }
    return (
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello! {detailsId}</h3>
            <p className="py-4">Presssssssssssss ESC key or click the button below to close</p>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
            </div>
        </div>
    );
};

export default DonutDetails;