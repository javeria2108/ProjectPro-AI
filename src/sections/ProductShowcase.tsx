"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/lg.png";
import tubeImage from "@/assets/planet.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <RevealOnScroll>
            <div className="flex justify-center">
              <div className="tag">Innovate, research, and achieve</div>
            </div>
            <h2 className="section-title mt-5">
              Your Final Year Project Companion
            </h2>
            <p className="section-description mt-5">etc etc sum text</p>
          </RevealOnScroll>
        </div>
        <div className="relative">
          <RevealOnScroll>
            <Image src={productImage} alt="Product Image" className="mt-10" />
          </RevealOnScroll>
          <motion.img
            src={pyramidImage.src}
            height={262}
            width={262}
            alt="pyramid image"
            className="hidden md:block absolute -right-36 -top-32 rotate-[10deg]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-20 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
