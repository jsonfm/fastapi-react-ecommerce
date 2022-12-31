import { useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "@/services/auth.service";
import { API_URL } from "@/api";


export function Login() {
    const [state, setState] = useState({ email: "", password: ""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.login({email: state.email, password: state.password});
        }catch(err) {
            console.error(err);
        }
    }  

    return (
        <section className="min-h-screen">
            <div className="flex flex-col md:flex-row">
                <div className="hidden md:h-screen w-full md:w-1/2 md:flex items-center justify-center">
                    <img
                        src="https://i.pinimg.com/originals/1b/60/22/1b602231a05c7a50fec7ebe8979035ae.png"
                        loading="lazy"
                    />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                <form 
                    onSubmit={handleSubmit}
                    className="shadow-xl rounded-xl w-full max-w-[400px] px-8 py-8 inline-flex flex-col items-center"
                >
                    <Link 
                        to="/"
                        className="mb-16 text-2xl text-center uppercase block text-gray-500"
                    >
                        Login
                    </Link>
                    <div className="flex flex-col py-2 mb-4 w-full">
                        <label
                            className="font-bold"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="input py-2 outline-none border-b-2"
                            placeholder="Email@example.com"
                            onChange={(e) => setState({...state, email: e.target.value})}
                        />
                    </div>
                    <div className="flex flex-col py-2 mb-6 w-full">
                        <label
                            className="font-bold"
                        >
                            Password
                        </label>
                        <input
                            className="input py-2 outline-none border-b-2"
                            type="password"
                            placeholder="*****"
                            onChange={(e) => setState({...state, password: e.target.value})}
                        />
                    </div>

                    <button
                        className="btn bg-yellow-500 text-white rounded-lg w-32"
                    >
                        Entrar
                    </button>

                    <Link className="block text-center w-full mt-6">
                        Don't you have an account?
                    </Link>
                </form>
                </div>
            </div>
        </section>
    )
}
