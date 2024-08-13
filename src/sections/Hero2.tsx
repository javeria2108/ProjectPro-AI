"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import planetImage1 from "@/assets/planet3.png";
import planetImage2 from "@/assets/planet4.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const planet1Ref = useRef(null);
  const planet2Ref = useRef(null);

  useEffect(() => {
    const planet1 = planet1Ref.current;
    const planet2 = planet2Ref.current;

    // Function to create random floating animation
    const floatAnimation = (element: any, xRange: number, yRange: number) => {
      gsap.to(element, {
        x: `+=${gsap.utils.random(-xRange, xRange)}`,
        y: `+=${gsap.utils.random(-yRange, yRange)}`,
        duration: gsap.utils.random(2, 4),
        ease: "power1.inOut",
        onComplete: () => floatAnimation(element, xRange, yRange), // Repeat animation
      });
    };

    // Apply floating animation to both planets
    floatAnimation(planet1, 50, 30);
    floatAnimation(planet2, 60, 40);
  }, []);

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
                    You&apos;re on the crew!
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
          <div className="hidden md:block mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <div ref={planet1Ref} className="absolute top-10 right-[30%]">
              <Image
                src={planetImage1.src}
                width={220}
                height={220}
                alt="planet image"
              />
            </div>
            <div ref={planet2Ref} className="hidden md:block absolute bottom-10 right-[20%]">
              <Image
                src={planetImage2.src}
                width={200}
                height={220}
                alt="planet image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
