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
        </div>
    );
};

export default Home;
