import * as React from "react";
import Navbar from "../Components/navbar.jsx";
import Hero from "../Components/hero.jsx";
import Footer from "../Components/footer.jsx";
import Features from "../Components/features.jsx";
import SignUp from "../Components/signup.jsx";
import Products from "../Components/product-list.jsx";

function Home() {
    return (
        <div id="home-page">
            <Navbar />
            <Hero />
            <Features />
            <Products />
            <SignUp />
            <Footer />
        </div>
    );
}

export default Home;
