import React from "react";

export default function CreateTutor() {
    return (
        <div className="create-tutor-container">
            <h1 className="create-tutor-title">
                Welcome to our <span>family</span>
            </h1>
            <h3 className="create-tutor-intro">
                Want to become a tutor?<span>(Fillout the form below)</span>
            </h3>
            <div className="create-tutor-form">
                <div className="create-tutor-form-subject">
                    <label for="subject-select">Subject: </label>
                    <select name="subjects" id="subject-select">
                        <option value="">--Please choose a subject--</option>
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
                                name="highSchool"
                                value="highSchool"
                                checked
                            />
                            <label for="highSchool">High School</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="college"
                                name="college"
                                value="college"
                            />
                            <label for="college">College</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                id="graduate"
                                name="graduate"
                                value="graduate"
                            />
                            <label for="graduate">Graduate</label>
                        </div>
                    </div>
                </div>
                <div className="create-tutor-form-experience">
                    <label for="experience">
                        Experience(Discribe any experiences you have regard
                        tutoring):
                    </label>
                    <input
                        type="text"
                        id="experience"
                        name="experience"
                        required
                    />
                </div>
                <div className="create-tutor-form-desc">
                    <label for="desc">
                        Description(Tell us about yourself):
                    </label>
                    <input type="text" id="desc" name="desc" required />
                </div>
            </div>
        </div>
    );
}
