import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const BtnScroll = () => {
    const myRef = useRef()
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 900) {
              myRef.current.style.display = "block";
            } else {
              myRef.current.style.display = "none";
            }
          });
    } , [])
  const handelClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="btn-scroller hidden fixed right-5 bottom-5 text-2xl bg-[#0ef] p-3 rounded-full text-black cursor-pointer" ref={myRef} onClick={handelClick}>
        <FaArrowUp />
    </div>
  );
};
export default BtnScroll;
