// import Header from "@/components/Header";
//import { Hero } from "@/sections/Hero";
import { Hero } from "@/sections/Hero2";
import { Header } from "@/sections/Header";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { CallToAction } from "@/sections/CallToAction";
import BackgroundImage from "@/assets/background.jpg"
export default function Home() {
  return (
    <div>
      <div className="bg-cover bg-fit bg-no-repeat" style={{backgroundImage:`url(${BackgroundImage.src})`}}>
      <Header />
      <Hero />
      </div>
      <LogoTicker />
      <ProductShowcase />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}
