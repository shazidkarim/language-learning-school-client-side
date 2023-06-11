import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_Image_upload_token;
const AddClass = () => {
    const [axiosSecure]=useAxiosSecure();
    const { register, handleSubmit,reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        console.log(image_hosting_token);
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            headers: {
                'cache-control': 'no-cache'
              },
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            console.log(imgResponse);
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {className,instructorName,email,availableSeats,price} = data;
                const newClass = {className, price: parseFloat(price), instructorName,availableSeats, email, image:imgURL}
                console.log(newClass)
                axiosSecure.post('/addclass', newClass)
                .then(data=>{
                    console.log('after added new class',data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }
    return (
        <div className="w-full p-8 bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <h2 className="text-3xl">Add A Class</h2>
          <div className="form-control w-full">
            <label className="label text-gray-700">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              name="className"
              placeholder="Type here"
              {...register("className", { required: true, maxLength: 80 })}
              className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="form-control w-full my-4">
            <label className="label text-gray-700">
              <span className="label-text">Item Image*</span>
            </label>
            <input
              type="file"
              name="image"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label text-gray-700">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              name="instructorName"
              placeholder="Type here"
              {...register("instructorName", { required: true, maxLength: 80 })}
              className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="form-control w-full">
            <label className="label text-gray-700">
              <span className="label-text">Instructor email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Type here"
              {...register("email", { required: true, maxLength: 80 })}
              className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="form-control w-full">
            <label className="label text-gray-700">
              <span className="label-text">Available seats</span>
            </label>
            <input
              type="text"
              name="availableSeats"
              placeholder="Type here"
              {...register("availableSeats", { required: true, maxLength: 80 })}
              className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="form-control w-full">
            <label className="label text-gray-700">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Type here"
              {...register("price", { required: true, maxLength: 80 })}
              className="input input-bordered w-full focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="form-control w-full text-center mt-8">
            <button className="btn btn-primary">
              <input type="submit" value="Add" />
            </button>
          </div>
        </form>
      </div>
      
    );
   
};
export default AddClass;
