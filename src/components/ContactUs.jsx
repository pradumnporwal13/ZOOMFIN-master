import React from "react";
import { FaPhoneAlt, FaEnvelope, FaHeadset } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-white mt-20 mb-10 lg:px-20 px-3 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-center font-bold text-black mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Number */}
          <div data-aos="zoom-in" className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <FaPhoneAlt className="text-blue-800 text-4xl mb-4" />
            <h3 className="text-lg font-semibold">Phone Number</h3>
            <a href="tel: 9340752360" className="text-blue-600 hover:underline mt-2"> 9340752360</a>
          </div>
          {/* Email */}
          <div data-aos="zoom-in" className="flex flex-col items-center  bg-gray-100 p-6 rounded-lg shadow-lg">
            <FaEnvelope className="text-blue-800 text-4xl mb-4" />
            <h3 className="text-lg font-semibold">Email</h3>
            <a href="mailto: zoomfinanceindore@gmail.com" className="text-blue-600 hover:underline mt-2"> zoomfinanceindore@gmail.com</a>
          </div>
          {/* Helpline Number */}
          <div data-aos="zoom-in" className="flex flex-col items-center  bg-gray-100 p-6 rounded-lg shadow-lg">
            <FaHeadset className="text-blue-800 text-4xl mb-4" />
            <h3 className="text-lg font-semibold">Helpline Number</h3>
            <a href="tel:07314999628" className="text-blue-600 hover:underline mt-2">07314999628</a>
          </div>
        </div>
        <div className="mt-12">
          <div data-aos="zoom-in" className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58880.10179657307!2d75.84828373118455!3d22.7280049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6d5c629411%3A0x4f30b32ad0c8b0f1!2sIndustry%20House%20Business%20Centre!5e0!3m2!1sen!2sin!4v1721484936116!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Industry House Business Centre"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


