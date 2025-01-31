import { motion } from "motion/react";
const SkillsProgressBar = ({
  color,
  persent,
  persentNum,
  name,
  activeClass,
  index,
}: {
  color: string;
  persent: string;
  persentNum: string;
  name: string;
  activeClass: boolean;
  index: number; // index for delay animation
}) => {
  return (
    <>
      {activeClass && (
        <div className="w-[47%] flex justify-center items-center max-[415px]:w-[45%]">
          <motion.div
            transition={{
              duration: 0.4,
              delay: typeof index === "number" ? index * 0.1 : 0,
            }}
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: `conic-gradient(${color} ${persent} , #ffff 0deg)`,
            }}
            className={`${
              activeClass && "active"
            } circle flex justify-center items-center w-[140px] h-[140px] rounded-full relative before:content-[''] before:absolute before:w-[90%] before:h-[90%] before:bg-[#142e30] before:rounded-full max-[415px]:w-[110px] max-[415px]:h-[110px]`}
          >
            <div className="flex justify-center items-center flex-col relative z-50 font-bold">
              <span className="inline-block text-[30px] max-[415px]:text-[20px]">
                {persentNum}
              </span>
              <span className="inline-block text-[13px] max-[415px]:text-[11px]">
                {name}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SkillsProgressBar;
