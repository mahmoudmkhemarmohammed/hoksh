import { useEffect } from "react";
import { sr } from "..";

const SpecialHeading = (props) => {
  useEffect(() => {
    sr.reveal(".special-headinges h2" , {delay: 1000})
  } , [])
  return (
    <div className="special-headinges">
      <h2 className="text-[#00d9ff] text-[60px] font-[900] capitalize py-[30px] max-[539px]:text-[45px] max-sm:text-center">{props.title}</h2>
    </div>
  );
};
export default SpecialHeading;