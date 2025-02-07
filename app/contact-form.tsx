"use client";

import Lottie from "lottie-react";
import successAnimation from "./Animation-1738336815274.json";
import "./css/contact-form.css";
import React, { useState, useEffect } from "react";
import { readv } from "fs";

const ContactForm = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        framework: "Shopify",
        message: "",
    });

    useEffect(() => {
        document.body.style.overflow = showPopup || showSuccessPopup ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showPopup, showSuccessPopup]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setShowSuccessPopup(true);
                setShowPopup(false);
                setFormData({ name: "", email: "", message: "", framework: "ReactJS" });
            } else {
                setError("Submission failed. Please try again.");
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(`Something went wrong: ${err.message}`);
            } else {
                setError("Something went wrong.");
            }
        }

        setLoading(false);
    };

    return (
        <div className="container-form">
            {showSuccessPopup && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={() => setShowSuccessPopup(false)}
                >
                    <div
                        className="bg-white w-96 rounded-lg shadow-lg relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-[#F3F3F1] h-8 w-96 flex items-center rounded-t-lg px-4">
                            <div className="mr-auto flex space-x-1 absolute">
                                <button onClick={() => setShowSuccessPopup(false)}>
                                    <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                                </button>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <h4 className="text-[#282828] font-medium text-sm mx-auto">Success</h4>
                        </div>

                        <div className="p-6 text-center">
                            <Lottie
                                animationData={successAnimation}
                                loop={false}
                                className="w-20 h-20 mx-auto mb-4"
                            />
                            <h2 className="text-lg font-semibold text-[#282828]">
                                Thank you! Your submission has been received.
                            </h2>
                        </div>
                    </div>
                </div>
            )}
            <div className="contact-form">
                <div className="bg-[#F3F3F1] h-8 max-w-[500px] flex items-center px-4 rounded-t-[8px]">
                    <div className="mr-auto flex space-x-1 absolute">
                        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer"></div>
                    </div>
                    <h4 className="text-[#282828] font-medium text-sm mx-auto">Contact Form</h4>
                </div>

                <div className="bg-[#ffffff] border-[1px] border-[#F3F3F1] w-full max-w-[500px] p-6 rounded-b-[8px]">
                    <h2 className="text-lg text-[#282828] font-semibold mb-4 text-center">
                        Contact Me
                    </h2>
                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                    <form name="contact" onSubmit={handleSubmit} className="space-y-4 h-full">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[#282828]">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="mt-1 p-2 w-full border rounded-lg placeholder:text-gray-900 text-gray-900"
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
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="mt-1 p-2 w-full border rounded-lg placeholder:text-gray-900 text-gray-900"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#282828]">Framework</label>
                            <div className="flex flex-wrap gap-[10px] mt-1">
                                {["Shopify", "BigCommerce", "React.js"].map((fw) => (
                                    <label key={fw} className="flex items-center cursor-pointer gap-2">
                                        <input
                                        type="radio"
                                        name="framework"
                                        value={fw}
                                        checked={formData.framework === fw}
                                        onChange={handleInputChange}
                                        className="hidden peer"
                                        />
                                        <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center p-1 peer-checked:border-[#58ac30] peer-checked:bg-[#58ac30] transition">
                                        </div>
                                        <span className="text-black">{fw}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="message" className="block text-sm font-medium text-[#282828]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={6}
                                required
                                className="resize-y mt-1 p-2 w-full min-h-[162px] border rounded-lg placeholder:text-gray-900 text-gray-900"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>

                        <div className="flex justify-end !mt-4">
                            <button type="submit" className="submit-button flex items-center justify-center" disabled={loading}>
                                {loading ? (
                                    <div className="w-6 h-6 border-[3px] border-t-transparent border-white rounded-full animate-spin"></div>
                                ) : (
                                    <span>Submit</span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="debug">
                <pre>
                    {JSON.stringify(
                        {
                            name: {
                                value: formData.name,
                                valid: formData.name.trim().length > 0,
                            },
                            email: {
                                value: formData.email,
                                valid: formData.email.includes("@"),
                            },
                            framework: {
                                value: formData.framework,
                                selected: formData.framework !== "",
                            },
                            message: {
                                value: formData.message,
                            },
                        },
                        null,
                        2
                    )}
                </pre>
            </div>  
        </div>
    );
};

export default ContactForm;
