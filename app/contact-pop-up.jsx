"use client"

import React, { useState } from "react";

const Footer = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handlePopupToggle = () => {
        setShowPopup(!showPopup);
    };

    const handleSuccessPopupToggle = () => {
        setShowSuccessPopup(!showSuccessPopup);
        if (showPopup == true) {
            setShowPopup(!showPopup);
        }
    };

  return (
    <div>
        <div className="bg-green-100 h-8 px-4 flex items-center justify-between text-sm rounded-b-lg text-green-800">
            <a
                href="#"
                className="border-b border-dotted text-green-800 cursor-pointer"
            >
                &copy; Rostislav Zavodianyi
            </a>
            <button
                onClick={handlePopupToggle}
                className="border-b border-dotted text-green-800 cursor-pointer"
            >
                Contact Me
            </button>
        </div>

        {showSuccessPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60">
                <div className="bg-green-100 h-8 w-96 flex items-center rounded-t-lg px-4">
                    <h4 className="text-green-800 font-medium text-sm">Contact Form</h4>
                    <div className="ml-auto flex space-x-1">
                        <button
                            type="button"
                            onClick={handleSuccessPopupToggle}
                            className="text-green-100 hover:text-green-300"
                        >
                            <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-900 border-[1px] border-green-100 w-96 p-6 rounded-b-lg shadow-lg relative">
                    <h2 className="text-lg text-green-100 font-semibold mb-4 text-center">Thank you! Your submission has been received</h2>
                </div>
            </div>
        )}

        {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50">
                <div className="bg-green-100 h-8 w-96 flex items-center rounded-t-lg px-4">
                    <h4 className="text-green-800 font-medium text-sm">Contact Form</h4>
                    <div className="ml-auto flex space-x-1">
                        <button
                            type="button"
                            onClick={handlePopupToggle}
                            className="text-green-100 hover:text-green-300"
                        >
                            <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                        </button>
                    </div>
                </div>
                <div className="bg-gray-900 border-[1px] border-green-100 w-96 p-6 rounded-b-lg shadow-lg relative">
                    <h2 className="text-lg text-green-100 font-semibold mb-4 text-center">Contact Me</h2>
                    <form name="contact" method="POST" data-netlify="true" action={handleSuccessPopupToggle}>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-green-100"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 p-2 w-full border placeholder:text-gray-900 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-green-100"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="inputEmail"
                                name="email"
                                className="mt-1 p-2 w-full border placeholder:text-gray-900 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-green-100"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 p-2 w-full border placeholder:text-gray-900 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                type="button"
                                onClick={handlePopupToggle}
                                className="text-green-100 hover:text-green-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
  );
};

export default Footer;
