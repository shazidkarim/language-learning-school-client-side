import { Link, Outlet } from "react-router-dom";
import { FaBookOpen, FaChalkboardTeacher, FaHome, FaRestroom, FaShoppingCart, FaWallet } from 'react-icons/fa';
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    // const isAdmin = true;
    const [isAdmin,isInstructor] = useAdmin();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold">welcome to Dashboard!!!</h2>
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        isAdmin ? <>
                            <li> <Link to={'/dashboard/manageclass'}> <FaWallet></FaWallet> Manage Classes </Link> </li>
                            <li> <Link to={'/dashboard/allusers'}> <FaBookOpen></FaBookOpen> Manage Ussers   </Link> </li>
                            </> : 
                            isInstructor ? <>
                            <li> <Link to={'/dashboard/addclass'}> <FaBookOpen></FaBookOpen> Add a class</Link> </li>
                             <li> <Link to={'/dashboard/myaddclass'}> <FaShoppingCart></FaShoppingCart> My Classes </Link></li>
                            </> 
                            :
                            <>
                            <li> <Link to={'/dashboard/myclass'}> <FaShoppingCart></FaShoppingCart> My Classes </Link> </li>
                            <li> <Link to={'/dashboard/paymenthistory'}> <FaWallet></FaWallet> Payment History </Link> </li>
                            <li> <Link to={'/dashboard/myenrolledclass'}> <FaBookOpen></FaBookOpen> My Enrolled class  </Link> </li></>
                    }
                  


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