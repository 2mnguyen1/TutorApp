import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import { ArrowForward, Calculate } from "@mui/icons-material";
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
            {/* ---------------------------- */}
            <div className="subject-containers">
                <div className="subject-container-title">
                    <h3 className="subject-service">Our Services</h3>
                    <h1 className="choose-subject">Choose a subject!</h1>
                </div>
                <div className="subject-lists">
                    <div className="subject-list">
                        <div className="subject-list-icon">
                            <Calculate sx={{ fontSize: 32 }} />
                        </div>
                        <div className="subject-list-title">Math</div>
                        <div className="subject-list-desc">
                            We help develop company mobile apps to be more
                            professional and attractive
                        </div>
                        <div className="subject-list-btn">
                            <button>
                                <ArrowForward
                                    className="arrow-icon"
                                    fontSize="small"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="subject-list">
                        <div className="subject-list-icon">
                            <Calculate sx={{ fontSize: 32 }} />
                        </div>
                        <div className="subject-list-title">Math</div>
                        <div className="subject-list-desc">
                            We help develop company mobile apps to be more
                            professional and attractive
                        </div>
                        <div className="subject-list-btn">
                            <button>
                                <ArrowForward
                                    className="arrow-icon"
                                    fontSize="small"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="subject-list">
                        <div className="subject-list-icon">
                            <Calculate sx={{ fontSize: 32 }} />
                        </div>
                        <div className="subject-list-title">Math</div>
                        <div className="subject-list-desc">
                            We help develop company mobile apps to be more
                            professional and attractive
                        </div>
                        <div className="subject-list-btn">
                            <button>
                                <ArrowForward
                                    className="arrow-icon"
                                    fontSize="small"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="subject-list">
                        <div className="subject-list-icon">
                            <Calculate sx={{ fontSize: 32 }} />
                        </div>
                        <div className="subject-list-title">Math</div>
                        <div className="subject-list-desc">
                            We help develop company mobile apps to be more
                            professional and attractive
                        </div>
                        <div className="subject-list-btn">
                            <button>
                                <ArrowForward
                                    className="arrow-icon"
                                    fontSize="small"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="subject-list">
                        <div className="subject-list-icon">
                            <Calculate sx={{ fontSize: 32 }} />
                        </div>
                        <div className="subject-list-title">Math</div>
                        <div className="subject-list-desc">
                            We help develop company mobile apps to be more
                            professional and attractive
                        </div>
                        <div className="subject-list-btn">
                            <button>
                                <ArrowForward
                                    className="arrow-icon"
                                    fontSize="small"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="subject-list">
                        <div className="subject-list-icon">
                            <Calculate sx={{ fontSize: 32 }} />
                        </div>
                        <div className="subject-list-title">Math</div>
                        <div className="subject-list-desc">
                            We help develop company mobile apps to be more
                            professional and attractive
                        </div>
                        <div className="subject-list-btn">
                            <button>
                                <ArrowForward
                                    className="arrow-icon"
                                    fontSize="small"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------ */}

            <div className="category-container">
                Featured topics by category
                <div className="category-wrapper">
                    <div className="category">
                        High Schools
                        <div>
                            <a>AP Calculus AB</a>
                        </div>
                        <div>
                            <a>AP Physic 1: Algebra-Based</a>
                        </div>
                        <div>
                            <a>AP English Language</a>
                        </div>
                    </div>
                    <div className="category">
                        Colleges
                        <div>
                            <a>Calculus 1</a>
                        </div>
                        <div>
                            <a>Calculus-Based Physic: Mechanics</a>
                        </div>
                        <div>
                            <a>Freshman Composition</a>
                        </div>
                    </div>
                </div>
                <div className="explore-btn">
                    <button>Explore <ArrowForward /></button>
                </div>
            </div>
        </div>
    );
};

export default Home;
