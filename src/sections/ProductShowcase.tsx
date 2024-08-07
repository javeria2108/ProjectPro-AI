import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/lg.png";
import tubeImage from "@/assets/planet.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Innovate, research, and achieve</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Your Final Year Project Companion
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            etc etc sum text
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <Image
            src={pyramidImage}
            height={262}
            width={262}
            alt="pyramid image"
            className="hidden md:block absolute -right-36 -top-32 rotate-[10deg]"
          />
          <Image
            src={tubeImage}
            alt="tube image"
            height={248}
            className="hidden md:block absolute bottom-20 -left-36"
          ></Image>
        </div>
      </div>
    </section>
  );
};
