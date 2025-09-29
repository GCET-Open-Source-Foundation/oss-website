import React from "react";
import { Github, Linkedin } from "lucide-react";
import "./Footer.css";

// Link Data
const quickLinks = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Members", link: "/members" },
  { name: "About", link: "/about" },
  { name: "Apply", link: "/apply" },
];

const resources = [
  { name: "Blog", link: "/blog" },
  { name: "Documentation", link: "/docs" },
  { name: "Events", link: "/events" },
  { name: "Contact", link: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 px-6 mt-16 rounded-t-xl">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-12">
        
        {/* Brand */}
        <div>
          <img src="/gcetlogo.svg" alt="GCET Logo" className="h-12 mx-auto mb-3" />
          <p className="text-sm text-gray-400 max-w-md">
            The team of awesome developers.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ name, link }) => (
                <li key={name}>
                  <a href={link} className="hover:text-white transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-white">Resources</h3>
            <ul className="space-y-2">
              {resources.map(({ name, link }) => (
                <li key={name}>
                  <a href={link} className="hover:text-white transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 w-full"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GCET-OSS. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/GCET-Open-Source-Foundation"
              aria-label="Github"
              className="hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/gcet-open-source-foundation/"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
