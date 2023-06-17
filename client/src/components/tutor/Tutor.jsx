import React from "react";
import "./tutor.scss";

export default function tutor() {
    return (
        <div>
            <div className="tutor-container">
                <h1 className="tutor-title">Tutor</h1>
                <h2 className="tutor-name">
                    Minh Nguyen <span className="tutor-role">Math Tutor</span>
                </h2>
                <div className="tutor-rating">
                    <div className="tutor-image"></div>
                    <div className="tutor-infor">
                        <div className="tutor-infor-rating">5.0 Rating</div>
                        <div className="tutor-">999 Reviews</div>
                        <div className="tutor-students">1,000,000 Students</div>
                        <div className="tutor-hours">500 hours of tutoring</div>
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
                        Student Reviews 5.0
                    </div>
                    <div className="tutor-student-comment">
                        <div className="students-comments"></div>
                        <div className="student-reviews"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
