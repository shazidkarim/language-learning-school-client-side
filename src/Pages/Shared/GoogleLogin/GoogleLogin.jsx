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
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('https://summer-camp-school-server-side-sable.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json' 
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                        navigate(from, {replace: true});
                })
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