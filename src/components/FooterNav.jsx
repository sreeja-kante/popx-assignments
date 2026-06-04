import { useLocation, useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import "../styles/footerNav.css";

function FooterNav() {
    const navigate = useNavigate();
    const location = useLocation();

    const steps = ["/", "/login", "/create", "/profile"];

    const currentIndex = steps.indexOf(location.pathname);

    const goPrev = () => navigate(steps[currentIndex - 1] || "/");
    const goNext = () => navigate(steps[currentIndex + 1] || steps[currentIndex]);

    return (
        <div className="footer-nav">

            {/* CLEAN HOME ICON */}
            <span className="nav-icon" onClick={() => navigate("/")}>
    <FiHome size={22} />
</span>

            <span onClick={goPrev}>‹</span>

            <span>
                {currentIndex + 1} of {steps.length}
            </span>

            <span onClick={goNext}>›</span>
        </div>
    );
}

export default FooterNav;