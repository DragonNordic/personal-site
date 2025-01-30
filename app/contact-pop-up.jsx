"use client";

import React, { useState } from "react";

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleSuccessPopupToggle = () => {
    setShowSuccessPopup(true);
    setShowPopup(false);
  };

  const encodeFormData = (data) => {
    return new URLSearchParams(data).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData({ "form-name": "contact", ...Object.fromEntries(formData) }),
    });

    if (response.ok) {
      handleSuccessPopupToggle();
    }
  };

  return (
    <div>
      <div className="bg-[#F3F3F1] h-8 px-4 flex items-center justify-between text-sm rounded-b-lg text-[#282828]">
        <a href="#" className="border-b border-dotted text-[#282828] cursor-pointer">
          &copy; Rostislav Zavodianyi
        </a>
        <button onClick={handlePopupToggle} className="border-b border-dotted text-[#282828] cursor-pointer">
          Contact Me
        </button>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60">
          <div className="bg-[#F3F3F1] h-8 w-96 flex items-center rounded-t-lg px-4">
            <div className="mr-auto flex space-x-1">
              <button type="button" onClick={() => setShowSuccessPopup(false)}>
                <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
              </button>
            </div>
            <h4 className="text-[#282828] font-medium text-sm mr-auto">Success</h4>
          </div>
          <div className="bg-gray-900 border-[1px] border-[#F3F3F1] w-96 p-6 rounded-b-lg shadow-lg relative">
            <h2 className="text-lg text-[#F3F3F1] font-semibold mb-4 text-center">
              Thank you! Your submission has been received.
            </h2>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50">
          <div className="bg-[#F3F3F1] h-8 w-96 flex items-center rounded-t-lg px-4">
            <div className="mr-auto flex space-x-1">
              <button type="button" onClick={handlePopupToggle}>
                <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
              </button>
            </div>
            <h4 className="text-[#282828] font-medium text-sm mr-auto">Contact Form</h4>
          </div>
          <div className="bg-gray-900 border-[1px] border-[#F3F3F1] w-96 p-6 rounded-b-lg shadow-lg relative">
            <h2 className="text-lg text-[#F3F3F1] font-semibold mb-4 text-center">
              Contact Me
            </h2>
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F3F3F1]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 p-2 w-full border rounded-lg placeholder:text-gray-900 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F3F3F1]">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 p-2 w-full border rounded-lg placeholder:text-gray-900 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F3F3F1]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 p-2 w-full border rounded-lg placeholder:text-gray-900 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={handlePopupToggle} className="text-[#F3F3F1] hover:text-green-300">
                  Cancel
                </button>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
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

export default ContactPopup;
