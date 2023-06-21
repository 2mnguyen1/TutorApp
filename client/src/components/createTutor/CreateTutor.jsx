import React from "react";
import "./createTutor.scss";

export default function CreateTutor() {
    return (
        <>
            <div className="create-tutor-container">
                <div className="create-tutor-wrapper">
                    <div className="create-tutor-title">
                        Welcome to our <span>family</span>
                    </div>
                    <h3 className="create-tutor-intro">
                        Want to become a tutor?
                        <br />
                        <span>(Fillout the form below)</span>
                    </h3>
                    <div className="create-tutor-form">
                        <div className="create-tutor-form-subject">
                            <label for="subject-select">Subject: </label>
                            <select name="subjects" id="subject-select">
                                <option value="">
                                    --Please choose a subject--
                                </option>
                                <option value="math">Math</option>
                                <option value="english">English</option>
                                <option value="physic">Physic</option>
                                <option value="computerScience">
                                    Computer Science
                                </option>
                                <option value="chemistry">Chemistry</option>
                                <option value="physic">Physic</option>
                            </select>
                        </div>
                        <div className="create-tutor-form-education">
                            <div>Education: </div>
                            <div className="create-tutor-form-radio">
                                <div>
                                    <input
                                        type="radio"
                                        id="highSchool"
                                        name="education"
                                        value="highSchool"
                                    />
                                    <label for="highSchool">High School</label>
                                </div>

                                <div>
                                    <input
                                        type="radio"
                                        id="college"
                                        name="education"
                                        value="college"
                                    />
                                    <label for="college">College</label>
                                </div>

                                <div>
                                    <input
                                        type="radio"
                                        id="graduate"
                                        name="education"
                                        value="graduate"
                                    />
                                    <label for="graduate">Graduate</label>
                                </div>
                            </div>
                        </div>
                        <div className="create-tutor-form-experience create-tutor-textarea">
                            <label for="experience">
                                Experience(Discribe any experiences you have
                                regard tutoring):
                            </label>
                            <textarea
                                id="experience"
                                name="experience"
                                required
                            />
                        </div>
                        <div className="create-tutor-form-desc create-tutor-textarea">
                            <label for="desc">
                                Description(Tell us about yourself):
                            </label>
                            <textarea id="desc" name="desc" required />
                        </div>
                        <button className="create-tutor-form-btn">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
