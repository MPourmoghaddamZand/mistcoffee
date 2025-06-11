import ReactDOM from "react-dom";
import SecNavbar from "../navbar/SecNavbar";

const ProductInfo = ({ product, onClose }) => {
    return ReactDOM.createPortal(
        <div className="w-full h-screen bg-myback fixed inset-0 z-50 py-5">
            <SecNavbar title={"اطلاعات محصول"} onClose={onClose} />
        </div>
        , document.getElementById("modal-root")
    );
};


export default ProductInfo