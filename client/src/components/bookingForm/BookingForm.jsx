import React from "react";
import "./bookingForm.scss";
import { MultiSectionDigitalClock, DateCalendar } from "@mui/x-date-pickers";

export default function BookingForm({ children }) {
    return (
        <div className="date-time-components">
            <div className="date-time-picker">
                <DateCalendar />
                <MultiSectionDigitalClock className="time-picker"/>
            </div>
            <button className="book-tutor-form-btn">Book Now!</button>
        </div>
    );
}
