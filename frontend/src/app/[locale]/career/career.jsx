'use client';

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const CareerItem = ({ careerKey, t, messages }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resumeUrl: "",  // Handle URL input for resume
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null); // Success message state
  const [errorMessage, setErrorMessage] = useState(null); // Error message state
  const formRef = useRef();

  const careerData = messages.CareerPage.Careers[careerKey];

  const formatWithLineBreaks = (value) => {
    return value.includes("/n")
      ? value.split("/n").map((line, i) => (
        <React.Fragment key={i}>
          {line.trim()}
          <br />
        </React.Fragment>
      ))
      : value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null); // Reset error message before submitting

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        "service_k8p595o",        // Replace with your EmailJS service ID
        "template_xv87lk2",       // Replace with your EmailJS template ID
        formRef.current,
        "cadTy2BuLbxvgj38C"       // Replace with your EmailJS public key
      );

      // Show success message and auto-hide after 30 seconds
      setSuccessMessage("Application submitted successfully!");
      setTimeout(() => {
        setSuccessMessage(null); // Remove success message after 30 seconds
        setShowPopup(false);  // Close the popup after success message disappears
      }, 30000); // 30 seconds

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        resumeUrl: "",  // Reset the URL field
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (!careerData) return null;

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300 border border-gray-200">
      <h3 className="font-semibold tracking-tight text-secondary text-3xl xs:text-[30px] sm:text-[30px] leading-[1.1] font-poppins text-center mb-6">
        {careerData.Header}
      </h3>

      <div className="space-y-6 text-gray-700">
        <div>
          <h4 className="font-bold uppercase text-[#1d69e7] mb-2">Key Responsibilities</h4>
          <ul className="list-disc pl-5 space-y-1">
            {careerData.Responsibilities.map((item, index) => (
              <li key={index}>{formatWithLineBreaks(item)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-[#1d69e7] mb-2">Qualifications</h4>
          <ul className="list-disc pl-5 space-y-1">
            {careerData.Qualifications.map((item, index) => (
              <li key={index}>{formatWithLineBreaks(item)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-[#1d69e7] mb-2">Bonus / Preferred Skills</h4>
          <ul className=" text-gray-800 pb-5 text-lg xs:text-lg md:text-base list-disc pl-5 space-y-1">
            {careerData.BonusSkills.map((item, index) => (
              <li key={index}>{formatWithLineBreaks(item)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center ">
        <button
          onClick={() => setShowPopup(true)}
          className="inline-block bg-[#0D0C22] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200 shadow-md"
        >
          Apply Now
        </button>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClosePopup} // Close the popup if clicked outside
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-4 sm:p-6 md:p-8 w-[95%] sm:w-full max-w-lg space-y-4 relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent form from closing when clicking inside the form
          >
            {successMessage ? (
              // Show the success message inside the popup
              <div className="bg-green-500 text-white py-4 px-8 rounded-md text-center mb-6">
                {successMessage}
              </div>
            ) : (
              <>
                <h2 className="text-center text-3xl text-secondary font-bold">Apply for Position</h2>

                {errorMessage && (
                  <div className="bg-red-500 text-white py-4 px-8 rounded-md text-center mb-6">
                    {errorMessage}
                  </div>
                )}

                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  onChange={handleChange}
                />

                <input
                  type="tel"
                  name="from_phone"
                  placeholder="Phone Number"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  onChange={handleChange}
                />

                <textarea
                  name="from_message"
                  placeholder="About Yourself (max 500 characters)"
                  maxLength={500}
                  className="h-24 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  onChange={handleChange}
                />

                {/* Replace file input with URL input */}
                <input
                  type="url"
                  name="resume_link"
                  placeholder="Resume URL"
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  onChange={handleChange}
                />
                {/* Add hidden timestamp field */}
                <input
                  type="hidden"
                  name="timestamp"
                  value={new Date().toLocaleString()}  // Sets the timestamp automatically
                />
                <input
  type="hidden"
  name="position"
  value={`Job Application - ${careerData.Header}`}
/>


                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-block bg-[#0D0C22] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200 shadow-md text-white  hover:bg-blue-700 w-full"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default CareerItem;
