import useNav from "@hooks/useNav";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ULNav = () => {
  const { nav, activeClass, navListHandler, handelScroll, sectionsIds } =
    useNav();

  return (
    <nav className="flex justify-center items-center gap-[10px] h-full">
      <ul
        className={`${
          nav && "max-[599px]:left-[50%]"
        } flex justify-center items-center gap-[10px] max-[599px]:absolute max-[599px]:w-[100vw] max-[599px]:h-[100vh] max-[599px]:-left-full max-[599px]:-translate-x-2/4 max-[599px]:top-[-15px] max-[599px]:z-[1000] max-[599px]:flex-col max-[599px]:duration-[.4s] max-[599px]:bg-[#0a2335] max-[599px]:gap-5`}
      >
        {sectionsIds.map((li, index) => (
          <li
            key={index}
            className={`${
              activeClass === li && "text-[#0ef] animate-pulse"
            } hover:text-[#0ef] p-2 rounded-md duration-[.4s] text-[18px] capitalize font-medium text-center cursor-pointer max-[599px]:w-[95%] max-[599px]:p-5`}
            onClick={() => handelScroll(li)}
          >
            {li}
          </li>
        ))}
      </ul>

      <div
        className="list text-[35px] cursor-pointer hidden max-[599px]:block"
        onClick={navListHandler}
      >
        <HiBars3BottomRight />
        <IoIosCloseCircleOutline
          onClick={navListHandler}
          className={`${
            nav ? "block" : "hidden"
          } close-icon max-[599px]:absolute max-[599px]:z-[100000000000] max-[599px]:right-5 max-[599px]:top-5 max-[599px]:text-[#0ef] max-[599px]:text-[40px] max-[599px]:hover:text-red-600`}
        />
      </div>
    </nav>
  );
};

export default ULNav;
