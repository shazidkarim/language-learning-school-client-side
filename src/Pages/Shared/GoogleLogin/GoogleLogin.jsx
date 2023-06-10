import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace: true});
        })
    }
    return (
        <div>
            <div className="divider w-full"></div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"> <FaGoogle></FaGoogle> </button>
        </div>
    );
};

export default GoogleLogin;