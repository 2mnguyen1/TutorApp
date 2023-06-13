import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import { ArrowForward } from "@mui/icons-material";
import React from "react";
import vectorImg1 from "../../images/Vector1.png";
import vectorImg2 from "../../images/Vector2.png";
import humanImg from "../../images/product.png";

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
                    <button className="home-intro-button">
                        Get Started
                        <ArrowForward />
                    </button>
                </div>
                <div className="home-picture">
                    <img className="vector1" alt="" src={vectorImg1} />
                    <img className="vector2" alt="" src={vectorImg2} />
                    <img className="product" alt="" src={humanImg} />
                </div>
            </div>
        </div>
    );
};

export default Home;
