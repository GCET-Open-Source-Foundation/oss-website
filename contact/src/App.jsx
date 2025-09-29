import { useState } from 'react'
import './App.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram, Send, User, MessageSquare } from 'lucide-react'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const requiredFields = ["name", "email", "subject", "message"];
    
    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        alert(`Please fill the ${field} field.`);
        return;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Contact Form Submitted:", formData);
      alert("Message sent successfully! We'll get back to you soon.");
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <div>
        <Navbar />
        <img
        className="mx-auto my-6 w-full max-w-md rounded-2xl shadow-lg"
        src="./contact.png"
        alt="Contact"
        />
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <img src="/gcetlogo.svg" alt="GCET Logo" className="h-20 w-auto mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Building Tomorrow's Open Source Contributors
            </p>
            <p className="text-lg text-blue-200 mt-4">
              Join us in creating innovative open source solutions and building a stronger tech community
            </p>
          </div>
        </section>

        {/* Quick Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Quick Contact Information</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 text-center hover:shadow-lg transition-shadow">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <a href="mailto:ossclub@gcet.edu.in" className="text-blue-600 hover:text-blue-800 font-medium">
                  ossclub@gcet.edu.in
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 text-center hover:shadow-lg transition-shadow">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600">Computer Lab 2, CSE Department, GCET</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100 text-center hover:shadow-lg transition-shadow">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Meeting Time</h3>
                <p className="text-gray-600">Every Friday<br/>4:00 PM - 6:00 PM</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 text-center hover:shadow-lg transition-shadow">
                <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Quick Response</h3>
                <p className="text-gray-600">WhatsApp Group<br/>Join via QR Code</p>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Coordinator */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Faculty Coordinator</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center">
                  <User className="h-16 w-16 text-blue-600" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Faculty Name</h3>
                  <p className="text-lg text-blue-600 mb-4">Faculty Coordinator, Assistant Professor</p>
                  <p className="text-gray-600 mb-4">Computer Science & Engineering Department</p>
                  <div className="space-y-2">
                    <a href="mailto:faculty@gcet.edu.in" className="flex items-center justify-center md:justify-start gap-2 text-blue-600 hover:text-blue-800">
                      <Mail className="h-5 w-5" />
                      faculty@gcet.edu.in
                    </a>
                    <a href="tel:+919876543210" className="flex items-center justify-center md:justify-start gap-2 text-green-600 hover:text-green-800">
                      <Phone className="h-5 w-5" />
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Core Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* President */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Student Name</h3>
                  <p className="text-blue-600 font-semibold mb-3">President</p>
                  <div className="space-y-2">
                    <a href="mailto:president@student.gcet.edu.in" className="flex items-center justify-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                      <Mail className="h-4 w-4" />
                      president@student.gcet.edu.in
                    </a>
                    <div className="flex justify-center gap-3 mt-3">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secretary */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Student Name</h3>
                  <p className="text-green-600 font-semibold mb-3">Secretary</p>
                  <div className="space-y-2">
                    <a href="mailto:secretary@student.gcet.edu.in" className="flex items-center justify-center gap-2 text-sm text-green-600 hover:text-green-800">
                      <Mail className="h-4 w-4" />
                      secretary@student.gcet.edu.in
                    </a>
                    <div className="flex justify-center gap-3 mt-3">
                      <a href="#" className="text-gray-600 hover:text-green-600">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-green-600">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Lead */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Student Name</h3>
                  <p className="text-purple-600 font-semibold mb-3">Technical Lead</p>
                  <div className="space-y-2">
                    <a href="mailto:tech@student.gcet.edu.in" className="flex items-center justify-center gap-2 text-sm text-purple-600 hover:text-purple-800">
                      <Mail className="h-4 w-4" />
                      tech@student.gcet.edu.in
                    </a>
                    <div className="flex justify-center gap-3 mt-3">
                      <a href="#" className="text-gray-600 hover:text-purple-600">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-purple-600">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-blue-200">Have a question or want to get involved? We'd love to hear from you!</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm text-white placeholder-blue-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm text-white placeholder-blue-200"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm text-white"
                    required
                  >
                    <option value="" className="text-gray-800">Select a subject</option>
                    <option value="Join Club" className="text-gray-800">Join Club</option>
                    <option value="Project Collaboration" className="text-gray-800">Project Collaboration</option>
                    <option value="Workshop Inquiry" className="text-gray-800">Workshop Inquiry</option>
                    <option value="General Inquiry" className="text-gray-800">General Inquiry</option>
                    <option value="Technical Support" className="text-gray-800">Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm text-white placeholder-blue-200 resize-none"
                    placeholder="Tell us about your inquiry, ideas, or how you'd like to get involved..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Connect With Us</h2>
            <p className="text-gray-600 mb-8">Follow us on social media to stay updated with our latest projects and events</p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="GitHub"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-7 w-7" />
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App