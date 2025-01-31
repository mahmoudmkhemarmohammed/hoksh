import { motion } from "motion/react";
const SpecialHeading = ({ title }: { title: string }) => {
  return (
    <div className="special-headinges">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(10px)", y: 100 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: .6}}
        viewport={{once: true}}
        className="text-[#00d9ff] text-[60px] font-[900] capitalize py-[30px] max-[539px]:text-[45px] max-sm:text-center"
      >
        {title}
      </motion.h2>
    </div>
  );
};
export default SpecialHeading;
