import * as React from "react";
import Navbar from "../Components/navbar.jsx";
import Hero from "../Components/hero.jsx";
import Footer from "../Components/footer.jsx";
import Features from "../Components/features.jsx";
import SignUp from "../Components/signup.jsx";
import Products from "../Components/product.jsx";



function Home() {
    return (
        <CartProvider>
        <div id="home-page">
            <Navbar />
            <Hero />
            <Features />
            <Products />
            <SignUp />
            <Footer />
            <Products />
        </div>
        </CartProvider>
    );
}

export default Home;
