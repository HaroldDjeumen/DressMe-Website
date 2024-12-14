import React from "react";

const SignUp = () => {
    return (
        <div className="px-20 pb-20">
            <div className="">
                <form className="text-neutral-800 py-8 relative overflow-hidden flex flex-col gap-6 justify-around w-full border border-neutral-500 rounded-lg bg-neutral-50 p-3 px-6">
                    <div className="before:absolute before:w-32 before:h-20 before:right-2 before:bg-red-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-red-200 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
                        <span className="font-extrabold text-2xl text-red-900 uppercase">
                            Get more updates
                        </span>
                        <p className="text-neutral-700">
                            Sign up for our newsletter and you'll be the first
                            to find out about new features
                        </p>
                    </div>
                    <div className="flex gap-1">
                        <div className="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-red-200 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-red-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                            <input
                                type="text"
                                className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-red-900 text-sm rounded-lg focus:ring-red-900 placeholder-opacity-60 focus:border-red-500 block w-full p-2.5 checked:bg-emerald-500"
                                placeholder="Email"
                            />
                        </div>
                        <button className="bg-red-900 text-neutral-50 p-2 rounded-lg hover:bg-red-400 transition duration-300ms ease-in-out">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
