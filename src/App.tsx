import { Routes, Route } from "react-router-dom";
import { Home, Advertise } from "./pages";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/advertise" element={<Advertise />} />
        </Routes>
    );
}

export default App;
