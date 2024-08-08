//import Header from "@/components/Header";
import { Hero } from "@/sections/Hero";
import Background from "@/assets/background.jpg";
import {Header} from "@/sections/Header";
export default function Home() {
  return (
    <div className="bg-cover bg-fit bg-no-repeat " style={{backgroundImage: `url(${Background.src})`}}>
      <Header/>
      <Hero/>
    </div>
  );
}
