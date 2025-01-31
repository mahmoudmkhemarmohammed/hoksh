import LazyImg from "@components/common/LazyImg/LazyImg";
import ErrorFetch from "@components/feedback/Error/ErrorFetch";
import LoaderDetails from "@components/feedback/Loader/LoaderDetails";
import useProjectDetails from "@hooks/useProjectDetails";

import { motion } from "motion/react";

const ProjectDetails = () => {
  const { project, loading, error } = useProjectDetails();
  const { img, title, language, description, link } =
    project != null ? project : {};

  if (loading === "pending") {
    return <LoaderDetails />;
  }
  if (loading === "rejected") {
    return <ErrorFetch error={error as string} />;
  }

  return (
    <section className="details">
      <div className="container">
        <div className="details grid grid-cols-2 gap-5 py-5 max-lg:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4 }}
            className="img sticky top-16 h-[370px] rounded-xl overflow-hidden max-lg:static"
          >
            <LazyImg
              className="w-full h-full"
              src={`${import.meta.env.VITE_BASE_URL}${img}`}
              alt={title as string}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text"
          >
            <h2 className="text-[40px] font-extrabold capitalize text-[#0ef] max-sm:text-3xl">
              {title}
            </h2>
            <h3 className="mt-[10px] text-4xl font-bold capitalize max-sm:text-2xl">
              Techns used : <span className="text-[#59ff00]">{language}</span>
            </h3>
            <p className=" capitalize leading-[2] text-[#ff710c] text-[22px] mt-3 max-sm:text-[18px]">
              Description :{" "}
              <span className="text-[19px] text-white max-sm:text-[16px]">
                {description}
              </span>
            </p>
            <a
              className="text-2xl font-bold capitalize text-center w-full inline-block bg-[#0ef] text-black p-3 mt-3 rounded-md"
              href={link as string}
            >
              Open
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.4 , delay: .4}}
          className="description p-4 rounded-xl bg-[#243945] mt-10"
        >
          <p className=" capitalize leading-[2] text-[#ff710c] text-[22px] mt-3 max-sm:text-[18px]">
            Description :{" "}
            <span className="text-[19px] text-white max-sm:text-[16px]">
              {description}
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default ProjectDetails;
