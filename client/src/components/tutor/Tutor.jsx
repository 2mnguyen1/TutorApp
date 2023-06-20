import React from "react";
import "./tutor.scss";
import { Star, MilitaryTech, Groups3, AccessTime } from "@mui/icons-material";

export default function Tutor() {
    return (
        <div className="tutor-container">
            <div className="tutor-wrapper">
                <h1 className="tutor-title">Tutor</h1>
                <h2 className="tutor-name">Minh Nguyen</h2>
                <div className="tutor-role">Math Tutor</div>
                <div className="tutor-rating">
                    <div className="tutor-image"></div>
                    <div className="tutor-infor">
                        <div className="tutor-infor-rating">
                            <Star /> 5.0 Rating
                        </div>
                        <div className="tutor-reviews">
                            <MilitaryTech />
                            999 Reviews
                        </div>
                        <div className="tutor-students">
                            <Groups3 />
                            1,000,000 Students
                        </div>
                        <div className="tutor-hours">
                            <AccessTime />
                            500 hours of tutoring
                        </div>
                    </div>
                </div>
                <div className="tutor-description">
                    I'm Minh. I'm a developer with a pssion for teaching. I'm
                    Minh, I'm a developer with a passion for teaching. I'm the
                    lead instructor at the London App Brewery, London's leading
                    Programming Bootcamp. I've helped hundreds of thousands of
                    students learn to code and change their lives by becoming a
                    developer. I've been invited by companies such as Twitter,
                    Facebook and Google to teach their employees.
                </div>
                <div className="tutor-student-review">
                    <div className="tutor-student-rating">
                        <span>Student Reviews</span>{" "}
                        <span className="stars">
                            5.0 <Star /> <Star /> <Star /> <Star /> <Star />
                        </span>
                    </div>
                    <div className="tutor-student-comment">
                        <div className="student-comment-wrapper">
                            <div className="students-comments">
                                <div className="student-comment">
                                    <div className="student-icon">
                                        <img />
                                    </div>
                                    <div className="student-contents">
                                        <div className="student-rating-history">
                                            <div className="student-name">
                                                Minh Nguyen
                                            </div>
                                            <div className="student-rating">
                                                <Star /> <Star /> <Star />{" "}
                                                <Star /> <Star />
                                            </div>
                                        </div>
                                        <div className="student-words">
                                            Wow! He is awesome
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="students-comments">
                                <div className="student-comment">
                                    <div className="student-icon">
                                        <img />
                                    </div>
                                    <div className="student-contents">
                                        <div className="student-rating-history">
                                            <div className="student-name">
                                                Minh Nguyen
                                            </div>
                                            <div className="student-rating">
                                                <Star /> <Star /> <Star />{" "}
                                                <Star /> <Star />
                                            </div>
                                        </div>
                                        <div className="student-words">
                                            Wow! He is awesome
                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="student-reviews">
                            <div className="student-comment-stars">
                                <div>Leave a review: </div>
                                <span>
                                    {" "}
                                    <Star /> <Star /> <Star /> <Star /> <Star />
                                </span>
                            </div>
                            <div className="student-texts">
                                <textarea></textarea>
                            </div>
                            <button className="student-submit-btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
