import { Link } from "react-router-dom";
import img from '../../assets/banner images/errorpage img.jpg'
const ErrorPage = () => {
    return (
        <div className="w-1/2 m-auto mt-10">
        <div className='w-50 mb-4'>
            <img src={img} alt="" />
        </div>
        <div className='m-auto text-center'>
            <button className='p-5 rounded btn-primary'>
                <Link to={'/'}>Return to Home Page</Link>
            </button>
        </div>
    </div>
    );
};

export default ErrorPage;