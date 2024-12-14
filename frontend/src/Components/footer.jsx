import * as React from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { TbLocation, TbMail, TbPhone } from "react-icons/tb";
const Footer = () => {
    const footer_items = [
        {
            title: "FAQ",
            href: "faq",
        },
        {
            title: "Shipping Information",
            href: "shipping-information",
        },
        {
            title: "Orders",
            href: "orders",
        },
        {
            title: "Account",
            href: "account",
        },
        {
            title: "Terms of Service",
            href: "terms-of-service",
        },
        {
            title: "Privacy Policy",
            href: "privacy-policy",
        },
        {
            title: "Returns Policy",
            href: "returns-policy",
        },
    ];
    return (
        <div className="">
            <div
                id="footer"
                className="flex flex-col px-6 space-y-4 bg-red-900 text-white pb-12 pt-6 pb-6 lg:pb-6 lg:pt-12"
            >
                {/* Desktop */}
                <div className="hidden lg:flex lg:flex-col lg:justify-around lg:items-center">
                    <div className="flex justify-between px-20 py-6 items-center border-2 rounded-lg border-gradient-to-r from-red-100 to-red-300">
                        <h1 className="text-6xl font-bold wrap w-1/2">
                            South Africa's Largest Textbook Exchange
                        </h1>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-red-800/90 p-2 rounded-lg">
                                    <TbLocation size={28} />
                                </div>
                                <p className="text-base font-semibold text-white">
                                    39 Johnson Street, Deneysville, Free State
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-red-800/90 p-2 rounded-lg">
                                    <TbPhone size={28} />
                                </div>
                                <p className="text-base font-semibold text-white">
                                    +27 76 477 8343
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-red-800/90 p-2 rounded-lg">
                                    <TbMail size={28} />
                                </div>
                                <p className="text-base font-semibold text-white">
                                    info@booklidio.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-20 pt-6">
                        <div className="flex flex-row gap-5 items-center justify-between">
                            {footer_items.map((policy, index) => (
                                <a
                                    key={index}
                                    href={policy.href}
                                    className="hover:scale-105 transition duration-300ms ease-in-out"
                                >
                                    {policy.title}
                                </a>
                            ))}
                        </div>
                        <div className="text-center">
                            <p>
                                &copy; {new Date().getFullYear()} Booklidio. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Mobile */}
                <div className="md:hidden grid grid-cols-2 gap-2">
                    {footer_items.map((item, index) => (
                        <div key={index}>
                            <a
                                href={item.href}
                                className="text-base text-white no-underline"
                            >
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Footer;
