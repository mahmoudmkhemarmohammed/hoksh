import scrollHandler from "@utils/scrollHandler";
import { motion } from "motion/react";
const ServicesCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      transition={{
        duration: 0.6,
        delay: typeof index === "number" ? index * 0.1 : 0,
      }}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      className="col w-[300px] h-[390px] flex-grow bg-[#243945] flex justify-evenly items-center flex-col gap-[10px] p-[15px] rounded-[15px] text-center duration-[.4s] cursor-pointer border-[2px] border-solid border-[transparent] hover:border-[#0ef]"
    >
      {icon}
      <h2 className="text-[32px] font-extrabold pt-[10px] capitalize leading-[2] max-sm:text-[27px]">
        {title}
      </h2>
      <p className="text-[16px] capitalize leading-[2]">{description}</p>
      <span
        className="inline-block w-2/4 bg-[#0ef] text-[18px] font-bold capitalize rounded-[20px] cursor-pointer p-[15px] text-black duration-300 shadow-[0 0 10px] shadow-shadowButton hover:bg-[#001a25] hover:text-white "
        onClick={() => scrollHandler("portfolio")}
      >
        my project
      </span>
    </motion.div>
  );
};
export default ServicesCard;
