import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleDelete=(user)=>{

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>
                    language learning | all users
                </title>
            </Helmet>
            <h2 className="text-3xl fornt-semibold text-center">all users:{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name} </td>
                                <td>{user.email}</td>
                                <td>{
                                     user.role === 'admin'? 'admin' : <button onClick={()=>handleDelete(user)} className="btn bg-red-200 btn-ghost btn-xs"> <FaUserShield></FaUserShield> make admin</button>
                                    }</td>
                                <td> <button onClick={()=>handleDelete(user)} className="btn bg-red-200 btn-ghost btn-xs"> <FaTrashAlt></FaTrashAlt> delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;