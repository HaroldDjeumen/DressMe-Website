import * as React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";

const Creator = () => {
    const features = [
        {
            figure: (
                <MdOutlineLocalShipping size={40} className="text-[#465b52]" />
            ),
            title: "Free Shipping",
            subtext: "You will love the great low prices.",
        },
        {
            figure: <CiCreditCard1 size={50} className="text-[#465b52]" />,
            title: "Flexible Payment",
            subtext: "Pay securely with multiple options.",
        },

        {
            figure: <MdSupportAgent size={50} className="text-[#465b52]" />,
            title: "Online Support",
            subtext: "Outstanding premium support.",
        },
    ];
    return (
        <div
            id="features-container"
            className="overflow-hidden pt-32 lg:pt-16 px-4 py-16 bg-gray-50"
        >
            <div className="flex flex-col space-y-4 text-center mb-12">
                <h1 className="text-[#465b52] text-3xl lg:text-5xl font-bold">
                    What Makes Us Different
                </h1>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-lg"
                    >
                        <div className="p-4 border-2 border-gray-300 rounded-full mb-4">
                            {feature.figure}
                        </div>
                        <h2 className="text-xl font-semibold text-[#465b52] mb-2">
                            {feature.title}
                        </h2>
                        <p className="text-gray-600 leading-6">
                            {feature.subtext}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Creator;