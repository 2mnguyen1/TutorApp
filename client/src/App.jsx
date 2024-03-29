import "./app.scss";
import Home from "./pages/home/Home";
import Subject from "./components/subject/Subject";
import Navbar from "./components/navbar/Navbar";
import Tutor from "./components/tutor/Tutor";
import CreateTutor from "./components/createTutor/CreateTutor";
import BookingForm from "./components/bookingForm/BookingForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppointmentLists from "./components/appointmentLists/AppointmentLists";

const App = () => {
    return (
        <>
            {/* <Home /> */}
            <Navbar />
            {/* <Subject /> */}
            {/* <Tutor /> */}
            {/* <div className="create-tutor">
                <CreateTutor />
            </div> */}
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BookingForm />
            </LocalizationProvider> */}
            <AppointmentLists />
        </>
    );
};

export default App;
