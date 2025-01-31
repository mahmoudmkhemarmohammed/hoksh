import { motion } from "motion/react";
const LiFilter = ({
  title,
  children,
  onClick,
  className,
  index,
}: {
  title?: string;
  children?: React.ReactNode;
  onClick: () => void;
  className: string | boolean;
  index: number;
}) => {
  return (
    <motion.li
      transition={{
        duration: 0.1,
        delay: typeof index === "number" ? index * 0.1 : 0,
      }}
      initial={{ opacity: 0, scale: 0, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`flex justify-center items-center gap-3 flex-wrap cursor-pointer p-[15px] w-full text-[32px] min-h-[70px] rounded-[10px] duration-300 ${
        className ? className : "bg-[#1c2c36]"
      } hover:bg-[#0ef] max-sm:text-[25px] max-sm:h-[92px]`}
    >
      {title}
      {children}
    </motion.li>
  );
};

export default LiFilter;
