import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("https://summer-camp-school-server-side-sable.vercel.app/payments")
            .then((response) => response.json())
            .then((data) => {
                setClasses(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="w-full">
        <Helmet>
            <title>language learning | payment history  </title>
        </Helmet>
        <h2 className="text-3xl fornt-semibold text-center">
            add class:{classes.length}
        </h2>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>id </th>
                        <th> class ID </th>
                        <th> email</th>
                        <th>transaction Id</th>
                        <th>Price</th>
                        <th>quantity </th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classData, index) => (
                        <tr key={classData._id}>
                            <td>{index + 1}</td>
                            <td>{classData._id}</td>
                            <td>{classData.class}</td>
                            <td>{classData.email}</td>
                            <td>{classData.transactionId}</td>
                            <td>{classData.price}</td>
                            <td>{classData.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default PaymentHistory;