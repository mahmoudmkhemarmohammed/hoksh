import Profile from "@assets/images/profile.jpg";
import LazyImg from "@components/common/LazyImg/LazyImg";
import Particle from "./Particle";
import useHero from "@hooks/useHero";
import { motion } from "motion/react";
const Hero = () => {
  const { writer } = useHero();

  return (
    <>
      <Particle />
      <section id="home">
        <div className="container min-h-heightLayout flex justify-between items-center max-lg:flex-col-reverse max-lg:text-center max-lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text w-[45%] max-lg:w-full"
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="rot-images w-[480px] overflow-hidden rounded-full flex justify-center items-center max-lg:w-full"
          >
            <LazyImg loading="eager" src={Profile} alt="profile" className="w-full" />
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Hero;
