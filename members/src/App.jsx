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
          <p>Meet the OSS team</p>
          <p>Image</p>
          <p>Some paragraph here</p>
          <p>Types of OSS posts</p>
        </motion.div>
      </section>

      <section className="min-h-screen  px-6 justify-start">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-start text-left">
            <p>Maintainers</p>
            <p>Blah blah blah</p>
            <p>Contributors</p>
            <p>Blah Blah Blah</p>
          </div>
        </motion.div>
      </section>
      <Footer/>
    </>
  );
};

export default App;