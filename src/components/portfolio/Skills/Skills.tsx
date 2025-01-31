import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import LazyImg from "@components/common/LazyImg/LazyImg";
import profile from "@assets/images/6.jpg";
import PersonalSkills from "./PersonalSkills";
import TechnicalSkills from "./TechnicalSkills";
import useSkills from "@hooks/useSkills";
const Skills = () => {
  const { activeClass, myRef, skills } = useSkills();
  return (
    <section id="skills" className="skills" ref={myRef}>
      <div className="container">
        <SpecialHeading title="skills" />
        <div className="img w-full h-[400px] flex justify-center items-center p-2 overflow-hidden">
          <div
            className="img-box w-[270px] h-[270px] rounded-full relative max-[470px]:w-[250px] max-[470px]:h-[250px]"
          >
            <div className="img-content rounded-full w-full h-full overflow-hidden">
              <LazyImg src={profile} className="w-full" alt="profile" />
            </div>
          </div>
        </div>
        <div className="skills-content grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <TechnicalSkills {...skills} />

          <PersonalSkills activeClass={activeClass} />
        </div>
      </div>
    </section>
  );
};
export default Skills;
