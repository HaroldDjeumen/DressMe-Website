import { useState } from "react";
import {
    FaBars,
    FaHeart,
    FaShoppingBag,
    FaTimes,
    FaUser,
} from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";
import SearchBar from "./search-bar.jsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navbar_items_small = [
        { label: "Home", href: "/" },
        { label: "Shop", href: "/shop" },
        { label: "Account", href: "/account" },
        { label: "Cart", href: "/cart" },
        { label: "FAQs", href: "/faqs" },
        { label: "Contact", href: "/contact" },
        { label: "About Us", href: "/about-us" },
        { label: "Wishlist", href: "/wishlist" },
        { label: "Login / Register", href: "/sign-up" },
    ];

    const navbar_items_large = [
        { label: <FaHeart size={22} />, href: "/wishlist" },
        { label: <FaUser size={22} />, href: "/account" },
        { label: <FaShoppingBag size={22} />, href: "/cart" },
    ];

    return (
        <nav className="bg-white shadow-lg fixed z-50 w-full">
            <div className="mx-auto px-2 lg:px-6 lg:p-2">
                <div className="flex justify-between p-1">
                    <span className="text-2xl font-bold text-emerald-700 p-1">
                        <GiMirrorMirror size={40} />
                    </span>
                    {/* Desktop Menu */}
                    <SearchBar />
                    <div className="hidden md:flex items-center justify-between">
                        {navbar_items_large.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-neutral-700 hover:text-emerald-700 rounded-md text-sm font-medium lg:text-base lg:px-3 transition duration-300ms ease-in-out "
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center justify-between">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-neutral-800 hover:text-emerald-700"
                        >
                            {isOpen ? (
                                <FaTimes size={24} />
                            ) : (
                                <FaBars size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navbar_items_small.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-neutral-800 hover:text-emerald-700 block px-3 py-2 rounded-md text-base font-medium no-underline"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
