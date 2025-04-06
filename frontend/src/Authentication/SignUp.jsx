

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700">
                <div className="p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
                            Create Account
                        </h1>
                        <p className="text-gray-400">Get started with your free account</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700/30 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Enter your full name"
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <p className="text-red-400 text-sm mt-1">Name is required</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700/30 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">Email is required</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700/30 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Create a password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1">
                                    Password is required
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all font-semibold shadow-lg"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-400">
                        Already have an account?{" "}
                        <a
                            href="/signin"
                            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                        >
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;