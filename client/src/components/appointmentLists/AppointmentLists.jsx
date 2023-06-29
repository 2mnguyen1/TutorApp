import React from "react";
import "./apppointmentLists.scss";

export default function AppointmentLists() {
    return (
        <div className="appointment-lists">
            <div className="appointment-wrappers">
                <div className="appointment-title">My Appointments</div>
                <div className="appointment-lists">
                    <div className="appointment-list">
                        <div className="appointment-date-time-start">
                            <div className="date-time-start-title">
                                Start date & time
                            </div>
                            <div className="date-time-start-time">
                                01.09.2021, 09:00 AM
                            </div>
                        </div>
                        <div className="appointment-date-time-end">
                            <div className="date-time-end-title">
                                End date & time
                            </div>
                            <div className="date-time-end-time">
                                01.09.2021, 09:30 AM
                            </div>
                        </div>
                        <div className="appointment-complete">
                            <div className="circle-complete"></div>
                            <div>Complete</div>
                        </div>
                        <div className="appointment-cancel">
                            <div className="circle-cancel"></div>
                            <div>Cancel</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
