import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/home.jsx";
import Shop from "./Pages/shop.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home */}
                <Route path="/shop" element={<Shop />} /> {/* Shop Page */}
            </Routes>
        </Router>
    );
}

export default App;