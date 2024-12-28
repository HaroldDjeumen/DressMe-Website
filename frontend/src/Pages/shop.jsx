import Products from "../Components/product-shop.jsx";
import Navbar from "../Components/navbar.jsx";
import { CartProvider } from "../Components/CartContext.jsx";

function Shop() {
    return (
        <CartProvider>
            <div id="shop">
                <Navbar />
                <Products />
            </div>
        </CartProvider>
    );
}

export default Shop;
