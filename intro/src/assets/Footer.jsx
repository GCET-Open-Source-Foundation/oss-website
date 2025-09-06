import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-200 pt-16 pb-8 px-6 md:px-20 mt-16 rounded-t-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand / About */}
        <div>
          <img src="/gcetlogo.svg" alt="GCET Logo" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed max-w-xs">
            This is GCET-OSS ;)
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Projects", "Members", "About", "Apply"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {["Blog", "Documentation", "Events", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and never miss an update.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-white w-full border-2 border-gray-500 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-white text-blue-950 px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 my-8"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© {new Date().getFullYear()} GCET-OSS. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Github" className="hover:text-white">
            <Github size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
