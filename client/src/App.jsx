import "./app.scss";
import Home from "./pages/home/Home";
import Subject from "./components/subject/Subject";
import Navbar from "./components/navbar/Navbar";
import Tutor from "./components/tutor/Tutor";
import CreateTutor from "./components/createTutor/CreateTutor";

const App = () => {
    return (
        <>
            {/* <Home /> */}
            <Navbar />
            {/* <Subject /> */}
            {/* <Tutor /> */}
            <div className="create-tutor">
                <CreateTutor />
            </div>
        </>
    );
};

export default App;
