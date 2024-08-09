// src/sections/Hero2.tsx
"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/nebula2.png";
import Image from "next/image";
import cylinderImage from "@/assets/ss2.png";
import noodleImage from "@/assets/planet2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import planetImage1 from "@/assets/planet3.png";
import planetImage2 from "@/assets/planet4.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-transparent overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <RevealOnScroll>
              <div className="tag">Version 1.0 coming soon</div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                ProjectPro AI
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Discover, organize, and conquer your final year project with
                AI-powered tools and resources.
              </p>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="flex gap-1 items-center mt-[30px]">
                <SignedIn>
                  <button className="btn btn-primary">
                    You're on the crew!
                  </button>
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="btn btn-primary">Join the crew</button>
                  </SignInButton>
                </SignedOut>
                <button className="btn btn-text gap-1">
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div>
            </RevealOnScroll>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <RevealOnScroll>
            <motion.div
  className="hidden lg:block absolute top-[524px] left-[448px] cursor-grab"
  style={{
    rotate: 30,
    translateY: translateY,
  }}
  drag
  dragConstraints={{
    top: -50,
    left: -50,
    right: 50,
    bottom: 50,
  }}
  dragElastic={0.1}
  whileDrag={{ scale: 1.1 }}
>
  <Image src={planetImage2.src} width={200} height={220} alt="planet image" />
</motion.div>

              <motion.img
                src={cogImage.src}
                alt="planet image"
                className="md:absolute md:h-full md:w-auto md:max-w-none md:right-0 md:bottom-0"
                animate={{
                  translateY: [-30, 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="hidden md:block absolute -top-8 -left-32 cursor-grab"
                style={{ translateY }}
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                dragElastic={0.1}
                whileDrag={{ scale: 1.1 }}
              >
                <Image
                  src={planetImage1.src}
                  width={220}
                  height={220}
                  alt="planet image"
                />
              </motion.div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
