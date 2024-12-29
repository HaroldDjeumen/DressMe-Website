import Products from "../Components/product-shop.jsx";
import Navbar from "../Components/navbar.jsx";
import { CartProvider } from "../Components/CartContext.jsx";
import Footer from "../Components/footer.jsx";
import SignUp from "../Components/signup.jsx";

function Shop() {
    return (
        <CartProvider>
            <div id="shop">
                <Navbar />
                <Products />
                <SignUp />
                <Footer />
            </div>
        </CartProvider>
    );
}

export default Shop;
