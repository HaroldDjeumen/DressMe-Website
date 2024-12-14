import * as React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const Features = () => {
    const features = [
        {
            figure: "70%",
            subtext:
                "Save up to 70% on essential textbooks and academic resources every year.",
        },
        {
            figure: <FaShieldAlt size={100} className="text-red-900" />,
            subtext:
                "Guaranteed quality assured textbooks with a satisfaction guarantee.",
        },
        {
            figure: <TbTruckDelivery size={128} className="text-red-900" />,
            subtext:
                "Fast and secure nation-wide delivery so you get your resources on time every time",
        },
    ];
    return (
        <div
            id="features-container"
            className="bg-red-100/30 overflow-hidden pt-32 lg:pt-16 px-8 min-h-screen"
        >
            <div className="flex flex-col space-y-2 text-center md:pb-16">
                <h1 className="text-red-900 lg:text-5xl font-bold text-center">
                    Discover the Booklidio Difference
                </h1>
            </div>
            <div className="flex lg:flex-row justify-center lg:gap-5">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex lg:flex-col justify-between items-center bg-red-900/10 rounded-[16px] py-5 px-10 shadow-md shadow-red-900/20 max-w-md"
                    >
                        <span className="flex justify-center items-center text-red-900 font-bold lg:text-8xl ">
                            {feature.figure}
                        </span>
                        <p className="lg:pt-5 text-center text-lg leading-6 font-semibold text-neutral-900">
                            {feature.subtext}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
