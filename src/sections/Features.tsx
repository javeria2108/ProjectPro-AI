import trial from "@/assets/planet.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import starImage from "@/assets/star.png";
import pyramidImage from "@/assets/pyramid.png";
import springImage from "@/assets/spring.png";

export const Features = () => {
  return (
    <section className="bg-white py-24 overflow-x-clip">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center">
          <div className="flex justify-center">
            <div className="tag">Everything you need</div>
          </div>
          <h2 className="section-title mt-5">
            Streamlined for easy management
          </h2>
          <p className="section-description mt-5">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="flex flex-col gap-12 items-center mt-10 lg:flex-row lg:items-stretch lg:justify-center">
          <div className="relative max-w-xs w-full bg-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center">
            <Image
              src={cylinderImage}
              alt="Integration Ecosystem"
              className="mx-auto mb-4 w-56 h-56 object-cover rounded-xl"
            />
            <h3 className="text-xl font-bold mb-2">Integration Ecosystem</h3>
            <p className="text-sm tracking-tight text-[#010D3E]">
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place.
            </p>
          </div>
          <div className="relative max-w-xs w-full bg-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center">
            <Image
              src={starImage}
              alt="Goal setting and tracking"
              className="mx-auto mb-4 w-56 h-56 object-cover rounded-xl"
            />
            <h3 className="text-xl font-bold mb-2">
              Goal setting and tracking
            </h3>
            <p className="text-sm tracking-tight text-[#010D3E]">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center mt-12 lg:flex-row lg:items-stretch lg:justify-center">
          <div className="relative max-w-xs w-full bg-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center">
            <Image
              src={pyramidImage}
              alt="Integration Ecosystem"
              className="mx-auto mb-4 w-56 h-56 object-cover rounded-xl"
            />
            <h3 className="text-xl font-bold mb-2">Integration Ecosystem</h3>
            <p className="text-sm tracking-tight text-[#010D3E]">
              Enhance your productivity by connecting with your favorite tools,
              keeping all your essentials in one place.
            </p>
          </div>
          <div className="relative max-w-xs w-full bg-white p-6 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] text-center">
            <Image
              src={springImage}
              alt="Goal setting and tracking"
              className="mx-auto mb-4 w-56 h-56 object-cover rounded-xl"
            />
            <h3 className="text-xl font-bold mb-2">
              Goal setting and tracking
            </h3>
            <p className="text-sm tracking-tight text-[#010D3E]">
              Define and track your goals, breaking down objectives into
              achievable tasks to keep your targets in sight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
