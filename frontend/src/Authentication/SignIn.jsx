

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { passwordLogin, googleLogin } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        passwordLogin(data.email, data.password)
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700">
                <div className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
                            Welcome Back
                        </h1>
                        <p className="text-gray-400">Sign in to continue to your account</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700/30 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-1">Email is required</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700/30 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Enter your password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <p className="text-red-400 text-sm mt-1">Password is required</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all font-semibold shadow-lg"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-gray-800/40 text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-2 py-3 border border-gray-600 rounded-lg hover:bg-gray-700/30 transition-colors text-white"
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
                        <span className="font-medium">Continue with Google</span>
                    </button>

                    <p className="text-center text-sm text-gray-400">
                        Do not have an account?{" "}
                        <a href="/signup" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;