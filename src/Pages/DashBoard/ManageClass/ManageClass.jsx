import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
  const [classes, setClasses] = useState([]);

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
                <td> <button className="btn btn-sm btn-success">Approve</button>
                  <button className="btn btn-sm btn-danger">Deny</button></td>
                <td>
                 
                  <button className="btn btn-sm btn-primary">Send Feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
