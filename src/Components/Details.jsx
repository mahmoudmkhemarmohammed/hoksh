import { useEffect } from "react";
import data from "../assets/db.json";
import { useParams } from "react-router-dom";
import { sr } from "..";
const Details = () => {
  const params = useParams("projectId");
  const project = Array.from(data).find(project => project.id === +params.projectId);
  useEffect(() => {
    sr.reveal(".details .container .details .img , .details .container .details .text" , {origin: "bottom" , interval: 400})
    sr.reveal(".details .container .description" , {origin: "bottom"})
  },[])
  return (
    <section className="details">
        <div key={project.id} className="container min-h-heightDetails">
          <div className="details grid grid-cols-2 gap-5 py-5 max-lg:grid-cols-1">
            <div className="img sticky top-16 h-[370px] rounded-xl overflow-hidden max-lg:static">
              <img
              className="w-full h-full"
                loading="lazy"
                src={require(`../assets/${project.img}`)}
                alt={project.title}
              />
            </div>
            <div className="text">
              <h2 className="text-[40px] font-extrabold capitalize text-[#0ef] max-sm:text-3xl">{project.title}</h2>
              <h3 className="mt-[10px] text-4xl font-bold capitalize max-sm:text-2xl">
              Techns used : <span className="text-[#59ff00]">{project.language}</span>
              </h3>
              <p className=" capitalize leading-[2] text-[#ff710c] text-[22px] mt-3 max-sm:text-[18px]">
                Description : <span className="text-[19px] text-white max-sm:text-[16px]">{project.description}</span>
              </p>
              <a className="text-2xl font-bold capitalize text-center w-full inline-block bg-[#0ef] text-black p-3 mt-3 rounded-md" href={project.link}>Open</a>
            </div>
          </div>
          <div className="description p-4 rounded-xl bg-[#243945] mt-10">
          <p className=" capitalize leading-[2] text-[#ff710c] text-[22px] mt-3 max-sm:text-[18px]">
            Description : <span className="text-[19px] text-white max-sm:text-[16px]">{project.description}</span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Details;