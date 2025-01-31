import LazyImg from "../LazyImg/LazyImg";
import Logo from "@assets/images/logo.jpg";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="bg-[#0a2335] h-[70px] py-[15px] px-[10px] sticky top-0 z-[100000000000]">
      <div className="container flex justify-between items-center h-full relative">
        <div className="logo w-[40px] h-[40px] overflow-hidden">
          <LazyImg src={Logo} alt="logo" />
        </div>
          <Nav />
      </div>
    </header>
  );
};
export default Header;
