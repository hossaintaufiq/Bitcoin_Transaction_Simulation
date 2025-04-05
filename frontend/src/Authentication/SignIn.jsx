
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


// const SignIn = () => {
    // const {passwordLogin, googleLogin} = useContext(AuthContext);
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm()
    // const location = useLocation();
    // const navigate = useNavigate();

    // const onSubmit = (data) => {
    //     //sign in with email and password
    //     passwordLogin(data.email, data.password)
    //     .then(result => {
    //         console.log(result.user);
    //         // navigte to state or home
    //         navigate(location?.state ? location.state : '/');
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
        
    // }
    // const handleGoogleLogin = () => {
    //     // console.log('google login works')
    //     googleLogin()
    //     .then(result => {
    //         console.log(result.user);
    //         // navigte to state or home
    //         navigate(location?.state ? location.state : '/');
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     })
    // }
    
//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col ">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">Login now!</h1>

//                 </div>
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                         <div className="card-body">
//                             <fieldset className="fieldset">
                               

//                                 <label className="fieldset-label">Email</label>
//                                 <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
//                                 {/* errors will return when field validation fails  */}
//                                 {errors.email && <span className='text-red-600'>This field is required</span>}
//                                 <label className="fieldset-label">Password</label>
//                                 <input type="password" className="input" placeholder="Password" {...register("password", { required: true })} />
//                                 {/* errors will return when field validation fails  */}
//                                 {errors.password && <span className='text-red-600'>This field is required</span>}
//                                 <div><a className="link link-hover">Forgot password?</a></div>
//                                 <button className="btn btn-neutral mt-4">Login</button>
//                             </fieldset>
//                         </div>
//                     </form>
//                     <p className="text-center pb-2">Sign In With <span onClick={handleGoogleLogin} className="text-blue-600 font-bold cursor-pointer">Google</span></p>
                    
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;


// new code 
const SignIn = () => {
    // ... existing logic remains unchanged
    const {passwordLogin, googleLogin} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        //sign in with email and password
        passwordLogin(data.email, data.password)
        .then(result => {
            console.log(result.user);
            // navigte to state or home
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
        
    }
    const handleGoogleLogin = () => {
        // console.log('google login works')
        googleLogin()
        .then(result => {
            console.log(result.user);
            // navigte to state or home
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
    }
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl">
                <div className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                        <p className="text-gray-500">Sign in to continue to your account</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Enter your password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.7663 12.2764C23.7663 11.4607 23.6999 10.6406 23.5588 9.83807H12.2402V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.1902C22.4608 19.0139 23.7663 15.9274 23.7663 12.2764Z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3274 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50697 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.50253 14.3003C5.00011 12.8099 5.00011 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                                fill="#FBBC04"
                            />
                            <path
                                d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                                fill="#EA4335"
                            />
                        </svg>
                        <span className="font-medium text-gray-700">Continue with Google</span>
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Dont have an account?{" "}
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;