import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/createAccount.css";
import FooterNav from "../components/FooterNav";
function CreateAccount() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "yes",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        navigate("/profile");
    };

    return (
        <div className="page">
            <div className="mobile-container">
                <div className="register-wrapper">
                    <h1>
                        Create your
                        <br />
                        PopX account
                    </h1>

                    <div className="input-group">
                        <label>Full Name*</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Marry Doe"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Phone number*</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Marry Doe"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Email address*</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Marry Doe"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password *</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Marry Doe"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Company name</label>
                        <input
                            type="text"
                            name="company"
                            placeholder="Marry Doe"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="agency-section">
                        <p>
                            Are you an Agency?<span>*</span>
                        </p>

                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="agency"
                                    value="yes"
                                    checked={formData.agency === "yes"}
                                    onChange={handleChange}
                                />
                                Yes
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    checked={formData.agency === "no"}
                                    onChange={handleChange}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    <button
                        className="create-account-btn"
                        onClick={handleSubmit}
                    >
                        Create Account
                    </button>
                </div>
            </div>


            <FooterNav/>
        </div>
    );
}

export default CreateAccount;