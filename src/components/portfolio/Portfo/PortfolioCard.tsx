import LazyImg from "@components/common/LazyImg/LazyImg";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const PortfolioCard = ({
  img,
  title,
  link,
  id
}: {
  img: string;
  title: string;
  link: string;
  id: number;
}) => {
  return (
    <motion.div
      transition={{
        duration: 0.4,
      }}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      className={`card bg-[#243945] rounded-[15px] h-fit overflow-hidden duration-[.4s] border-[2px] border-solid border-transparent hover:border-[#0ef]`}
    >
      <div className="img h-[300px] p-[10px]">
        <LazyImg src={img} alt={title} className="h-full w-full" />
      </div>
      <div className="text py-5 text-center">
        <h3 className="text-[25px] font-extrabold capitalize mb-[10px]">
          {title}
        </h3>
        <div className="btns flex justify-around items-center p-[10px] gap-[15px]">
          <a
            target="_blank"
            className="inline-block text-xl font-bold capitalize border-none outline-none text-black bg-[#0ef] p-[10px] rounded-[5px] w-[100px] hover:bg-white hover:text-black"
            href={link}
          >
            Open
          </a>
          <Link
            to={`/project-details/${id}`}
            className="inline-block text-xl font-bold capitalize border-none outline-none text-black bg-white p-[10px] rounded-[5px] w-[100px] hover:bg-[#0ef]"
          >
            Detalis
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
