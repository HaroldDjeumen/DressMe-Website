import { useState, useEffect } from "react";
import { FaBars, FaHeart, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";
import SearchBar from "./search-bar.jsx";
import { IoBody } from "react-icons/io5";
import ReactDOM from "react-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ left: 0, top: 0 });
    const [popupData, setPopupData] = useState(null);

    const handleDataChange = (newData) => {
        setPopupData(newData); // Save data to state
    };

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

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

    const handleCircleClick = (e) => {
        setShowPopup(!showPopup);

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        if (screenWidth > 768) {
            setPopupPosition({ left: 50, top: screenHeight / 2 - 100 });
        } else {
            setPopupPosition({
                left: screenWidth / 2 - 150,
                top: screenHeight / 2 - 100,
            });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const popup = document.getElementById("popup");
            if (popup && !popup.contains(event.target)) {
                setShowPopup(false);
            }
        };

        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    return (
        <nav className="bg-[#b9c3c0] shadow-lg fixed z-50 w-full">
            <div className="mx-auto px-4 lg:px-6">
                <div className="flex justify-between items-center py-3">
                    <span className="text-2xl font-bold text-[#465b52]">
                        <GiMirrorMirror size={40} />
                    </span>

                    <div
                        onClick={handleCircleClick}
                        style={{
                            position: "fixed",
                            left: "90px",
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            backgroundColor: "#465b52",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            userSelect: "none",
                            pointerEvents: "auto",
                        }}
                    >
                        <span className="text-2xl" style={{ color: "white", fontWeight: "bold" }}>
                            <IoBody />
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex-grow pr-8">
                            <SearchBar />
                        </div>
                        {navbar_items_large.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-[#465b52] hover:text-[#088178] text-sm font-medium lg:text-base transition duration-300"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/login"
                            className="text-white bg-[#465b52] hover:bg-[#088178] px-4 py-2 rounded-full text-sm font-medium lg:text-base transition duration-300"
                        >
                            Login
                        </a>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#465b52] hover:text-[#088178]"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#f7f9f8]">
                    <div className="px-4 pt-4 pb-2 space-y-3">
                        {navbar_items_small.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block text-[#465b52] hover:text-[#088178] py-2 px-3 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/login"
                            className="block text-center text-white bg-[#465b52] hover:bg-[#088178] px-4 py-2 rounded-full text-base font-medium transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </a>
                    </div>
                </div>
            )}

            {showPopup &&
                ReactDOM.createPortal(
                    <div
                        id="popup"
                        style={{
                            position: "fixed",
                            width: "300px",
                            height: "200px",
                            padding: "20px",
                            backgroundColor: "white",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "10px",
                            textAlign: "center",
                            pointerEvents: "auto",
                            left: `${popupPosition.left}px`,
                            top: `${popupPosition.top}px`,
                            zIndex: 9999,
                        }}
                    >
                        <h2>Popup Content</h2>
                        <p>This is an example popup. Click the circle to close it.</p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 text-white bg-[#465b52] hover:bg-[#088178] px-4 py-2 rounded-full text-sm font-medium"
                        >
                            Close
                        </button>
                    </div>,
                    document.body
                )}
        </nav>
    );
}

export default Navbar;

