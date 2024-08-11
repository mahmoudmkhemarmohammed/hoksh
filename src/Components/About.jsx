import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import SpecialHeading from "./SpecialHeading";
import { useEffect } from "react";
import { sr } from "..";
const About = () => {
  useEffect(() => {
    sr.reveal(".about .container .about-contact .about ,.about .container .about-contact .social" , {origin: "bottom" , interval: 400})
  } , [])
  return (
    <section className="about">
      <div className="container">
        <SpecialHeading title="About" />
        <div className="about-contact grid grid-cols-2 gap-5 max-[767px]:grid-cols-1">
          <div className="about p-5 w-[100%] min-h-[385px] rounded-[10px] duration-300 cursor-pointer border-[2px] border-solid border-transparent bg-[#243945] hover:scale-[.9] hover:border-[#0ef] hover:shadow-shadowAbout">
            <h2 className="text-[45px] text-[#0ef] text-center capitalize font-[900] mb-[15px] max-lg:text-[38px]">About Me</h2>
            <h3 className="text-3xl font-[900] capitalize text-[#0ef] mb-[10px] p-1">
              I'M: <span className="text-2xl text-white">Mahmoud Mkhemar</span>
            </h3>
            <h3 className="text-3xl font-[900] capitalize text-[#0ef] mb-[10px] p-1">
              <span className="text-2xl text-white">Front End Developer</span>
            </h3>
            <h3 className="text-3xl font-[900] capitalize text-[#0ef] mb-[10px] p-1">
              My Age: <span className="text-2xl text-white">21</span>
            </h3>
            <h3 className="text-3xl font-[900] capitalize text-[#0ef] mb-[10px] p-1">
              Place Of Birth: <span className="text-2xl text-white">Elmonofeya</span>
            </h3>
          </div>
          <div className="social py-5 w-[100%] min-h-[385px] rounded-[10px] duration-300 cursor-pointer border-[2px] border-solid border-transparent bg-[#243945] hover:scale-[.9] hover:border-[#0ef] hover:shadow-shadowAbout">
            <h2 className="text-[45px] text-[#0ef] text-center capitalize font-[900] mb-[15px] max-lg:text-[38px]">Social Media</h2>
            <div className="icon flex justify-around items-center mb-[15px] p-1">
              <h3 className="text-3xl font-bold capitalize">Facebook</h3>
              <a href="https://www.facebook.com/profile.php?id=100021987258084&mibexitd=ZbWKwL">
                <FaFacebook className="text-4xl text-[#05f] duration-300 hover:scale-[1.2]" />
              </a>
            </div>
            <div className="icon flex justify-around items-center mb-[15px] p-1">
              <h3 className="text-3xl font-bold capitalize">linkedin</h3>
              <a href="/">
                <FaLinkedin className="text-4xl text-[#4781ff] duration-300 hover:scale-[1.2]" />
              </a>
            </div>
            <div className="icon flex justify-around items-center mb-[15px] p-1">
              <h3 className="text-3xl font-bold capitalize">instagram</h3>
              <a href="/">
                <FaInstagram className="text-4xl text-[#ff38d1] duration-300 hover:scale-[1.2]" />
              </a>
            </div>
            <div className="icon flex justify-around items-center mb-[15px] p-1">
              <h3 className="text-3xl font-bold capitalize">whatsapp</h3>
              <a href="https://api.whatsapp.com/send/?phone=201151920359&text&type=phone_number&app_absent=0">
                <FaWhatsapp className="text-4xl text-[#16b147] duration-300 hover:scale-[1.2]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
