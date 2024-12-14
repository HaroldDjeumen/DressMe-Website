import * as React from "react";
import { FaCreditCard, FaMoneyBill, FaShoppingCart } from "react-icons/fa";

const Hero = () => {
    return (
        <div
            id="hero-container"
            className="bg-red-100/30 overflow-hidden pt-32 lg:pt-8 pb-16 px-8 min-h-screen"
        >
            <div className="flex flex-col lg:flex-row justify-between items-center">
                {/* Hero Text */}
                <div
                    id="text-elements-hero"
                    className="flex flex-col space-y-2 text-left md:pb-12"
                >
                    <h1 className="text-4xl lg:text-7xl text-neutral-800 font-extrabold">
                        Unlock Savings & Earn Cash with{" "}
                        <span className="text-red-900">Booklidio</span>
                    </h1>
                    <p className="text-xl text-neutral-500 font-normal">
                        Stop overspending on textbooks! With Booklidio, you can
                        grab unbeatable deals on quality used books and turn
                        your old textbooks into extra cash effortlessly. Join
                        thousands of savvy students who are saving and earning
                        today!
                    </p>
                    <div className="flex items-center justify-center lg:justify-start pt-8 gap-6">
                        <button
                            type="button"
                            className="flex justify-between items-center bg-red-900 rounded-lg text-white font-bold text-xl px-8 py-3  hover:scale-105 hover:shadow-md hover:shadow-red-100 transition duration-300ms ease-in-out"
                        >
                            <span className="pr-2">
                                <FaShoppingCart color="#ffffff" size="1.5em" />
                            </span>
                            Browse
                        </button>
                        <button
                            type="button"
                            className="flex justify-between items-center bg-white border-2 border-red-900 rounded-lg text-red-900 font-bold text-xl px-8 py-3 hover:scale-105 hover:shadow-md hover:shadow-red-100 transition duration-300ms ease-in-out"
                        >
                            <span className="pr-2 text-red-900">
                                <FaMoneyBill size="1.5em" />
                            </span>
                            Sell Books
                        </button>
                    </div>
                </div>
                <div id="image-container">
                    <img src={require("../Assets/hero.png")} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
