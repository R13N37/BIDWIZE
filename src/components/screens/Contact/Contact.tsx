import React from 'react';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTiktok, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../assets/Logo.png';

const ContactPage: React.FC = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: '#', hoverClass: 'hover:bg-blue-500 hover:text-white' },
    { icon: FaInstagram, href: '#', hoverClass: 'hover:bg-pink-500 hover:text-white' },
    { icon: FaTelegramPlane, href: '#', hoverClass: 'hover:bg-blue-400 hover:text-white' },
    { icon: FaTiktok, href: '#', hoverClass: 'hover:bg-black hover:text-white' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12">
      
     

      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Contact Us</h1>

      {/* Two-column layout */}
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left column: contact info */}
        <div className="md:w-1/2 bg-gray-200 p-8 flex flex-col justify-center gap-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Get in touch</h2>
          
          <div className="flex items-center gap-4 text-gray-700">
            <FaPhone className="text-xl" />
            <span>+1 (234) 567-890</span>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaEnvelope className="text-xl" />
            <span>contact@example.com</span>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-xl" />
            <span>123 Main Street, City, Country</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 transition-all duration-300 ${item.hoverClass}`}
                >
                  <IconComponent className="text-gray-800" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right column: contact form */}
        <div className="md:w-1/2 p-8 bg-gray-300 flex flex-col justify-center">
          <form className="grid gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-gray-800">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-gray-800">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-semibold text-gray-800">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                className="p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white py-3 rounded-md font-bold hover:bg-gray-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
