import { useState } from "react";
import { FaBars, FaBook, FaTimes, FaUser } from "react-icons/fa";
import SearchBar from "./search-bar.jsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navbar_items_mobile = [
        { label: "Home", href: "#home" },
        { label: "Shop for Books", href: "#shop-for-books" },
        { label: "Sell on Booklidio", href: "#sell-books" },
        { label: "Account", href: "#account" },
        { label: "Cart", href: "#cart" },
        { label: "FAQs", href: "#faqs" },
        { label: "Contact", href: "#contact" },
        { label: "About Us", href: "#about-us" },
        { label: "Sign Up", href: "#sign-up" },
    ];

    const navbar_items = [
        { label: "Home", href: "#home" },
        { label: "Browse Textbooks", href: "#shop-for-books" },
        { label: "Sell on Booklidio", href: "#sell-books" },
        { label: "Contact", href: "#contact" },
        { label: "About Us", href: "#about-us" },
        { label: <FaUser size={26} />, href: "#account" },
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-[#680d28]">
                            <FaBook size={36} />
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <SearchBar />
                    <div className="hidden md:flex items-center justify-between">
                        {navbar_items.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-neutral-700 hover:text-[#680d28] px-3 py-2 rounded-md text-sm font-medium transition duration-300ms ease-in-out lg:text-base"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-neutral-800 hover:text-[#680d28]"
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
                        {navbar_items_mobile.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-neutral-800 hover:text-[#680d28] block px-3 py-2 rounded-md text-base font-medium no-underline"
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
