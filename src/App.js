import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Signup from "./page/Signup";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
};

export default App;
