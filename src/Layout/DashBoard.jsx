import { Link, Outlet } from "react-router-dom";
import { FaBookOpen, FaChalkboardTeacher, FaHome, FaRestroom, FaShoppingCart, FaWallet } from 'react-icons/fa';

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open w-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center w-full">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li> <Link to={'/dashboard/myclass'}> <FaShoppingCart></FaShoppingCart> My Classes </Link> </li>
                    <li> <Link to={'/dashboard/history'}> <FaWallet></FaWallet> Payment History </Link> </li>
                    <li> <Link to={'/dashboard/enrolled'}> <FaBookOpen></FaBookOpen> My Enrolled class  </Link> </li>
                    <div className="divider"></div>
                    <li> <Link to={'/'}> <FaHome></FaHome> Home</Link> </li>
                    <li> <Link to={'/instructors'}><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</Link> </li>
                    <li> <Link to={'/classes'}> <FaRestroom></FaRestroom> classes</Link> </li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;