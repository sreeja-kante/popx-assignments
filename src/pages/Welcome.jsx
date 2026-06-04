import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";
import FooterNav from "../components/FooterNav.jsx";

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="page">
            <div className="mobile-container">
                <div className="content">
                    <h1>Welcome to PopX</h1>

                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                    </p>

                    <button
                        className="primary-btn"
                        onClick={() => navigate("/create")}
                    >
                        Create Account
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={() => navigate("/login")}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>


            <FooterNav />
        </div>
    );
}

export default Welcome;