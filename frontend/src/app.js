import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./Pages/home";
import Shop from "./Pages/shop";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </Router>
    );
}

export default App;
