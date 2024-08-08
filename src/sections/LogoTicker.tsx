"use client";
import nextLogo from "@/assets/logo-next.png";
import tailwindLogo from "@/assets/logo-tw.png";
import typescriptLogo from "@/assets/logo-ts.png";
import reactLogo from "@/assets/logo-react.png";
import mongoLogo from "@/assets/logo-mongo.png";
import Image from "next/image";
import nodeLogo from "@/assets/logo-node.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={reactLogo} alt="react logo" />
            <Image
              src={nextLogo}
              alt="next logo"
              className="logo-ticker-image"
            />
            <Image
              src={typescriptLogo}
              alt="typescript logo"
              className="logo-ticker-image"
            />
            <Image
              src={tailwindLogo}
              alt="tailwind logo"
              className="logo-ticker-image"
            />
            <Image
              src={nodeLogo}
              alt="node logo"
              className="logo-ticker-image"
            />
            <Image
              src={mongoLogo}
              alt="mongodb logo"
              className="logo-ticker-image"
            />
            {/* 
2nd set */}
            <Image src={reactLogo} alt="react logo" />
            <Image
              src={nextLogo}
              alt="next logo"
              className="logo-ticker-image"
            />
            <Image
              src={typescriptLogo}
              alt="typescript logo"
              className="logo-ticker-image"
            />
            <Image
              src={tailwindLogo}
              alt="tailwind logo"
              className="logo-ticker-image"
            />
            <Image
              src={nodeLogo}
              alt="node logo"
              className="logo-ticker-image"
            />
            <Image
              src={mongoLogo}
              alt="mongodb logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
