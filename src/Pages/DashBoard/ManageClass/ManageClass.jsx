import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
    const [classes, setClasses] = useState([]);
    const [showModal, setShowModal] = useState(false); // State to control the modal visibility

    useEffect(() => {
        fetch("http://localhost:5000/addclass")
            .then((response) => response.json())
            .then((data) => {
                setClasses(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="w-full">
            <Helmet>
                <title>language learning | manage class</title>
            </Helmet>
            <h2 className="text-3xl fornt-semibold text-center">
                add class:{classes.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classData, index) => (
                            <tr key={classData._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img className="w-20 h-20" src={classData.image} alt="" />
                                </td>
                                <td>{classData.className}</td>
                                <td>{classData.instructorName}</td>
                                <td>{classData.email}</td>
                                <td>{classData.availableSeats}</td>
                                <td>{classData.price}</td>
                                <td>
                                    <button className="btn btn-sm btn-success">Approve</button>
                                    <button className="btn btn-sm btn-danger">Deny</button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={openModal}
                                    >
                                        Send Feedback
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h3 className="text-2xl font-semibold mb-4">Send Feedback</h3>
                        <textarea
                            className="w-full h-40 p-2 mb-4 border border-gray-300 rounded"
                            placeholder="Enter your feedback here..."
                        ></textarea>
                        <div className="flex justify-end gap-8">
                            <button className="btn btn-primary" onClick={closeModal}>
                                send
                            </button>
                            <button className="btn btn-primary" onClick={closeModal}>
                                close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ManageClass;
