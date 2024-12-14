import * as React from "react";
import Reviews from "./reviews";

const Statistics = () => {
    return (
        <div
            id="stats-container"
            className="bg-white overflow-hidden pt-32 lg:pt-16 pb-16 px-8"
        >
            <div className="flex flex-col lg:flex-col justify-between items-center">
                {/* Hero Text */}
                <div
                    id="text-elements-stats"
                    className="flex flex-col space-y-2 text-center md:pb-12"
                >
                    <h1 className="uppercase text-4xl lg:text-base text-red-900 font-bold">
                        Save time, save money
                    </h1>
                    <span className="mx-auto h-px w-1/5 bg-gradient-to-r from-red-900/50 to-red-900/10" />
                    <h1 className="uppercase text-4xl lg:text-6xl text-neutral-800 font-bold lg:px-20">
                        Join thousands of satisfied customers who save every
                        year
                    </h1>
                    <Reviews />
                </div>
            </div>
        </div>
    );
};

export default Statistics;
