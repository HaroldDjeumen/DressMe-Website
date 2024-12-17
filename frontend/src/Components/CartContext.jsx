import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingIndex = prevItems.findIndex(
                (cartItem) => cartItem.name === item.name
            );

            if (existingIndex !== -1) {
                const updatedCart = [...prevItems];
                updatedCart[existingIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (indexToRemove) => {
        setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
    };

    // Increase product quantity
const increaseQuantity = (index) => {
    setCartItems((prevItems) => {
        return prevItems.map((item, i) => {
            if (i === index) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
    });
};

// Decrease product quantity
const decreaseQuantity = (index) => {
    setCartItems((prevItems) => {
        return prevItems
            .map((item, i) => {
                if (i === index) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            })
            .filter((item) => item.quantity > 0); // Remove item if quantity is 0
    });
};

    // Calculate total price
    const getTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price.replace("R", ""));
            return total + price * item.quantity;
        }, 0);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotal }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
