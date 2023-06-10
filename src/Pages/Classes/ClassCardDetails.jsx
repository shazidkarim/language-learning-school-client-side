import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const ClassCardDetails = ({ data }) => {
    const { image, className, instructorName, availableSeats, price,_id } = data;
    const { user } = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSelectClass = (data) => {
        console.log(data);
        if (user && user.email) {
            const bookedClass = {classId :_id, image, className, instructorName, availableSeats, price,email:user.email }
            fetch('http://localhost:5000/myclass',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(bookedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class booked successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please log in first!!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state: {from: location}})
                }
            })
        }
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">
            <figure><img className='w-full object-cover h-60' src={image} alt="classimg" /></figure>
            <div className="card-body">
                <h2 className="card-title font-serif">Class Name: {className}</h2>
                <p className="font-serif">Instructor name: {instructorName}</p>
                <p>Avialable seat: {availableSeats}</p>
                <p>Class Price: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleSelectClass(data)} className="btn btn-primary">Select </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCardDetails;