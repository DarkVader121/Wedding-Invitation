import { useState } from "react";
import { loginUser } from "../services/auth";

const Login = () => {
    const [email, setEmail] = useState("erronlapac@gmail.com");
    const [password, setPassword] = useState("qwerty123");
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

                window.location.href = "/manage";
            })
            .catch((error) => {
                alert(error.message || "Something went wrong.");
            })
            .finally(() => {
                setLoading(false);
            });
    };


    return (
        <>
        <section className="h-[100vh] bg-light overflow-y-scroll">
            <div className="container">
                <p className="text-2xl text-dark"> Login </p>
                <p className="text-dark"> Enter your credentials to access the image management dashboard. </p>

                <form onSubmit={loginFunctionality}>

                    <p className="mt-7 text-lg">
                        Email Address:
                    </p>

                    <input
                        id="loginEmail"
                        type="email"
                        placeholder="Enter your email address"
                        className="form-control"
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
                        className="form-control"
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
        <div className="hidden">
            email: erronlapac@gmail.com
            password: qwerty123
        </div>
        </>
    );
};

export default Login;