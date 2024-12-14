import React from "react";

const Process = () => {
    const processes = [
        {
            step: "01",
            title: "Browse & Select",
            description:
                "Find the perfect textbooks for your needs. Use our easy search filters to locate specific titles, subjects, or ISBN numbers.",
        },
        {
            step: "02",
            title: "Verify & Confirm",
            description:
                "Our transparent platform shows you exactly what you're getting, with high-resolution images and comprehensive book details.",
        },
        {
            step: "03",
            title: "Transact Securely",
            description:
                "Our payment system uses bank-grade encryption and offers multiple payment methods with transparent pricing and instant payment confirmations.",
        },
    ];
    return (
        <div className="bg-white lg:pt-16 min-h-screen">
            <div
                name="process-text"
                className="flex flex-col space-y-2 text-center md:pb-12"
            >
                <h2 className="uppercase text-center font-bold text-red-900">
                    Our trading process
                </h2>
                <span className="mx-auto h-px w-1/5 bg-gradient-to-r from-red-900/50 to-red-900/10" />
                <h1 className="text-7xl text-center font-bold text-neutral-800">
                    Buy & Sell Textbooks With Ease
                </h1>
            </div>
            <div
                name="process-list"
                className="flex justify-between lg:pt-10 lg:px-20 lg:flex-row lg:gap-6 "
            >
                {processes.map((processes, index) => (
                    <div
                        key={index}
                        className="flex lg:flex-col w-full rounded-lg p-4 border-2 hover:border-red-900 transition duration-300ms ease-in-out"
                    >
                        <div className="flex flex-row gap-2 bg-gradient-to-r from-red-900/90 to-red-800/80 rounded-xl">
                            <span className="p-3 rounded-lg text-white font-extrabold text-3xl">
                                {processes.step}
                            </span>
                            <h1 className="flex justify-center items-center text-4xl font-bold text-white">
                                {processes.title}
                            </h1>
                        </div>
                        <p className="pt-6 text-lg text-neutral-800 px-6 min-w-1/2">
                            {processes.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
