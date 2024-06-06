import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const ItemsContainer = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:px-8 px-14 py-16 pl-8 text-2xl">
      <div className="pl-32">
        <h1 className="text-2xl font-bold text-yellow-600">Useful Links</h1>
       <Link to='/privacy'><h1>Privacy Policy</h1></Link>
       <Link to='/privacy'><h1>Terms and Conditions</h1></Link>
       <Link to='/privacy'><h1> Refund and Cancellation Policy</h1></Link>
      </div>
      <div className="pl-32">
        <h1 className="text-2xl font-bold text-yellow-600 flex">Contact Us</h1>
        <FaHome size={26}/>
        <h2 className="text-xl mt-2  "><h2 className="flex">Kachhawa Road Mirzapur <br/> Uttar Pradesh <br/> 231501</h2>
    
        <br/>
        <h2 className="mt-4 flex"> <FiPhoneCall size={26}/><span className="px-1"></span>+91-8299478939</h2>
 <h2 className="cursor-pointer mt-4 flex"><MdEmail size={26}/><span className="px-1"></span>info@Chess.com</h2></h2>
      </div>
    </div>
    </>
  );
};

export default ItemsContainer;