const SkilsProgressBar = (props) => {
  return (
    <div className="w-[47%] flex justify-center items-center max-[415px]:w-[45%]">
      <div
      style={{background: `conic-gradient(${props.color} ${props.persent} , #ffff 0deg)`}}
        className="circle flex justify-center items-center w-[140px] h-[140px] rounded-full relative before:content-[''] before:absolute before:w-[90%] before:h-[90%] before:bg-[#142e30] before:rounded-full max-[415px]:w-[110px] max-[415px]:h-[110px]"
      >
        <div className="flex justify-center items-center flex-col relative z-50 font-bold">
            <span className="inline-block text-[30px] max-[415px]:text-[20px]">{props.persentNum}</span>
            <span className="inline-block text-[13px] max-[415px]:text-[11px]">{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SkilsProgressBar;
