import React from "react";

import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";

import { motion, useScroll, useTransform } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.5, 0]);

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col items-center 
               justify-start text-center relative px-4 pt-6
               md:pt-30">
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col items-center"
        >
          <p className="text-4xl">
            Introducing <span className="text-blue-950">GCET</span>-OSS
          </p>
          <p className="text-3xl mt-2">The Open Source Club</p>
          <br></br>
          <p className="text-md mt-3 max-w-2xl">
            An initiative that is designed to get things done. Not just a club
            but a culture.
          </p>

          <div className="pt-12 flex items-center justify-center">
            <video
              className="w-[500px] max-w-full h-auto rounded-lg"
              src="./landingvid.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <p className="text-md mt-5 max-w-2xl">
            Joining us is as easy as it gets. Just apply directly by filling the
            form here, no extra steps.
          </p>

          <a
            href="/apply"
            className="bg-blue-950 text-white mt-5 py-2 px-6 rounded-3xl hover:bg-blue-900 transition"
          >
            Apply
          </a>
        </motion.div>
      </section>

      <section className="min-h-screen flex flex-col px-6 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-start text-left">
            <p className="text-4xl">
              What is <span className="text-blue-950">OSS?</span>
            </p>
            <p className="text-3xl mt-2">The Student-Led Open Source Club</p>
            <p className="text-md mt-3 leading-relaxed">
              GCET OSS is a student-led open source club at GCET where we
              learn, build, and contribute together. We believe in
              collaboration, getting things done, and creating projects that
              make an impact.
            </p>
            <a
              href="/about"
              className="bg-blue-950 text-white mt-6 py-2 px-6 rounded-3xl hover:bg-blue-900 transition"
            >
              Learn More
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="./ossimg.png"
              alt="Open Source at GCET"
              className="w-[500px] max-w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>
      </section>
      <Footer/>
    </>
  );
};

export default App;