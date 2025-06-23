import * as React from "react";
import Navbar from "../Components/navbar.jsx";
import Hero from "../Components/hero.jsx";
import Footer from "../Components/footer.jsx";
import Features from "../Components/features.jsx";
import SignUp from "../Components/signup.jsx";
import Products from "../Components/product-list.jsx";
import { CartProvider } from "../Components/CartContext.jsx";
import Model from "../Components/model.jsx";
import Creator from "../Components/explorecreator.jsx";
import Cart from "../Components/Cart.jsx";

function Home() {
    return (
        <CartProvider>
            <Model />
            <div id="home-page">
                <Navbar />
                <Hero />
                <Products />
                <Features />
                <SignUp />
                <Footer />
                <Cart/>
            </div>
        </CartProvider>
    );
}

export default Home;
