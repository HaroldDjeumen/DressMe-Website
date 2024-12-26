import React from "react";

const Signup = () => {
  return (
    <section className="bg-[#b9c3c0] text-[#465b52] py-12 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-2xl font-bold mb-4">Sign Up For Newsletters</h4>
        <p className="text-lg font-light mb-6">
          Get E-mail updates about our latest shop and{" "}
          <span className="text-[#088178] font-bold">special offers</span>.
        </p>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full px-6 py-3 text-gray-700  outline-none border border-[#465b52]"
            />
            <span className="absolute left-3 top-3.5 text-gray-400">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
          <button className="bg-[#465b52] hover:bg-[#088178] text-white px-6 py-3 border border-[#465b52]  transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;


