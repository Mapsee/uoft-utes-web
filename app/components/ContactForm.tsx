"use client";

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  // Initialize the form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update state on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Update only the field that has changed
    setFormData({
      ...formData,  // Keep the other fields unchanged
      [name]: value,  // Update the field based on the input's name attribute
    });
  };

  // Handle form submission with mailto:
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the mailto: link
    const mailtoLink = `mailto:uoft.esports@gmail.com?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;
    
    // Open the default email client with pre-filled information
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 rounded-lg z-100">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}  // Controlled input bound to state
          onChange={handleChange}  // Update state on change
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:outline-none border-none placeholder-gray-400 cyan_shadow2"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}  // Controlled input bound to state
          onChange={handleChange}  // Update state on change
          placeholder="Email Address"
          className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:outline-none border-none placeholder-gray-400 cyan_shadow2"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}  // Controlled textarea bound to state
          onChange={handleChange}  // Update state on change
          placeholder="Your Message..."
          className="w-full px-4 py-2 bg-secondary text-white rounded-md focus:outline-none border-none placeholder-gray-400 cyan_shadow2"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary hover:bg-cyan-500 text-white font-bold rounded-md"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
