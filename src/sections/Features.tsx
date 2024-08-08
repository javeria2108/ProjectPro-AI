"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import cylinderImage from "@/assets/cylinder.png";
import starImage from "@/assets/star.png";
import pyramidImage from "@/assets/tube.png";
import springImage from "@/assets/spring.png";
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
    <section ref={sectionRef} className="bg-white py-24 overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center">
          <RevealOnScroll>
            <div className="flex justify-center">
              <div className="tag">Everything you need</div>
            </div>
            <h2 className="section-title mt-5">
              Streamlined for easy management
            </h2>
            <p className="section-description mt-5">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </RevealOnScroll>
        </div>
        <RevealOnScroll>
          <div className="flex flex-col gap-12 items-center mt-10 lg:flex-row lg:items-stretch lg:justify-center">
            <div className="relative max-w-xs w-full bg-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center">
              <motion.img
                src={cylinderImage.src}
                alt="Integration Ecosystem"
                className="mx-auto mb-4 w-48 h-48 object-cover rounded-xl"
                style={{ scale }}
              />
              <h3 className="text-xl font-bold mb-2">Integration Ecosystem</h3>
              <p className="text-sm tracking-tight text-[#010D3E]">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
            <div className="relative max-w-xs w-full bg-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center">
              <motion.img
                src={starImage.src}
                alt="Goal setting and tracking"
                className="mx-auto mb-4 w-48 h-48 object-cover rounded-xl"
                style={{ scale }}
              />
              <h3 className="text-xl font-bold mb-2">
                Goal setting and tracking
              </h3>
              <p className="text-sm tracking-tight text-[#010D3E]">
                Define and track your goals, breaking down objectives into
                achievable tasks to keep your targets in sight.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="flex flex-col gap-12 items-center mt-12 lg:flex-row lg:items-stretch lg:justify-center">
            <div className="relative max-w-xs w-full bg-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center">
              <motion.img
                src={pyramidImage.src}
                alt="Integration Ecosystem"
                className="mx-auto mb-4 w-48 h-48 object-cover rounded-xl"
                style={{ scale }}
              />
              <h3 className="text-xl font-bold mb-2">Integration Ecosystem</h3>
              <p className="text-sm tracking-tight text-[#010D3E]">
                Enhance your productivity by connecting with your favorite
                tools, keeping all your essentials in one place.
              </p>
            </div>
            <div className="relative max-w-xs w-full bg-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center">
              <motion.img
                src={springImage.src}
                alt="Goal setting and tracking"
                className="mx-auto mb-4 w-48 h-48 object-cover rounded-xl"
                style={{ scale }}
              />
              <h3 className="text-xl font-bold mb-2">
                Goal setting and tracking
              </h3>
              <p className="text-sm tracking-tight text-[#010D3E]">
                Define and track your goals, breaking down objectives into
                achievable tasks to keep your targets in sight.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
