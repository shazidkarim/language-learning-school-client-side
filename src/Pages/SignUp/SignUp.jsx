import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                reset();
                Swal.fire({
                    title: 'Sign Up Successfull',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                
            });
            navigate('/');
    };

    const password = watch("password");
    const confirmPassword = watch("confirm");

    return (
        <>
            <Helmet>
                <title>Language learning | signup</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-5">
                        <img src='' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-5xl text-primary font-bold text-center'>Sign up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600 font-serif">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600 font-serif">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                        })}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    {errors.password?.type === "required" && (
                                        <span className="text-red-600 font-serif">Password is required</span>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-600 font-serif">Password must be at least 6 characters</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-600 font-serif">Password must contain at least one uppercase letter, one digit, and one special character</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register("confirm", {
                                            required: true,
                                            validate: (value) => value === password || "Passwords do not match",
                                        })}
                                        name="confirm"
                                        placeholder="confirm password"
                                        className="input input-bordered"
                                    />
                                    {errors.confirm?.type === "required" && (
                                        <span className="text-red-600 font-serif">This field is required</span>
                                    )}
                                    {errors.confirm?.type === "validate" && (
                                        <p className="text-red-600 font-serif">Passwords do not match</p>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photo URL</span>
                                    </label>
                                    <input type="text" {...register("photo", { required: true })} name='photo' placeholder="photo url" className="input input-bordered" />
                                    {errors.photo && <span className="text-red-600 font-serif">This field is required</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="Sign up" />
                                </div>
                            </form>

                            <div>
                                <p className='text-danger'></p>
                            </div>
                            <div className='m-auto text-center mb-5'>
                                <button className='btn btn-primary mt-3'>sign in with google</button>
                            </div>
                            <p className='p-4 text-center'>New to Toy Market? Please <Link className='font-bold text-primary' to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
