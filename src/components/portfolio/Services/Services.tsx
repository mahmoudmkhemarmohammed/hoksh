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
          />
          <ServicesCard
            index={2}
            icon={
              <GrCloudlinux className="text-[60px] inline-block text-[#0ef] font-bold pt-[10px]" />
            }
            title="Ui Developer"
          />
          <ServicesCard
            index={3}
            icon={
              <FaPencilRuler className="text-[60px] inline-block text-pink-600 font-bold pt-[10px]" />
            }
            title="Web Desinger"
          />
          <ServicesCard
            index={4}
            icon={
              <PiCodeSimple className="text-[60px] inline-block text-yellow-500 font-bold pt-[10px]" />
            }
            title="Web Development"
          />
          <ServicesCard
            index={5}
            icon={
              <SiFreelancer className="text-[60px] inline-block text-green-400 font-bold pt-[10px]" />
            }
            title="Freelancer"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
