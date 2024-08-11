import { useEffect } from "react";
import SpecialHeading from "./SpecialHeading";
import { sr } from "..";

const Contact = () => {
  useEffect(() => {
    sr.reveal(".contact .container .content .con input , .contact .container .content .con textarea" , {origin: "bottom" , interval: 400})
  } , [])
  return (
    <section className="contact">
      <div className="container">
        <SpecialHeading title="Contact" />
        <div className="content">
          <div className="con flex justify-between items-center flex-wrap gap-[10px] *:flex-grow *:w-[49%] *:border-none *:outline-none *:text-white *:p-[18px] *:text-2xl *:rounded-[5px] *:bg-[#243945] [&>*:nth-child(5)]:w-full [&>*:nth-child(5)]:h-[400px] [&>*:nth-child(5)]:font-bold [&>*:nth-child(5)]:resize-none [&>*:nth-child(6)]:bg-[#0ef] [&>*:nth-child(6)]:shadow-shadowButton [&>*:nth-child(6)]:mt-[10px] [&>*:nth-child(6)]:cursor-pointer [&>*:nth-child(6)]:text-black [&>*:nth-child(6)]:font-bold">
            <input type="text" placeholder="Frist Name" id="fname" name="F_Name"/>
            <input type="text" placeholder="Last Name" id="lname" name="L_Name"/>
            <input type="gmail" placeholder="Enter Your Gemail" id="gmail" name="E_Mail"/>
            <input
              type="phone"
              placeholder="Enter Your Phone Number"
              id="phone"
              name="phone"
            />
            <textarea id="tarea" className="w-full"/>
            <input type="submit" value="Send" id="submit" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;