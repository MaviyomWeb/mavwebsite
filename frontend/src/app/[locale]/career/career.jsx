'use client';

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const CareerItem = ({ careerKey, t, messages }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [submitting, setSubmitting] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // ✅ EmailJS only — Google Sheets removed
      await emailjs.sendForm(
        "service_k8p595o",     // Your EmailJS service ID
        "template_xv87lk2",    // Your EmailJS template ID
        formRef.current,
        "cadTy2BuLbxvgj38C"    // Your EmailJS public key
      );

      alert("Application submitted successfully!");
      setShowPopup(false);
      formRef.current.reset(); // Clear form
    } catch (error) {
      console.error(error);
      alert("Failed to submit application.");
    } finally {
      setSubmitting(false);
    }
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-6 w-full max-w-lg space-y-4 relative"
          >
            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-center text-3xl text-secondary font-bold">Apply for Position</h2>

            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            />

            <input
              type="tel"
              name="from_phone"
              placeholder="Phone Number"
              required
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            />

            <textarea
              name="from_message"
              placeholder="About Yourself"
              className="flex h-20 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            />

            <input
              type="url"
              name="resume_link"
              placeholder="Resume URL"
              required
              className="flex h-10 w-full rounded-md border border-gray-300 bg-white text-black px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
            />

            <input
              type="hidden"
              name="timestamp"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              disabled={submitting}
              className="inline-block bg-[#0D0C22] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200 shadow-md w-full"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CareerItem;
