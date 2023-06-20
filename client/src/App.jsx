import "./app.scss";
import Home from "./pages/home/Home";
import Subject from "./components/subject/Subject";
import Navbar from "./components/navbar/Navbar";
import Tutor from "./components/tutor/Tutor";

const App = () => {
    return (
        <>
            {/* <Home /> */}
            <Navbar />
            {/* <Subject /> */}
            <Tutor />
        </>
    );
};

export default App;
