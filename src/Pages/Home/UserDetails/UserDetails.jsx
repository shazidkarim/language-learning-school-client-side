import './UserDetails.css'
import { FaStamp,FaWallet,FaWindowRestore,FaUserGraduate } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";

const UserDetails = () => {
    return (
     <>
     <div className='mt-9'>
        <SectionTitle heading={'Language School In Number'}></SectionTitle>
     </div>
        <div className="bg items-center mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-40">
            <div className="card w-25 shadow-xl border-4">
                <div className="card-body items-center justify-center">
                    <h1 className='text-2xl'><FaStamp></FaStamp></h1>
                    <h2 className="card-title text-5xl m-3">258</h2>
                    <h2 className='text-2xl font-serif'>STUDENTS</h2>
                </div>
            </div>
            <div className="card w-25 shadow-xl border-4">
                <div className="card-body items-center justify-center">
                    <h1 className='text-2xl'><FaWallet></FaWallet></h1>
                    <h2 className="card-title text-5xl m-3">35</h2>
                    <p className='text-2xl font-serif'>LEARNING PROGRAM</p>
                </div>
            </div>
            <div className="card w-25 shadow-xl border-4">
                <div className="card-body items-center justify-center">
                   <h1 className='text-2xl'> <FaWindowRestore></FaWindowRestore></h1>
                    <h2 className="card-title text-5xl m-3">12</h2>
                    <p className='text-2xl font-serif'>LANGUAGE LEARNING</p>
                </div>
            </div>
            <div className="card w-25 shadow-xl border-4">
                <div className="card-body items-center justify-center">
                <h1 className='text-2xl'><FaUserGraduate></FaUserGraduate></h1>
                    <h2 className="card-title text-5xl m-3">12</h2>
                    <p className='text-2xl font-serif'>TEACHERS</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default UserDetails;