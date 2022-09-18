import "./home.scss";
import Navbar from "../../components/navbar/Navbar";

import React from "react";

const Home = () => {
    return (
        <div className="home-container">
            <div className="background-bubble1"></div>
            <div className="background-bubble2"></div>
            <div className="home-top">
                <Navbar />
            </div>
            <div className="home-intro">
                <div className="home-intro-content">
                    <div className="home-intro-title">
                        Make your grade <span>better</span> with us
                    </div>
                    <div className="home-intro-desc">
                        We are here to help enhancing your skills and provides
                        our best service to help you with homework and work
                        load.
                    </div>
                    <button className="navbar-button">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
