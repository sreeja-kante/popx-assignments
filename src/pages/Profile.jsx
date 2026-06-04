import "../styles/profile.css";
import FooterNav from "../components/FooterNav.jsx";
function Profile() {
    return (
        <div className="page">
            <div className="mobile-container">

                <div className="profile-header">
                    <h2>Account Settings</h2>
                </div>

                <div className="profile-content">

                    <div className="user-info">

                        <div className="image-wrapper">
                            <img
                                src="https://i.pravatar.cc/150?img=47"
                                alt="profile"
                            />

                            <div className="camera-icon">
                                📷
                            </div>
                        </div>

                        <div>
                            <h3>Marry Doe</h3>
                            <p>Marry@gmail.com</p>
                        </div>

                    </div>

                    <p className="description">
                        Lorem Ipsum Dolor Sit Amet, Consetetur
                        Sadipscing Elitr, Sed Diam Nonumy
                        Eirmod Tempor Invidunt Ut Labore Et
                        Dolore Magna Aliquyam Erat, Sed Diam
                    </p>

                    <div className="divider" />

                    <div className="empty-space" />

                    <div className="divider" />

                </div>

            </div>


            < FooterNav/>
        </div>
    );
}

export default Profile;
