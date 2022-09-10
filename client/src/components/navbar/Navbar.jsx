import "./navbar.scss";
import TutorAppLogo from "../../images/TutorAppLogo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-icon">
                    <img src={TutorAppLogo} alt="" className="navbar-image" />
                    <span className="navbar-icon-text">TutorMe</span>
                </div>
                <div className="navbar-option">
                    <ul className="navbar-items">
                        <li className="navbar-item">Home</li>
                        <li className="navbar-item">Service</li>
                        <li className="navbar-item">About</li>
                    </ul>
                </div>
                <div className="navbar-buttons">
                    <button className="navbar-button">Register</button>
                    <button className="navbar-button">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
