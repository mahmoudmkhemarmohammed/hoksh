import ServicesCard from "./ServicesCard";
import SpecialHeading from "./SpecialHeading";
import { FaPencilRuler , FaReact} from "react-icons/fa";
import { GrCloudlinux } from "react-icons/gr";
import { SiFreelancer } from "react-icons/si";
import { PiCodeSimple } from "react-icons/pi";
import { useEffect } from "react";
import { sr } from "..";
const Services = () => {
  useEffect(() => {
    sr.reveal(".services .container .content .col" , {origin: "bottom" , interval: 400})
  })
  return (
    <section className="services">
      <div className="container">
        <SpecialHeading title="Services"/>
        <div className="content flex justify-between items-center gap-[10px] flex-wrap">
            <ServicesCard icon={<FaReact className="text-[60px] inline-block text-[#5395ff] font-bold pt-[10px]"/>} title="React Developer"/>
            <ServicesCard icon={<GrCloudlinux className="text-[60px] inline-block text-[#0ef] font-bold pt-[10px]"/>} title="Ui Developer"/>
            <ServicesCard icon={<FaPencilRuler className="text-[60px] inline-block text-pink-600 font-bold pt-[10px]"/>} title="Web Desinger"/>
            <ServicesCard icon={<PiCodeSimple className="text-[60px] inline-block text-yellow-500 font-bold pt-[10px]"/>} title="Web Development"/>
            <ServicesCard icon={<SiFreelancer className="text-[60px] inline-block text-green-400 font-bold pt-[10px]"/>} title="Freelancer"/>
        </div>
      </div>
    </section>
  );
}
export default Services;