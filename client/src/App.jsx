import "./app.scss";
import Home from "./pages/home/Home";
import Subject from "./components/subject/Subject";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return (
        <>
            {/* <Home /> */}
            <Navbar />
            <Subject />
        </>
    );
};

export default App;
