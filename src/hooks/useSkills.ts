import { useEffect, useRef, useState } from "react";

const useSkills = () => {
  const [activeClass, setActiveClass] = useState(false);
  const [skills, setskills] = useState({
    html: 0,
    css: 0,
    js: 0,
    bootstrap: 0,
    tailwind: 0,
    sass: 0,
    react: 0,
  });
  const myRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (myRef.current != null) {
        if (window.scrollY >= myRef.current.offsetTop) {
          setskills({
            html: 90,
            css: 85,
            js: 80,
            bootstrap: 85,
            tailwind: 90,
            sass: 85,
            react: 85,
          });
          setActiveClass(true);
        } else {
          setskills({
            html: 0,
            css: 0,
            js: 0,
            bootstrap: 0,
            tailwind: 0,
            sass: 0,
            react: 0,
          });
          setActiveClass(false);
        }
      }
    });
  }, [activeClass]);
  return {skills , activeClass , myRef};
};

export default useSkills;
