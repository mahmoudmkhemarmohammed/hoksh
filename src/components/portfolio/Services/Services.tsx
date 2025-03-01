import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import { FaPencilRuler, FaReact } from "react-icons/fa";
import { GrCloudlinux } from "react-icons/gr";
import { SiFreelancer } from "react-icons/si";
import { PiCodeSimple } from "react-icons/pi";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <SpecialHeading title="Services" />
        <div className="content flex justify-between items-center gap-[10px] flex-wrap">
          <ServicesCard
            index={1}
            icon={
              <FaReact className="text-[60px] inline-block text-[#5395ff] font-bold pt-[10px]" />
            }
            title="React Developer"
            description="I specialize in developing web applications using React, and I have many projects that you can browse here"
          />
          <ServicesCard
            index={2}
            icon={
              <GrCloudlinux className="text-[60px] inline-block text-[#0ef] font-bold pt-[10px]" />
            }
            title="Ui Developer"
            description="I'm a UI Developer specializing in building interactive and responsive user interfaces using React.js and Next.js."
          />
          <ServicesCard
            index={3}
            icon={
              <FaPencilRuler className="text-[60px] inline-block text-pink-600 font-bold pt-[10px]" />
            }
            title="Web Desinger"
            description="I'm a Web Designer specializing in creating modern and visually appealing interfaces with a strong focus on UI/UX design."
          />
          <ServicesCard
            index={4}
            icon={
              <PiCodeSimple className="text-[60px] inline-block text-yellow-500 font-bold pt-[10px]" />
            }
            title="Web Development"
            description="I'm a UI Developer specializing in building interactive and responsive user interfaces using React.js and Next.js."
          />
          <ServicesCard
            index={5}
            icon={
              <SiFreelancer className="text-[60px] inline-block text-green-400 font-bold pt-[10px]" />
            }
            title="Freelancer"
            description="I'm a Freelancer Front-End Developer specializing in building modern and interactive user interfaces using React.js and Next.js"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
