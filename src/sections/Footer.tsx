'use client'
import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { toast } from 'sonner';

export const Footer = () => {
  const handleClick = () => {
    toast("Coming soon", {
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
      duration: 3000,
    });
  };
  return (
    <footer className="bg-[#220828] text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="saas logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#about">About</a>
          <a href="#product">Product</a>
          <a href="#features">Features</a>
       
          <SignedIn>
                 
                  <a href="/">You&apos;re on the crew</a>
       
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                  
                    <a href="/">Join the crew</a>
       
                  </SignInButton>
                </SignedOut>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
        <SocialX onClick={handleClick} />
          <SocialInsta onClick={handleClick} />
          <SocialLinkedin onClick={handleClick} />
          <SocialPin onClick={handleClick} />
          <SocialYoutube onClick={handleClick} />
        </div>
        <p className="mt-6">&copy; 2024 Mkhan, JZ. All rights reserved.</p>
      </div>
    </footer>
  );
};
