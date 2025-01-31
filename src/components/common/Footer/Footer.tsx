import {
    FaFacebook,
    FaLinkedin,
    FaWhatsapp,
    FaGithub,
    FaHeart,
  } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer bg-[#243945] py-8 mt-8">
    <div className="container grid grid-cols-2 gap-3 h-full max-lg:grid-cols-1 max-lg:text-center">
      <h2 className="w-full text-2xl font-bold capitalize max-[499px]:text-[19px]">
        Made With <FaHeart className="text-red-500 inline-block"/> By <span className="text-[#0ef]">Mahmoud Mkehmar</span>
      </h2>
      <ul className="w-full flex items-center gap-5 justify-end max-lg:justify-center">
        <li>
          <a href="https://api.whatsapp.com/send/?phone=201151920359&text&type=phone_number&app_absent=0">
            <FaWhatsapp className="text-4xl text-[#33961d] duration-300 hover:scale-[1.2]"/>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100021987258084&mibexitd=ZbWKwL">
            <FaFacebook className="text-4xl text-[#05f] duration-300 hover:scale-[1.2]"/>
          </a>
        </li>
        <li>
          <a href="/">
            <FaLinkedin className="text-4xl text-[#4781ff] duration-300 hover:scale-[1.2]"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/mahmoudmkhemarmohammed">
            <FaGithub className="text-4xl text-[#1b1e22] duration-300 hover:scale-[1.2]"/>
          </a>
        </li>
      </ul>
    </div>
  </footer>
  )
}
export default Footer