import {
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { useEffect, useState, useRef } from "react";
import SpecialHeading from "./SpecialHeading";
import SkilsLanguageBar from "./SkilsLanguageBar";
import SkilsProgressBar from "./SkilsProgressBar";
const Skils = () => {
  const [skils, setSkils] = useState({
    html: 0,
    css: 0,
    js: 0,
    bootstrap: 0,
    taliwind: 0,
    sass: 0,
    react: 0,
  });
  const myRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (myRef.current != null) {
        if (window.scrollY >= myRef.current.offsetTop) {
          setSkils({
            html: 90,
            css: 85,
            js: 80,
            bootstrap: 85,
            taliwind: 90,
            sass: 85,
            react: 75,
          });
          document.querySelectorAll(".personal-skils .circle").forEach( cir => cir.classList.add("active"))
        } else {
          setSkils({
            html: 0,
            css: 0,
            js: 0,
            bootstrap: 0,
            taliwind: 0,
            sass: 0,
            react: 0,
          });
          document.querySelectorAll(".personal-skils .circle").forEach( cir => cir.classList.remove("active"))
        }
      }
    });
  }, []);
  return (
    <section className="skils" ref={myRef}>
      <div className="container">
        <SpecialHeading title="Skils" />
        <div className="img w-full h-[400px] flex justify-center items-center p-2 overflow-hidden">
          <div className="img-box w-[270px] h-[270px] rounded-full relative max-[470px]:w-[250px] max-[470px]:h-[250px]">
            <div className="img-content rounded-full w-full h-full overflow-hidden">
              <img className="w-full" src={require("../assets/images/6.jpg")} alt="profile" />
            </div>
          </div>
        </div>
        <div className="skils-content grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <div className="technical-skils">
            <h2 className="text-4xl mb-5 capitalize text-[#0ef] font-extrabold max-[440px]:text-3xl">Technical Skils</h2>
            <div className="skils-box h-[613px] py-[50px] px-[25px] bg-[#243945] rounded-[10px] border-[2px] border-solid border-[#0ef] *:*:text-[35px] *:*:font-medium max-[449px]:h-fit">
            <SkilsLanguageBar bg="bg-[orangered]" skils={skils.html} icon={<FaHtml5 className="text-[orangered]"/>} />
            <SkilsLanguageBar bg="bg-[#0400ff]" skils={skils.css} icon={<FaCss3 className="text-[#0400ff]"/>} />
            <SkilsLanguageBar bg="bg-[#ffff00]" skils={skils.js} icon={<IoLogoJavascript className="text-[#ffff00]"/>} />
            <SkilsLanguageBar bg="bg-[#0d6efd]" skils={skils.bootstrap} icon={<FaBootstrap className="text-[#0d6efd]"/>} />
            <SkilsLanguageBar bg="bg-[#0ea5e9]" skils={skils.taliwind} icon={<RiTailwindCssFill className="text-[#0ea5e9]"/>} />
            <SkilsLanguageBar bg="bg-[#ff009d]" skils={skils.sass} icon={<FaSass className="text-[#ff009d]"/>} />
            <SkilsLanguageBar bg="bg-[#0ea5e9]" skils={skils.react} icon={<FaReact className="text-[#0ea5e9]"/>} />
        </div>
          </div>
          <div className="personal-skils">
            <h2 className="text-4xl mb-5 capitalize text-[#4cff30] font-extrabold max-[440px]:text-3xl">Personal Skils</h2>
          <div className="skils-box h-[613px] py-[50px] px-[25px] bg-[#243945] rounded-[10px] border-[2px] border-solid border-[#0ef] text-center flex justify-between items-center gap-x-5 gap-y-4 flex-wrap">
            <SkilsProgressBar color="#0ef" persent="300deg" name="Proplem Solving"persentNum="80%"/>
            <SkilsProgressBar color="orangered" persent="330deg" name="Communction"persentNum="90%"/>
            <SkilsProgressBar color="#ffff00" persent="330deg" name="Teamwork" persentNum="90%"/>
            <SkilsProgressBar color="#0d6efd" persent="345deg" name="Creativity" persentNum="95%"/>
            <SkilsProgressBar color="#0ea5e9" persent="300deg" name="English" persentNum="80%"/>
            <SkilsProgressBar color="#ff009d" persent="300deg" name="Pressure tolerance" persentNum="80%"/>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skils;