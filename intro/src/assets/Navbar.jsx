import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between px-8 py-4 text-gray-800">
        {/* Logo */}
        <div className="font-bold text-lg">
          <a href="/">
            <img src="./gcetlogo.svg" alt="GCET Logo" className="h-10 w-auto" />
          </a>
        </div>

        <ul className="hidden md:flex gap-6">
          <li>
            <a href="/projects" className="hover:text-blue-900 cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="https://google.com" className="hover:text-blue-900 cursor-pointer">
              Members
            </a>
          </li>
          <li>
            <a href="https://google.com" className="hover:text-blue-900 cursor-pointer">
              Bug Report
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="https://google.com"
            className="bg-blue-950 text-white py-2 px-5 rounded-3xl hover:bg-blue-900 transition"
          >
            Apply
          </a>
        </div>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden bg-white px-8 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 pb-6' : 'max-h-0 pb-0'
        }`}
      >
        <ul className="flex flex-col gap-4 pt-4">
          <li>
            <a href="/projects" className="hover:text-blue-900 cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="https://google.com" className="hover:text-blue-900 cursor-pointer">
              Members
            </a>
          </li>
          <li>
            <a href="https://google.com" className="hover:text-blue-900 cursor-pointer">
              Bug Report
            </a>
          </li>
        </ul>
        <a
          href="https://google.com"
          className="block w-fit mt-4 bg-blue-950 text-white py-2 px-5 rounded-3xl hover:bg-blue-900 transition"
        >
          Apply
        </a>
      </div>
    </nav>
  )
}

export default Navbar
