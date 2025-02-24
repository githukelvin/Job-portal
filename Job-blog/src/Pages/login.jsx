import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    return (
        <div className=" grid h-dvh place-content-center ">
            <div className="grid mx-auto bg-[#234eac] p-[3em] rounded-2xl place-items-center">
                <form className="col-md-4 mt-3 pt-3 pb-3">
                    {"" !== notice &&
                        <div className="alert alert-warning" role="alert">
                            {notice}
                        </div>
                    }
                    <div className="form-floating flex flex-col-reverse gap-[1em] mb-3">
                        <input type="email" className="form-control py-[1em] px-6 text-[#fff] rounded-2xl" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    </div>
                    <div className="form-floating flex flex-col-reverse gap-[1em] mb-3">
                        <input type="password" className="form-control py-[1em] px-6 text-[#fff] rounded-2xl" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary text-xl cursor-pointer bg-[#fff] rounded-full px-3 py-3" onClick={(e) => loginWithUsernameAndPassword(e)}>Submit</button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>Need to sign up for an account? <Link to="/signup">Click here.</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login