import { useEffect } from "react";
import { FaHtml5, FaCss3, FaDatabase, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import SpecialHeading from "./SpecialHeading";
import PortfolioCard from "./PortfolioCard";
import data from "../assets/db.json";
import { sr } from "..";
const Portfolio = () => {
  const project = Array.from(data).reverse();
  const handlerFilter = () => {
    document
      .querySelectorAll(".portfolio .container .filter ul li")
      .forEach((li) => {
        li.addEventListener("click", function () {
          document
            .querySelectorAll(".portfolio .container .filter ul li")
            .forEach((e) => {
              e.classList.remove("active");
            });
          this.classList.add("active");
          document
            .querySelectorAll(".portfolio .content .card")
            .forEach((dis) => dis.classList.remove("active"));
          document
            .querySelectorAll(this.dataset.filter)
            .forEach((act) => act.classList.add("active"));
        });
      });
  };
  useEffect(() => {
    handlerFilter();
    sr.reveal(".portfolio .container .content .projects-box" , {origin: "bottom"})
    sr.reveal(".portfolio .container .content .filter ul li" , {origin: "right" , interval: 300})
  }, []);
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <SpecialHeading title="Projects" />
        <div className="content flex justify-between min-h-screen gap-5 max-sm:flex-col-reverse">
          <div className="projects-box w-9/12 grid grid-cols-projectCard gap-5 max-sm:w-full">
            {project.map((card) => (
              <PortfolioCard
                key={card.id}
                title={card.title}
                img={require(`../assets/${card.img}`)}
                details={card.id}
                link={card.link}
                filter={card.language}
              />
            ))}
          </div>
          <div className="filter overflow-x-hidden w-1/5 h-[500px] sticky top-[70px] bg-[#243945] rounded-xl px-[25px] max-sm:h-[120px] max-sm:w-full max-sm:px-2">
            <ul className="h-full flex justify-center items-center flex-col *:flex *:justify-center *:items-center *:gap-3 *:flex-wrap *:cursor-pointer *:p-[15px] *:w-full gap-5 *:text-[32px] *:min-h-[70px] *:bg-[#1c2c36] *:rounded-[10px] group max-sm:flex-row max-sm:*:text-[25px] max-sm:*:h-[92px] max-sm:gap-1">
              <li
                data-filter={".portfolio .container .card"}
                className="active duration-300 hover:bg-[#0ef]"
              >
                All
              </li>
              <li
                data-filter={".portfolio .container .html-css"}
                className=" duration-300 hover:bg-[#0ef]"
              >
                <FaHtml5 style={{ color: "orangered" }} />
                <FaCss3 style={{ color: "#0066ff" }} />
              </li>
              <li
                data-filter={".portfolio .container .html-css-js"}
                className=" duration-300 hover:bg-[#0ef]"
              >
                <IoLogoJavascript style={{ color: "yellow" }} />
              </li>
              <li
                data-filter={".portfolio .container .html-css-js-api"}
                className=" duration-300 hover:bg-[#0ef]"
              >
                <FaDatabase style={{ color: "orangered" }} />
              </li>
              <li
                data-filter={".portfolio .container .react"}
                className=" duration-300 hover:bg-[#0ef]"
              >
                <FaReact style={{ color: "#2caeff" }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
