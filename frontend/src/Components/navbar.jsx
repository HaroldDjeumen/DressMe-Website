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
    ];

    const navbar_items_large = [
        { label: <FaHeart size={22} />, href: "/wishlist" },
        { label: <FaUser size={22} />, href: "/account" },
        { label: <FaShoppingBag size={22} />, href: "/cart" },
    ];

    return (
        <nav className="bg-[#b9c3c0] shadow-lg fixed z-50 w-full">
            <div className="mx-auto px-4 lg:px-6">
                <div className="flex justify-between items-center py-3">
                    {/* Logo */}
                    <span className="text-2xl font-bold text-[#465b52]">
                        <GiMirrorMirror size={40} />
                    </span>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Search Bar */}
                        <div className="flex-grow pr-8">
                            <SearchBar />
                        </div>
                        {navbar_items_large.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-neutral-700 hover:text-emerald-700 text-sm font-medium lg:text-base transition duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                        {/* Login Button */}
                        <a
                            href="/login"
                            className="text-white bg-[#465b52] hover:bg-emerald-800 px-4 py-2 rounded-full text-sm font-medium lg:text-base transition duration-300"
                        >
                            Login
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-neutral-800 hover:text-emerald-700"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#f7f9f8]">
                    <div className="px-4 pt-4 pb-2 space-y-3">
                        {navbar_items_small.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block text-neutral-800 hover:text-emerald-700 py-2 px-3 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        {/* Login Button */}
                        <a
                            href="/login"
                            className="block text-center text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-full text-base font-medium transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
