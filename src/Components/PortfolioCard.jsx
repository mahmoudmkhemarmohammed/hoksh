import { Link } from "react-router-dom";
const PortfolioCard = (props) => {
  return (
    <div className={`card active ${props.filter} bg-[#243945] rounded-[15px] h-fit overflow-hidden duration-[.4s] border-[2px] border-solid border-transparent hover:border-[#0ef]`}>
      <div className="img h-[300px] p-[10px]">
        <img loading="lazy" className="h-full w-full" src={props.img} alt={props.title} />
      </div>
      <div className="text py-5 text-center">
        <h3 className="text-[25px] font-extrabold capitalize mb-[10px]">{props.title}</h3>
        <div className="btns flex justify-around items-center p-[10px] gap-[15px]">
          <a className="inline-block text-xl font-bold capitalize border-none outline-none text-black bg-[#0ef] p-[10px] rounded-[5px] w-[100px] hover:bg-white hover:text-black" href={props.link}>Open</a>
          <Link to={`/details/${props.details}`} className="inline-block text-xl font-bold capitalize border-none outline-none text-black bg-white p-[10px] rounded-[5px] w-[100px] hover:bg-[#0ef]">Detalis</Link>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;