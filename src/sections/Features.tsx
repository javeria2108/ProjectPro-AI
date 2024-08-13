"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import astronautImage from "@/assets/astronaut.png";
import GalaxyImage from "@/assets/cartoonGalaxy.png";
import telescopeImage from "@/assets/telescope.png";
import rocketImage from "@/assets/rocket.png";
import RevealOnScroll from "@/components/RevealOnScroll";

export const Features = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  useEffect(() => {
    scrollYProgress.onChange((v) => console.log("ScrollYProgress:", v));
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#220828] to-black py-24 overflow-x-clip relative"
      style={{
        borderTop: "1px solid transparent",
        borderBottom: "1px solid transparent",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="section-heading text-center">
          <RevealOnScroll>
            <div className="flex justify-center">
              <div className="tag">Your Project, Your Universe</div>
            </div>
            <h2 className="section-title mt-5">
              Streamlined for easy management
            </h2>
            <p className="section-description mt-5 text-white">
              Seamlessly organize, track, and complete your final year project
              with ease. Set goals, collaborate, and reach new heights in your
              academic journey.
            </p>
          </RevealOnScroll>
        </div>
        <RevealOnScroll>
          <div className="flex flex-col gap-12 items-center mt-10 lg:flex-row lg:items-stretch lg:justify-center">
            <div className="relative max-w-xs w-full bg-transparent text-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#252525] text-center">
              <motion.img
                src={astronautImage.src}
                alt="Integration Ecosystem"
                className="mx-auto mb-4 w-48 h-48 object-cover rounded-xl"
                style={{ scale }}
              />
              <h3 className="text-xl font-bold mb-2">Mission Control</h3>
              <p className="text-sm tracking-tight text-white">
                Centralize your resources and tools for a streamlined workflow.
              </p>
            </div>
            <div className="relative max-w-xs w-full bg-transparent text-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#252525] text-center">
              <motion.img
                src={GalaxyImage.src}
                alt="Goal setting and tracking"
                className="mx-auto mb-4 w-48 h-48 object-cover rounded-xl"
                style={{ scale }}
              />
              <h3 className="text-xl font-bold mb-2">Milestone Tracker</h3>
              <p className="text-sm tracking-tight text-white">
                Break down your project into manageable tasks and achieve them
                step by step.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="flex flex-col gap-12 items-center mt-12 lg:flex-row lg:items-stretch lg:justify-center">
            <div className="relative max-w-xs w-full bg-transparent text-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#252525] text-center">
              <motion.img
                src={telescopeImage.src}
                alt="Integration Ecosystem"
                className="mx-auto mb-4 w-48 h-48 object-cover rounded-xl"
                style={{ scale }}
              />
              <h3 className="text-xl font-bold mb-2">Research Navigator</h3>
              <p className="text-sm tracking-tight text-white">
                Discover and organize your research sources with precision
              </p>
            </div>
            <div className="relative max-w-xs w-full bg-transparent text-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#252525] text-center">
              <motion.img
                src={rocketImage.src}
                alt="Goal setting and tracking"
                className="mx-auto mb-4 w-48 h-48 object-cover rounded-xl"
                style={{ scale }}
              />
              <h3 className="text-xl font-bold mb-2">Launch Pad</h3>
              <p className="text-sm tracking-tight text-white">
                Kickstart your project with the right resources and tools.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Gradient Separator for Bottom Border */}
      <style jsx>{`
        section::before,
        section::after {
          content: "";
          display: block;
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0;
          background-image: linear-gradient(
            90deg,
            rgba(202, 171, 255, 0) 1.46%,
            rgba(202, 171, 255, 0.6) 40.83%,
            rgba(202, 171, 255, 0.3) 65.57%,
            rgba(202, 171, 255, 0) 107.92%
          );
        }

        section::before {
          top: 0;
        }

        section::after {
          bottom: 0;
        }
      `}</style>
    </section>
  );
};
