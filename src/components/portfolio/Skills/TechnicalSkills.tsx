import { FaBootstrap, FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import SkillsLanguageBar from "./SkillsLanguageBar";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";
type TSkillsProps = {
  html: number;
  css: number;
  js: number;
  bootstrap: number;
  tailwind: number;
  react: number;
  sass: number;
};

const TechnicalSkills = ({
  html,
  css,
  js,
  bootstrap,
  tailwind,
  react,
  sass,
}: TSkillsProps) => {
  return (
    <motion.div
      className="technical-skills"
      initial={{ opacity: 0, y: -20, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl mb-5 capitalize text-[#0ef] font-extrabold max-[440px]:text-3xl">
        Technical skills
      </h2>
      <div className="skills-box h-[613px] py-[50px] px-[25px] bg-[#243945] rounded-[10px] border-[2px] border-solid border-[#0ef] *:*:text-[35px] *:*:font-medium max-[449px]:h-fit">
        <SkillsLanguageBar
          bg="bg-[orangered]"
          skills={html}
          icon={<FaHtml5 className="text-[orangered]" />}
        />
        <SkillsLanguageBar
          bg="bg-[#0400ff]"
          skills={css}
          icon={<FaCss3 className="text-[#0400ff]" />}
        />
        <SkillsLanguageBar
          bg="bg-[#ffff00]"
          skills={js}
          icon={<IoLogoJavascript className="text-[#ffff00]" />}
        />
        <SkillsLanguageBar
          bg="bg-[#0d6efd]"
          skills={bootstrap}
          icon={<FaBootstrap className="text-[#0d6efd]" />}
        />
        <SkillsLanguageBar
          bg="bg-[#0ea5e9]"
          skills={tailwind}
          icon={<RiTailwindCssFill className="text-[#0ea5e9]" />}
        />
        <SkillsLanguageBar
          bg="bg-[#ff009d]"
          skills={sass}
          icon={<FaSass className="text-[#ff009d]" />}
        />
        <SkillsLanguageBar
          bg="bg-[#0ea5e9]"
          skills={react}
          icon={<FaReact className="text-[#0ea5e9]" />}
        />
      </div>
    </motion.div>
  );
};

export default TechnicalSkills;
