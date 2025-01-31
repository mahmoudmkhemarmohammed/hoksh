import scrollHandler from "@utils/scrollHandler";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const useNav = () => {
  const navigate = useNavigate()
  const [nav, setNav] = useState(false);
  const [activeClass, setActiveClass] = useState("home");
  const navListHandler = () => {
    setNav(!nav);
  };

  const sectionsIds = [
    "home",
    "services",
    "portfolio",
    "skills",
    "about",
    "contact",
  ];

  const handelScroll = (id: string) => {
    navigate("/")
    setNav(false);
    setActiveClass(id);
    scrollHandler(id)
  };
  
  return {
    nav,
    setNav,
    activeClass,
    navListHandler,
    handelScroll,
    sectionsIds,
  };
};

export default useNav;
