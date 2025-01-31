import { FaArrowUp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
const BtnResetScroll = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (myRef.current) {
        if (window.scrollY >= 900) {
          myRef.current.style.display = "block";
        } else {
          myRef.current.style.display = "none";
        }
      }
    });
  }, []);
  const handelClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      className="btn-scroller hidden fixed right-5 bottom-5 text-2xl bg-[#0ef] p-3 rounded-full text-black cursor-pointer"
      ref={myRef}
      onClick={handelClick}
    >
      <FaArrowUp />
    </motion.div>
  );
};

export default BtnResetScroll;
