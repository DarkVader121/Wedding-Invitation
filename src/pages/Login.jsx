import { useState } from "react";
import { loginUser } from "../services/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const loginFunctionality = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Please enter your email and password.");
            return;
        }

        setLoading(true);

        loginUser(email.trim(), password)
            .then(({ error }) => {
                if (error) {
                    alert(error.message);
                    return;
                }

                window.location.href = "/uploaded-images";
            })
            .catch((error) => {
                alert(error.message || "Something went wrong.");
            })
            .finally(() => {
                setLoading(false);
            });
    };


    return (
        <section className="h-[100vh] bg-light overflow-y-scroll">
            <div className="container">

                <a
                    className="btn btn-primary"
                    href="/"
                    style={{ backgroundColor: "#6c849c" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-7"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                        />
                    </svg>
                </a>

                <p className="mt-7 text-2xl text-dark">
                    Login
                </p>

                <p className="text-dark">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>

                <form onSubmit={loginFunctionality}>

                    <p className="mt-7 text-lg">
                        Email Address:
                    </p>

                    <input
                        id="loginEmail"
                        type="email"
                        placeholder="Enter your email address"
                        className="form-control !bg-gray-100"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <p className="mt-3 text-lg">
                        Password:
                    </p>

                    <input
                        id="loginPassword"
                        type="password"
                        placeholder="Enter your password"
                        className="form-control !bg-gray-100"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        id="signInButton"
                        type="submit"
                        className="btn btn-primary mt-7"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Login;