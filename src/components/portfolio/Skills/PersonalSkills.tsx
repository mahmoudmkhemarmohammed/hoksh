import SkillsProgressBar from "./SkillsProgressBar";
import { motion } from "motion/react";
const PersonalSkills = ({ activeClass }: { activeClass: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
      className="personal-skills"
    >
      <h2 className="text-4xl mb-5 capitalize text-[#4cff30] font-extrabold max-[440px]:text-3xl">
        Personal skills
      </h2>
      <div className="skills-box h-[613px] py-[50px] px-[25px] bg-[#243945] rounded-[10px] border-[2px] border-solid border-[#0ef] text-center flex justify-between items-center gap-x-5 gap-y-4 flex-wrap">
        <SkillsProgressBar
          index={1}
          color="#0ef"
          persent="300deg"
          name="Proplem Solving"
          persentNum="80%"
          activeClass={activeClass}
        />
        <SkillsProgressBar
          index={2}
          color="orangered"
          persent="330deg"
          name="Communction"
          persentNum="90%"
          activeClass={activeClass}
        />
        <SkillsProgressBar
          index={3}
          color="#ffff00"
          persent="330deg"
          name="Teamwork"
          persentNum="90%"
          activeClass={activeClass}
        />
        <SkillsProgressBar
          index={4}
          color="#0d6efd"
          persent="345deg"
          name="Creativity"
          persentNum="95%"
          activeClass={activeClass}
        />
        <SkillsProgressBar
          index={5}
          color="#0ea5e9"
          persent="300deg"
          name="English"
          persentNum="80%"
          activeClass={activeClass}
        />
        <SkillsProgressBar
          index={6}
          color="#ff009d"
          persent="300deg"
          name="Pressure tolerance"
          persentNum="80%"
          activeClass={activeClass}
        />
      </div>
    </motion.div>
  );
};

export default PersonalSkills;
