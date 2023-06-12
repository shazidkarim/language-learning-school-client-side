import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const ClassCardDetails = ({ data }) => {
    const { image, className, instructorName, availableSeats, price, _id } = data;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleSelectClass = (data) => {
        if (isButtonDisabled) return;

        setIsButtonDisabled(true);

        if (user && user.email) {
            const bookedClass = {
                classId: _id,
                image,
                className,
                instructorName,
                availableSeats,
                price,
                email: user.email
            };

            fetch("https://summer-camp-school-server-side-sable.vercel.app/myclass", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookedClass)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Class booked successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch((error) => {
                    setIsButtonDisabled(false);
                    console.log(error);
                });
        } else {
            Swal.fire({
                title: "Please log in first!!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login now!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-8">
            <figure>
                <img className="w-full object-cover h-60" src={image} alt="classimg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-serif">Class Name: {className}</h2>
                <p className="font-serif">Instructor name: {instructorName}</p>
                <p>Avialable seat: {availableSeats}</p>
                <p>Class Price: {price}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleSelectClass(data)}
                        className="btn btn-primary"
                        disabled={isButtonDisabled}
                    >
                        {isButtonDisabled ? "Selected" : "Select"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClassCardDetails;
