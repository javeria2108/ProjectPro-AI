// import Header from "@/components/Header";
// import { Hero } from "@/sections/Hero";
import { Hero } from "@/sections/Hero2";
import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Features } from "@/sections/Features";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <Features/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
