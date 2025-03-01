const SkillsLanguageBar = ({
  icon,
  skills,
  bg,
}: {
  icon: JSX.Element;
  skills: number;
  bg: string;
}) => {
  return (
    <div className="mb-[44px] last:mb-0 capitalize font-medium flex justify-between items-center h-[35px] max-[449px]:h-[25px]">
      {icon}
      <span className="bar w-[88%] h-full bg-[#162229] rounded-[10px] flex items-center">
        <span
          className={`inline-block h-full w-0 rounded-[10px] ${bg} duration-500 relative`}
          data-width={`${skills}%`}
          style={{ width: `${skills}%` }}
        ></span>
      </span>
    </div>
  );
};

export default SkillsLanguageBar;
