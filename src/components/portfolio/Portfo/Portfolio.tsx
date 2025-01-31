import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import { FaCss3, FaDatabase, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import LiFilter from "./LiFilter";
import usePortfolio from "@hooks/usePortfolio";
import PortfolioCard from "./PortfolioCard";
import { TCard } from "src/types/card.type";
import Loading from "@components/feedback/Loading/Loading";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const Portfolio = () => {
  const {
    projects,
    perfix,
    perfixHandler,
    loading,
    error,
    page,
    arrayFromTotalPage,
    handelPagination,
    handelPrevAndNextButton,
    total,
  } = usePortfolio();

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <SpecialHeading title="Projects" />
        <div className={`content flex justify-between ${projects.length > 0 && "min-h-screen"} gap-5 max-sm:flex-col-reverse`}>
          <div
            className={`${
              (projects.length > 0 && loading == "fulfilled") ||
              (projects.length === 0 && loading === "pending") ||
              projects.length > 0
                ? "projects-box w-9/12 grid grid-cols-projectCard gap-5 max-sm:w-full"
                : "grow"
            }`}
          >
            <Loading status={loading} error={error}>
              {projects.map((card: TCard, index) => (
                <PortfolioCard
                  index={index}
                  key={card.id}
                  title={card.title}
                  img={`${import.meta.env.VITE_BASE_URL}${card.img}`}
                  id={card.id}
                  link={card.link}
                />
              ))}
            </Loading>
          </div>
          <div className="filter overflow-x-hidden w-1/5 h-[500px] sticky top-[70px] bg-[#243945] rounded-xl px-[25px] max-sm:h-[120px] max-sm:w-full max-sm:px-2">
            <ul className="h-full flex justify-center items-center flex-col max-sm:flex-row gap-5 max-sm:gap-1">
              <LiFilter
                title="All"
                onClick={() => perfixHandler("")}
                className={perfix == "" && "bg-[#0ef]"}
                index={1}
              />

              <LiFilter
                onClick={() => perfixHandler("html-css")}
                className={perfix == "html-css" && "bg-[#0ef]"}
                index={2}
              >
                <FaHtml5 style={{ color: "orangered" }} />
                <FaCss3 style={{ color: "#0066ff" }} />
              </LiFilter>

              <LiFilter
                onClick={() => perfixHandler("html-css-js")}
                className={perfix == "html-css-js" && "bg-[#0ef]"}
                index={3}
              >
                <IoLogoJavascript style={{ color: "yellow" }} />
              </LiFilter>

              <LiFilter
                onClick={() => perfixHandler("html-css-js-api")}
                className={perfix == "html-css-js-api" && "bg-[#0ef]"}
                index={4}
              >
                <FaDatabase style={{ color: "orangered" }} />
              </LiFilter>

              <LiFilter
                onClick={() => perfixHandler("react")}
                className={perfix == "react" && "bg-[#0ef]"}
                index={5}
              >
                <FaReact style={{ color: "#2caeff" }} />
              </LiFilter>
            </ul>
          </div>
        </div>

        {projects.length > 0 && (
          <div className="pagination flex justify-center items-center mt-6 gap-3 p-2">
            <MdKeyboardArrowLeft
              onClick={() => handelPrevAndNextButton("prev")}
              className={`text-xl w-11 h-11 p-2 rounded shadow-lg bg-[#0ef] text-white cursor-pointer ${
                page === 1 &&
                "cursor-not-allowed bg-[#ff006f48] pointer-events-none"
              }`}
            />
            {arrayFromTotalPage.map((pageNumber) => {
              return (
                <button
                  key={pageNumber}
                  onClick={() => handelPagination(pageNumber)}
                  className={`text-xl p-2 w-11 rounded shadow-lg duration-300 hover:bg-[#0ef] cursor-pointer ${
                    pageNumber == page ? "bg-white text-black" : "bg-[#243945]"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            <MdKeyboardArrowRight
              onClick={() => handelPrevAndNextButton("next")}
              className={`text-xl w-11 h-11 p-2 rounded shadow-lg bg-[#0ef] text-white cursor-pointer ${
                page === total &&
                "cursor-not-allowed bg-[#ff006f48] pointer-events-none"
              }`}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
