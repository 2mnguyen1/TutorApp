import React from "react";
import "./subject.scss";

export default function Subject() {
    return (
        <>
            <div className="subject-container">
                <div className="subject-categories-wrapper">
                    <div className="subject-categories-title">
                        Tutors by Categories
                        <br />
                        <span>(Click to see tutor for a subject)</span>
                    </div>
                    <div className="subject-categories">
                        <div className="subject-category">Mathematics</div>
                        <div className="subject-category">English</div>
                        <div className="subject-category">Physics</div>
                        <div className="subject-category">Chemistry</div>
                        <div className="subject-category">Computer Science</div>
                        <div className="subject-category">Economic</div>
                    </div>
                </div>
                <div className="subject-tutors-wrapper">
                    <div className="subject-tutors-title">Top Tutors</div>
                    <div className="subject-tutors-container">
                        <div className="subject-tutor">
                            <div className="subject-tutor-image"></div>
                            <div className="subject-tutor-description">
                                Tutoring Mathematics. You don't know how to
                                count!
                            </div>
                            <div className="subject-tutor-name">
                                Minh Nguyen
                            </div>
                            <div className="subject-tutor-rating">5.0<span> (1,234)</span></div>
                            <div className="subject-tutor-pay">$49.99/hr</div>
                            <div className="subject-tutor-book">
                                <button>Schedule</button>
                            </div>
                        </div>
                        <div className="subject-tutor">
                            <div className="subject-tutor-image"></div>
                            <div className="subject-tutor-description">
                                Tutoring Mathematics. You don't know how to
                                count!
                            </div>
                            <div className="subject-tutor-name">
                                Minh Nguyen
                            </div>
                            <div className="subject-tutor-rating">5.0</div>
                            <div className="subject-tutor-pay">$49.99/hr</div>
                            <div className="subject-tutor-book">
                                <button>Schedule</button>
                            </div>
                        </div>
                        <div className="subject-tutor">
                            <div className="subject-tutor-image"></div>
                            <div className="subject-tutor-description">
                                Tutoring Mathematics. You don't know how to
                                count!
                            </div>
                            <div className="subject-tutor-name">
                                Minh Nguyen
                            </div>
                            <div className="subject-tutor-rating">5.0</div>
                            <div className="subject-tutor-pay">$49.99/hr</div>
                            <div className="subject-tutor-book">
                                <button>Schedule</button>
                            </div>
                        </div>
                        <div className="subject-tutor">
                            <div className="subject-tutor-image"></div>
                            <div className="subject-tutor-description">
                                Tutoring Mathematics. You don't know how to
                                count!
                            </div>
                            <div className="subject-tutor-name">
                                Minh Nguyen
                            </div>
                            <div className="subject-tutor-rating">5.0</div>
                            <div className="subject-tutor-pay">$49.99/hr</div>
                            <div className="subject-tutor-book">
                                <button>Schedule</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
