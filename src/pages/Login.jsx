import { useNavigate } from "react-router-dom";
import "./../styles/login.css";
import FooterNav from "../components/FooterNav.jsx";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/profile");
    };

    return (
        <div className="page">
            <div className="mobile-container">

                <div className="login-wrapper">

                    <h1>
                        Signin to your
                        <br />
                        PopX account
                    </h1>

                    <p>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing elit,
                    </p>

                    <div className="input-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter email address" />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter password" />
                    </div>

                    <button
                        className="login-btn"
                        onClick={handleLogin}
                    >
                        Login
                    </button>

                </div>

            </div>


            <FooterNav />
        </div>
    );
}

export default Login;