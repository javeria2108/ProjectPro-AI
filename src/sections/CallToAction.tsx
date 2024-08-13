// src/sections/CallToAction.tsx
"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/pln2.png";
import planetImage from "@/assets/ff2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-black to-[#220828] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <RevealOnScroll>
            <h2 className="section-title">Sign up for free today</h2>
            <p className="section-description mt-5">
              Gear up for a successful final year project with tools that
              simplify your journey. From research to task management, we have
              got you covered. Embark on this mission and make your project a
              stellar success.
            </p>
          </RevealOnScroll>
          <motion.img
            src={starImage.src}
            alt="star image"
            width={320}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={planetImage.src}
            alt="spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
              rotate: "20deg", // Rotate by 30 degrees
            }}
          />
        </div>
        <RevealOnScroll>
          <div className="flex gap-2 mt-10 justify-center">
            <SignedIn>
              <button className="btn btn-primary">
                You&apos;re on the Crew!
              </button>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="btn btn-primary">Join the Crew</button>
              </SignInButton>
            </SignedOut>
            <button className="btn btn-text gap-1">
              <span>Explore Features</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
