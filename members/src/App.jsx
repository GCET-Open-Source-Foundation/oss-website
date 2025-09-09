import React, { useState, useEffect } from "react";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import HorizontalScrollList from "./assets/HorizontalScrolling";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const App = () => {
  const letters = ["G", "C", "E", "T", "O", "S", "S"];

  const formationPositions = [
    { top: "30%", left: "50%" },
    { top: "40%", left: "50%" },
    { top: "50%", left: "50%" },
    { top: "60%", left: "50%" },
    { top: "70%", left: "50%" },
    { top: "80%", left: "50%" },
    { top: "90%", left: "50%" },
  ];

  const randomPosition = () => ({
    top: `${Math.random() * 90}%`,
    left: `${Math.random() * 90}%`,
    rotate: `${Math.random() * 360}deg`,
  });

  const controls = letters.map(() => useAnimation());

  useEffect(() => {
    controls.forEach((control, i) => {
      setTimeout(() => {
        control.start({
          ...randomPosition(),
          transition: { duration: 2, ease: "easeInOut" },
        });

        const float = () => {
          control.start({
            ...randomPosition(),
            transition: { duration: 4 + Math.random() * 2, ease: "easeInOut" },
          }).then(() => float());
        };

        setTimeout(float, 2000);
      }, 1000);
    });
  }, []);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.5, 0]);

const faculty = [
  { name: "Harish Chandra Reddy", roll: "Vice Chairman and Advisor of the OSS"},
  { name: "D S V Jyothi", roll: "Primary Faculty Coordinator of OSS"},


];
const maintainers = [
  { name: "K Jayatheerth", roll: "23R11A05W4"},
  { name: "M Sai Sree Harsha", roll: "23R11A05X8"},
  { name: "K Advaith", roll: "23R11A05W7"},
  { name: "S Nyneeta Rao", roll: "23R11A05Y0"},
  { name: "C V N S S Sarvan", roll: "23R11A05V3"},
  { name: "K Keerthana", roll: "23R11A05B3"},

];

const contributors = [
  { name: "D Shantan Dheer", roll: "EEE-1st Year" },
  { name: "D Srinadh", roll: "CSE-2nd Year" },
  { name: "Abdul Baseer", roll: "AIML-1st Year" },
  { name: "Anushka Varakala ", roll: "CSE-2nd Year" },
  { name: "Narayana Rohith", roll: "AIML-1st Year" },
  { name: "K Arun", roll: "CSE-2nd Year" },
  { name: "Murathota Jayakar Emmanuel", roll: "AIML-1st Year" },
  { name: "Bhavana Sree Kalisetty ", roll: "AIML-1st Year" },
  { name: "Amodini Mahdelay ", roll: "CSE-1st Year" },
  { name: "Bhavana Sree Kalisetty ", roll: "AIML-1st Year" },
  { name: "P.V.Harshita", roll: "AIML-1st Year" },
  { name: "Anushka Yamanoor ", roll: "AIML-1st Year" },
  { name: "Madhu Sarika Shatdharshanam ", roll: "AIML-1st Year" },
  { name: "Dudi Sai Chinmayee ", roll: "AIML-1st Year" },
  { name: "Rachamalla Meghana ", roll: "AIML-1st Year" },
  { name: "Rishith Kumar Guntuka", roll: "CSE-2nd Year" },
  { name: "Mohammad muttaqi ali ", roll: "AIML-1st Year" },
];

  return (
    <>
      <Navbar />

      {/* Hero section with animated letters */}
      <section className="min-h-screen flex flex-col items-center justify-start text-center relative px-4 pt-6 md:pt-30">
        <motion.div style={{ scale, opacity }} className="w-full flex flex-col items-center">
          <p className="text-4xl font-normal">Meet the OSS team</p>
          <p className="mt-4 max-w-xl text-gray-700 text-2xl">For the Maintainers and Contributors</p>
          <br />
          <br />
          <div className="relative w-full max-w-3xl h-[400px]">
            <img
              src="./oss-teams.png"
              alt="Teams image"
              className="w-full h-full object-contain"
            />

            {letters.map((letter, i) => {
              const isGCET = i < 4;
              return (
                <motion.span
                  key={i}
                  className={`absolute select-none text-black ${isGCET ? "text-3xl" : "text-sm"} ml-2`}
                  initial={formationPositions[i]}
                  animate={controls[i]}
                >
                  {letter}
                </motion.span>
              );
            })}
          </div>
          <br />
          <p className="mt-6 text-md max-w-xl text-gray-700">
            We pick builders more than anyone, if you want or can build things
            consider joining GCET-OSS. We are actively looking for members.
          </p>
        </motion.div>
      </section>
      <section className="min-h-screen px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col items-start text-left space-y-6 text-gray-800">
          <HorizontalScrollList title="Faculty and Supervising people" items={faculty} />
          <HorizontalScrollList title="Maintainers" items={maintainers} />
          <HorizontalScrollList title="Contributors" items={contributors} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
