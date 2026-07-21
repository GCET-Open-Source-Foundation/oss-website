import React, { useEffect } from "react";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import HorizontalScrollList from "./assets/HorizontalScrolling";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  advisors,
  contributors,
  coreCommittee,
  departments,
  faculty,
  maintainers,
} from "./data";

const MotionDiv = motion.div;
const MotionSpan = motion.span;

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

  // Keep the original animation shape from the committed page.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const controls = letters.map(() => useAnimation());

  useEffect(() => {
    controls.forEach((control) => {
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
  const currentTeam = [
    ...coreCommittee,
    ...departments.map((department) => ({
      ...department.lead,
      team: department.name,
    })),
    ...departments.flatMap((department) =>
      department.members.map((member) => ({
        ...member,
        team: department.name,
      }))
    ),
  ];

  return (
    <>
      <Navbar />

      {/* Hero section with animated letters */}
      <section className="min-h-screen flex flex-col items-center justify-start text-center relative px-4 pt-6 md:pt-30">
        <MotionDiv style={{ scale, opacity }} className="w-full flex flex-col items-center">
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
                <MotionSpan
                  key={i}
                  className={`absolute select-none text-black ${isGCET ? "text-3xl" : "text-sm"} ml-2`}
                  initial={formationPositions[i]}
                  animate={controls[i]}
                >
                  {letter}
                </MotionSpan>
              );
            })}
          </div>
          <br />
          <p className="mt-6 text-md max-w-xl text-gray-700">
            We pick builders more than anyone, if you want or can build things
            consider joining GCET-OSS. We are actively looking for members.
          </p>
        </MotionDiv>
      </section>
      <section className="min-h-screen px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col items-start text-left space-y-6 text-gray-800">
          <HorizontalScrollList title="Faculty and Supervising people" items={faculty} />
          <HorizontalScrollList title="Advisors" items={advisors} />
          <HorizontalScrollList title="Current Team" items={currentTeam} />
          {maintainers.length > 0 && (
            <HorizontalScrollList
              title="Maintainers"
              items={maintainers}
              showRole={false}
            />
          )}
          {contributors.length > 0 && (
            <HorizontalScrollList
              title="Contributors"
              items={contributors}
              showRole={false}
            />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
