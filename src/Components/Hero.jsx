import { useEffect, useState } from "react";
import Particle from "./Particles";
import { sr } from "..";
const Hero = () => {
  const [writer, setWriter] = useState("");
  useEffect(() => {
    sr.reveal(".home .container img" , {origin: "bottom"})
    const sleep = (ms) => {
      return new Promise((res) => setTimeout(res, ms));
    };
    const sleepTime = 100;
    let currentIndex = 0;
    const text = [
      "Front End Developer",
      "React Developer",
      "UI Developer",
      "Freelancer",
    ];
    const writerHandeler = async () => {
      while (true) {
        let wordIndex = text[currentIndex];
        for (let i = 0; i < wordIndex.length; i++) {
          setWriter(wordIndex.substring(0, i + 1));
          await sleep(sleepTime);
        }
        await sleep(sleepTime * 10);
        for (let i = wordIndex.length; i > 0; i--) {
          setWriter(wordIndex.substring(0, i - 1));
          await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);
        if (currentIndex === text.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
      }
    };
    writerHandeler();
  }, []);
  return (
    <>
      <Particle />
      <section className="home">
        <div className="container min-h-heightHome flex justify-between items-center max-lg:flex-col-reverse max-lg:text-center max-lg:justify-center">
          <div className="text w-[45%] max-lg:w-full">
            <h2 className="text-[38px] uppercase font-bold mb-3 max-sm:text-[24px]">
              Hi I'm Mahmoud Mkhemar
            </h2>
            <h3 className="text-3xl capitalize text-[#0ef] font-bold mb-3 max-sm:text-[20px]">
              <span className="text-content">{writer}</span>
              <span className="writer">|</span>
            </h3>
            <p className="max-w-[84%] text-[18px] leading-[2] max-lg:max-w-full max-sm:text-[15px]">
              My Name Is Mahmoud Mkhemar. I Work As A Front-End Developer. I
              Have Many Skills In The Field Of Web Development. You Can Browse
              My Previous Work
            </p>
          </div>
          <div className="rot-images w-[480px] overflow-hidden rounded-full flex justify-center items-center max-lg:w-full">
            <img
              className="w-full"
              src={require("../assets/images/profile.jpg")}
              loading="lazy"
              alt="profile"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
