import React from "react";
import { CgInstagram } from "react-icons/cg";
import { FaFacebook, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3f5159] text-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6">
        {/* About Us */}
        <div className="flex-shrink-0 w-full sm:w-56">
  <h3 className="text-lg font-semibold mb-3">About us</h3>
  <p className="text-sm text-zinc-400 mb-5">
    Welcome to our auction platform, where rare items and exclusive collectibles
    find their true value. Join our community of passionate buyers and sellers.
  </p>
  <div className="flex gap-3 justify-center sm:justify-start">
    <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700">
      <FaFacebook />
    </button>
    <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700">
      <CgInstagram />
    </button>
    <button className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700">
      <FaTelegram />
    </button>
  </div>
</div>

        {/* Services */}
        <div className="flex-shrink-0 w-full sm:w-36">
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-1 text-sm text-zinc-400">
            <li>Live Auctions</li>
            <li>Online Bidding</li>
            <li>Item Valuation</li>
            <li>Private Sales</li>
          </ul>
        </div>

        {/* About */}
        <div className="flex-shrink-0 w-full sm:w-36">
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul className="space-y-1 text-sm text-zinc-400">
            <li>Our Story</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-shrink-0 w-full sm:w-40">
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-1 text-sm text-zinc-400">
            <li>How to Bid</li>
            <li>FAQs</li>
            <li>Buyer Protection</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>

        {/* Request A Quote */}
        <div className="flex-shrink-0 w-full sm:w-72">
          <h3 className="text-lg font-semibold mb-3">Request A Quote</h3>
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded bg-zinc-800 text-sm text-white placeholder-zinc-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded bg-zinc-800 text-sm text-white placeholder-zinc-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 py-2 rounded bg-zinc-800 text-sm text-white placeholder-zinc-400"
            />
            <textarea
              rows={2}
              placeholder="Message"
              className="w-full px-3 py-2 rounded bg-zinc-800 text-sm text-white placeholder-zinc-400 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full text-white font-semibold py-2 rounded text-sm"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-center text-sm text-zinc-500">
        ©2025 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
