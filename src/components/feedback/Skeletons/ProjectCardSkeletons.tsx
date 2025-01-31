import { FiLoader } from "react-icons/fi";

const ProjectCardSkeletons = () => {
  const itemRenderd = Array(6)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="relative min-h-[459.5px] bg-[#07182E] flex justify-center items-center overflow-hidden rounded-2xl"
      >
        {/* Background Animation */}
        <div className="absolute w-24 h-[130%] bg-gradient-to-b from-[#00b7ff] to-[#ff30ff] animate-rotBGimg"></div>

        {/* Card Content */}
        <h2 className="z-10 text-white text-2xl"><FiLoader className="animate-spin text-5xl"/></h2>

        {/* Inner Background */}
        <div className="absolute inset-1 bg-[#243945] rounded-xl"></div>
      </div>
    ));
  return <>{itemRenderd}</>;
};

export default ProjectCardSkeletons;
