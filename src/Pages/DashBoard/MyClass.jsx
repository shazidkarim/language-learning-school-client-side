import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClass = () => {
    const [cart,refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/myclass/${item._id}`,{
                method:'DELETE',

              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div className="w-full">
            <Helmet>
                <title> language learning | my class </title>
            </Helmet>
            <div className="uppercase flex h-[60px] items-center font-semibold justify-evenly">
                <h2 className="text-3xl">total classes: {cart.length} </h2>
                <h2 className="text-3xl">total price: ${total} </h2>
              <Link to={'/dashboard/payment'}>  <button className="btn btn-sm bg-orange-600">pay</button></Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,index)=>    <tr key={item._id}>
                                <th>
                                  {index+1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {item.className}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">BY {item.instructorName}</span>
                                </td>
                                <td> $ {item.price}</td>
                                <th>
                                    <button onClick={()=>handleDelete(item)} className="btn bg-red-200 btn-ghost btn-xs"> <FaTrashAlt></FaTrashAlt> delete</button>
                                </th>
                            </tr> )
                        }
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;