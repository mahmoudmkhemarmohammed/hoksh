import { HiBars3BottomRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const ul = useRef();
  const [nav, setNav] = useState(false);
  const navList = () => {
    setNav(!nav);
  };
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Backspace" || e.key === "Escape") {
        setNav(false);
      }
    });
    document.querySelectorAll("header .container ul li").forEach((sec) => {
      sec.addEventListener("click", function () {
        ul.current.classList.contains("open") &&
          ul.current.classList.remove("open");
        document.querySelector("header .container .close-icon").style.display =
          "none";
          console.log();
          if(window.location.pathname === "/") {
            document
            .querySelector(this.dataset.section)
            .scrollIntoView({ behavior: "smooth" });
          }
          else {
            setTimeout(() => {
              document
              .querySelector(this.dataset.section)
              .scrollIntoView({ behavior: "smooth" });
            } , 300)
          }
      });
    });
  }, []);
  return (
    <header className="bg-[#0a2335] h-[70px] py-[15px] px-[10px] sticky top-0 z-[100000000000]">
      <div className="container flex justify-between items-center h-full relative">
        <div className="logo w-[40px] h-[40px] overflow-hidden">
          <img
            src={require("../assets/images/logo.jpg")}
            alt="logo"
            loading="lazy"
          />
        </div>
        <nav className="flex justify-center items-center gap-[10px] h-full">
          <ul
            ref={ul}
            className={`${
              nav ? "open" : ""
            } flex justify-center items-center gap-[10px] *:p-[7px] *:rounded-[5px] *:duration-[.4s] *:text-[18px] *:capitalize *:font-[500] *:text-center *:cursor-pointer max-[599px]:absolute max-[599px]:w-[100vw] max-[599px]:h-[100vh] max-[599px]:-left-full max-[599px]:-translate-x-2/4 max-[599px]:top-[-15px] max-[599px]:z-[1000] max-[599px]:flex-col max-[599px]:duration-[.4s] max-[599px]:bg-[#0a2335] max-[599px]:gap-10 max-[599px]:*:w-[95%] max-[599px]:*:p-5`}
          >
            <li className="active" data-section=".home">
              <Link to="/">Home</Link>
            </li>
            <li data-section=".services">
              <Link to="/">Services</Link>
            </li>
            <li data-section=".portfolio">
              <Link to="/">Portfolio</Link>
            </li>
            <li data-section=".skils">
              <Link to="/">Skils</Link>
            </li>
            <li data-section=".about">
              <Link to="/">About</Link>
            </li>
            <li data-section=".contact">
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div
            className="list text-[35px] cursor-pointer hidden max-[599px]:block"
            onClick={navList}
          >
            <HiBars3BottomRight />
            <IoIosCloseCircleOutline
              onClick={navList}
              className={`close-icon hidden max-[599px]:absolute max-[599px]:z-[100000000000] max-[599px]:right-5 max-[599px]:top-5 max-[599px]:text-[#0ef] max-[599px]:text-[40px] max-[599px]:hover:text-red-600`}
              style={nav ? { display: "block" } : { display: "none" }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
