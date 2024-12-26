import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import pay from "../Assets/Subjects/pay/pay.png"
import play from "../Assets/Subjects/pay/play.jpg"
import app from "../Assets/Subjects/pay/app.jpg"

const Footer = () => {
  return (
    <>
      
      {/* Footer Section */}
      <footer className="flex flex-wrap justify-between p-8 bg-nautral-100">
        {/* Contact Section */}
        <div className="col flex flex-col mb-6">
          <img
            className="w-20 mb-4"
            src="logo/logogreensmall.png"
            alt="Logo"
          />
          <h4 className="font-bold text-sm mb-2">Contact</h4>
          <p className="text-xs">
            <strong>Address: </strong>
          </p>
          <p className="text-xs">
            <strong>Phone:</strong>
          </p>
          <p className="text-xs">
            <strong>Hours:</strong>
          </p>
          <div className="follow mt-4">
            <h4 className="font-bold text-sm mb-2">Follow Us</h4>
            <div className="flex space-x-2">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="col flex flex-col mb-6">
          <h4 className="font-bold text-sm mb-4">About</h4>
          <a href="#" className="text-xs mb-2 hover:text-[#088178]">
            About Us
          </a>
          <a href="#" className="text-xs mb-2 hover:text-[#088178]">
            Delivery Information
          </a>
          <a href="#" className="text-xs mb-2 hover:text-[#088178]">
            Privacy Policy
          </a>
          <a href="#" className="text-xs mb-2 hover:text-[#088178]">
            Terms & Conditions
          </a>
        </div>

        {/* My Account Section */}
        <div className="col flex flex-col mb-6">
          <h4 className="font-bold text-sm mb-4">My Account</h4>
          <a href="#" className="text-xs mb-2 hover:text-[#088178]">
            Sign In
          </a>
          <a href="#" className="text-xs mb-2 hover:text-[#088178]">
            My Wishlist
          </a>
          <a href="#" className="text-xs mb-2 hover:text-[#088178]">
            Track My Order
          </a>
          <a href="#" className="text-xs mb-2 hover:text-[#088178]">
            Help
          </a>
        </div>

        {/* Install App Section */}
        <div className="col install flex flex-col mb-6">
          <h4 className="font-bold text-sm mb-4">Install App</h4>
          <p className="text-xs mb-2">From App Store or Google Play</p>
          <div className="row flex space-x-4 mb-4">
            <img
              src={app}
              alt="App Store"
              className="h-10 border border-[#088178] rounded-md"
            />
            <img
              src= {play}
              alt="Google Play"
              className="h-10 border border-[#088178] rounded-md"
            />
          </div>
          <p className="text-xs font-bold mb-2">Secured Payment Gateways</p>
          <img
            src= {pay}
            alt="Payment Methods"
            className="w-36"
          />
        </div>

        {/* Copyright Section */}
        <div className="w-full text-center text-xs mt-4">
          <p>© 2024, Dressme.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
