const ServicesCard = (props) => {
  return (
    <div className="col w-[300px] h-[390px] flex-grow bg-[#243945] flex justify-evenly items-center flex-col gap-[10px] p-[15px] rounded-[15px] text-center duration-[.4s] cursor-pointer border-[2px] border-solid border-[transparent] hover:border-[#0ef]">
      {props.icon}
      <h2 className="text-[32px] font-extrabold pt-[10px] capitalize leading-[2] max-sm:text-[27px]">
        {props.title}
      </h2>
      <p className="text-[16px] capitalize leading-[2]">
        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Doloremque,
        Beatae?
      </p>
      <a
        className="inline-block w-2/4 bg-[#0ef] text-[18px] font-bold capitalize rounded-[20px] cursor-pointer p-[15px] text-black duration-300 shadow-[0 0 10px] shadow-shadowButton hover:bg-[#001a25] hover:text-white "
        href="#portfolio"
      >
        my project
      </a>
    </div>
  );
};
export default ServicesCard;
