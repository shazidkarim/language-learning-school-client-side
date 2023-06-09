import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (data) => {
        try {
            const { email, password } = data;
            console.log(email, password);
            const result = await signIn(email, password);
            const user = result.user;
            console.log(user);
            reset();
            Swal.fire({
                title: 'Successfully log in',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, {replace: true});
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Language learning | login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-5">
                        <img src='' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className='text-5xl text-primary font-bold text-center'>Login</h1>
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        name='email'
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                    {errors.email && <span className="text-red-600 font-serif">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register("password", { required: true })}
                                        name='password'
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    {errors.password && <span className="text-red-600 font-serif">This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary' type="submit" value="Login" />
                                </div>
                            </form>

                            <div>
                                <p className='text-danger'></p>
                            </div>
                            <div className='m-auto text-center mb-5'>
                                <button className='btn btn-primary mt-3'>sign in with google</button>
                            </div>
                            <p className='p-4 text-center'>New to Toy Market? Please <Link className='font-bold text-primary' to={'/signup'}>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
