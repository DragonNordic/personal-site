"use client";

import React, { useState } from "react";

const ContactPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccessPopup(true);
        setShowPopup(false);
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong.");
    }

    setLoading(false);
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
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-60"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div className="bg-[#F3F3F1] h-8 w-96 flex items-center rounded-t-lg px-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="mr-[100px] flex space-x-1">
                <button type="button" onClick={() => setShowSuccessPopup(false)}>
                    <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                </button>
                <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
            </div>
          
            <h4 className="text-[#282828] font-medium text-sm mr-auto">Success</h4>
          </div>
          <div className="bg-white w-96 p-6 rounded-b-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg text-[#282828] font-semibold mb-4 text-center">
              Thank you! Your submission has been received.
            </h2>
          </div>
        </div>
      )}

      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center z-50"
          onClick={handlePopupToggle}
        >
          <div className="bg-[#F3F3F1] h-8 w-96 flex items-center rounded-t-lg px-4 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="mr-auto flex space-x-1">
              <button type="button" onClick={handlePopupToggle}>
                <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
              </button>
              <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
            </div>
            <h4 className="text-[#282828] font-medium text-sm mr-[130px]">Contact Form</h4>
          </div>
          <div className="bg-white border-[1px] border-[#F3F3F1] w-96 p-6 rounded-b-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg text-[#282828] font-semibold mb-4 text-center">
              Contact Me
            </h2>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <form name="contact" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#282828]">
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
                <label htmlFor="email" className="block text-sm font-medium text-[#282828]">
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
                <label htmlFor="message" className="block text-sm font-medium text-[#282828]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="resize-none mt-1 p-2 w-full border rounded-lg placeholder:text-gray-900 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={handlePopupToggle} className="outline-none px-3 py-1.5 w-[100px] text-center rounded-[40px] bg-white border-2 border-[#D20100] text-[#D20100] tracking-wide text-[12px] font-bold cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#D62822] hover:border-[#D62822] hover:text-white active:tracking-wider">
                  Cancel
                </button>
                <button type="submit" className="outline-none px-3 py-1.5 w-[100px] text-center rounded-[40px] bg-white border-2 border-green-500 text-green-500 tracking-wide text-[12px] font-bold cursor-pointer transition-all duration-200 ease-in-out hover:bg-green-500 hover:text-white active:tracking-wider" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
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
