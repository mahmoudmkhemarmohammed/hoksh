const SkilsLanguageBar = (props) => {
  return (
    <div className="mb-[44px] last:mb-0 capitalize font-medium flex justify-between items-center h-[35px] max-[449px]:h-[25px]">
    {props.icon}
    <span className="bar w-[88%] h-full bg-[#162229] rounded-[10px] flex items-center">
      <span className={`inline-block h-full w-0 rounded-[10px] ${props.bg} duration-500 relative`}
        data-width={props.skils}
        style={{ width: `${props.skils}%` }}
      ></span>
    </span>
  </div>
  )
}
export default SkilsLanguageBar;



