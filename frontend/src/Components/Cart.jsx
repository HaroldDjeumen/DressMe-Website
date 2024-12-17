import React from "react";
import { useCart } from "../Components/CartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Cart = () => {
    const { cartItems, getTotal, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    {/* Cart Items */}
                    <ul>
                        {cartItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between py-4 border-b"
                            >
                                {/* Remove Icon */}
                                <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-red-500 hover:text-red-700 mr-4"
                                >
                                    <RiDeleteBin6Line size={24} />
                                </button>

                                {/* Image and Product Name */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.figure}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                    <div>
                                        <span className="text-lg font-semibold">{item.name}</span>
                                    </div>
                                </div>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => decreaseQuantity(index)}
                                        className="p-1 bg-gray-300 hover:bg-gray-400 rounded"
                                    >
                                        <AiOutlineMinus size={20} />
                                    </button>
                                    <span className="font-bold">{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(index)}
                                        className="p-1 bg-gray-300 hover:bg-gray-400 rounded"
                                    >
                                        <AiOutlinePlus size={20} />
                                    </button>
                                </div>

                                {/* Price */}
                                <span className="text-gray-700 font-bold">
                                    R{(parseFloat(item.price.replace("R", "")) * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Total */}
                    <div className="text-right mt-6">
                        <h2 className="text-2xl font-bold">
                            Total: R{getTotal().toFixed(2)}
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
