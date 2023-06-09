import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li> <Link to={'/'}>Home</Link> </li>
        <li> <Link to={'/instructors'}>Instructors</Link> </li>
        <li> <Link to={'/classes'}>classes</Link> </li>
        <li> <Link to={'/'}><button>
            fvo class
            <div className="badge badge-secondary">+0</div>
        </button></Link> </li>

        { user ? <>
                <li> <Link to={'/'}>Dashboard</Link> </li>
                <img referrerPolicy="no-referrer" className="mt-2">{user?.photoURL}</img>
                <li><button onClick={handleLogOut}>logout</button></li> </> : <>
                <li> <Link to={'/login'}>login</Link> </li> </>
        }
    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Language school</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">.</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;