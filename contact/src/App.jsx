import './index.css'
import Navbar from './assets/Navbar'
import Footer from './assets/Footer'
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Instagram } from 'lucide-react'

function App() {
  return (
    <>
      <div className="bg-white text-black">
        <Navbar />
        <img
          className="mx-auto my-6 w-full max-w-md max-h-[560px] rounded-2xl shadow-lg object-cover"
          src="./contact.png"
          alt="Contact"
        />
        
        {/* Hero Section with Abstract Gradient Background */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Abstract gradient background inspired by the images */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-orange-100/30 to-pink-100/40"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/20 via-transparent to-blue-100/30"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
            <h1 className="text-5xl mb-4">Get In Touch</h1>
            <p className="text-xl max-w-2xl mx-auto text-black/70">
              Building Tomorrow's Open Source Contributors
            </p>
          </div>
        </section>

        {/* Contact Information with Abstract Backgrounds */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl text-center mb-16">Contact Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Email Card */}
              <div className="relative overflow-hidden rounded-2xl p-8 min-h-[180px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-cyan-50/40 to-yellow-50/60"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/40 to-pink-100/40 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Mail className="h-10 w-10 text-black mb-4" />
                  <h3 className="text-lg mb-2">Email</h3>
                  <a href="mailto:ossclub@gcet.edu.in" className="text-black/70 hover:text-black">
                    ossclub@gcet.edu.in
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="relative overflow-hidden rounded-2xl p-8 min-h-[180px]">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 via-orange-50/40 to-yellow-50/60"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-2xl"></div>
                <div className="relative">
                  <MapPin className="h-10 w-10 text-black mb-4" />
                  <h3 className="text-lg mb-2">Location</h3>
                  <p className="text-black/70">Computer Lab 301<br/>Block 2, GCET</p>
                </div>
              </div>

              {/* Meeting Time Card */}
              <div className="relative overflow-hidden rounded-2xl p-8 min-h-[180px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/60 via-pink-50/40 to-blue-50/60"></div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Clock className="h-10 w-10 text-black mb-4" />
                  <h3 className="text-lg mb-2">Meeting Time</h3>
                  <p className="text-black/70">Every Saturday<br/>10:00 AM - 03:00 PM</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="relative overflow-hidden rounded-2xl p-8 min-h-[180px]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/60 via-blue-50/40 to-pink-50/60"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100/40 to-orange-100/40 rounded-full blur-2xl"></div>
                <div className="relative">
                  <Phone className="h-10 w-10 text-black mb-4" />
                  <h3 className="text-lg mb-2">Quick Response</h3>
                  <p className="text-black/70">Discord Server<br/>Join via invite link</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Coordinator Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-pink-50/20 to-blue-50/30"></div>
          <div className="absolute top-40 left-40 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-3xl text-center mb-16">Faculty Coordinator</h2>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 border border-black/5">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl mb-2">Dr. Faculty Name</h3>
                <p className="text-lg text-black/70 mb-4">Faculty Coordinator, Assistant Professor</p>
                <p className="text-black/60 mb-6">Computer Science & Engineering Department</p>
                <div className="space-y-2">
                  <a href="mailto:faculty@gcet.edu.in" className="flex items-center justify-center gap-2 text-black/70 hover:text-black">
                    <Mail className="h-5 w-5" />
                    faculty@gcet.edu.in
                  </a>
                  <a href="tel:+919876543210" className="flex items-center justify-center gap-2 text-black/70 hover:text-black">
                    <Phone className="h-5 w-5" />
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl text-center mb-16">Core Team</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* President */}
              <div className="relative overflow-hidden rounded-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-cyan-50/40 to-pink-50/40"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-100/30 to-orange-100/30 rounded-full blur-2xl"></div>
                <div className="relative text-center">
                  <h3 className="text-xl mb-1">Student Name</h3>
                  <p className="text-black/70 mb-4">President</p>
                  <a href="mailto:president@student.gcet.edu.in" className="flex items-center justify-center gap-2 text-sm text-black/60 hover:text-black mb-4">
                    <Mail className="h-4 w-4" />
                    president@student.gcet.edu.in
                  </a>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-black/60 hover:text-black">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-black/60 hover:text-black">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Secretary */}
              <div className="relative overflow-hidden rounded-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 via-orange-50/40 to-yellow-50/40"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-full blur-2xl"></div>
                <div className="relative text-center">
                  <h3 className="text-xl mb-1">Student Name</h3>
                  <p className="text-black/70 mb-4">Secretary</p>
                  <a href="mailto:secretary@student.gcet.edu.in" className="flex items-center justify-center gap-2 text-sm text-black/60 hover:text-black mb-4">
                    <Mail className="h-4 w-4" />
                    secretary@student.gcet.edu.in
                  </a>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-black/60 hover:text-black">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-black/60 hover:text-black">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Technical Lead */}
              <div className="relative overflow-hidden rounded-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/60 via-pink-50/40 to-blue-50/40"></div>
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-100/30 to-blue-100/30 rounded-full blur-2xl"></div>
                <div className="relative text-center">
                  <h3 className="text-xl mb-1">Student Name</h3>
                  <p className="text-black/70 mb-4">Technical Lead</p>
                  <a href="mailto:tech@student.gcet.edu.in" className="flex items-center justify-center gap-2 text-sm text-black/60 hover:text-black mb-4">
                    <Mail className="h-4 w-4" />
                    tech@student.gcet.edu.in
                  </a>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="text-black/60 hover:text-black">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-black/60 hover:text-black">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 via-blue-50/30 to-pink-50/40"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-100/20 to-yellow-100/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl mb-6">Connect With Us</h2>
            <p className="text-black/70 mb-12">Follow us on social media to stay updated</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/GCET-Open-Source-Foundation" target='_blank'
                className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/gcet-open-source-foundation/" target='_blank'
                className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
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