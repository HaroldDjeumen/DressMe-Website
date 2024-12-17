import * as React from "react";
import Navbar from "../Components/navbar.jsx";
import Hero from "../Components/hero.jsx";
import Statistics from "../Components/statistics.jsx";
import ShopByGrade from "../Components/shop-by-grade.jsx";
import ShopBySubject from "../Components/shop-by-subject.jsx";
import Footer from "../Components/footer.jsx";
import Features from "../Components/features.jsx";
import Process from "../Components/process.jsx";
import FAQ from "../Components/faq.jsx";
import SignUp from "../Components/signup.jsx";
import { CartProvider } from "../Components/CartContext";
import Products from "../Components/product.jsx";
import Cart from "../Components/Cart.jsx";



function Home() {
    return (
        <CartProvider>
        <div id="home-page">
            <Navbar />
            <Hero />
            <Statistics />
            <Features />
            {/* <Process /> */}
            <FAQ />
            <SignUp />
            <Footer />
            <Products />
            <Cart />
        </div>
        </CartProvider>
    );
}

export default Home;
