import SpecialHeading from "@components/common/SpecialHeading/SpecialHeading";
import { motion } from "motion/react";
const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <SpecialHeading title="Contact" />
        <div className="content">
          <div className="con flex justify-between items-center flex-wrap gap-[10px] *:flex-grow *:w-[49%] *:border-none *:outline-none *:text-white *:p-[18px] *:text-2xl *:rounded-[5px] *:bg-[#243945] [&>*:nth-child(5)]:w-full [&>*:nth-child(5)]:h-[400px] [&>*:nth-child(5)]:font-bold [&>*:nth-child(5)]:resize-none [&>*:nth-child(6)]:bg-[#0ef] [&>*:nth-child(6)]:shadow-shadowButton [&>*:nth-child(6)]:mt-[10px] [&>*:nth-child(6)]:cursor-pointer [&>*:nth-child(6)]:text-black [&>*:nth-child(6)]:font-bold">
            <motion.input
              transition={{
                duration: 0.4,
                delay: 0.1,
              }}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              type="text"
              placeholder="Frist Name"
              id="fname"
              name="F_Name"
            />
            <motion.input
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              type="text"
              placeholder="Last Name"
              id="lname"
              name="L_Name"
            />
            <motion.input
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              type="gmail"
              placeholder="Enter Your Gemail"
              id="gmail"
              name="E_Mail"
            />
            <motion.input
              transition={{
                duration: 0.4,
                delay: 0.3,
              }}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              type="phone"
              placeholder="Enter Your Phone Number"
              id="phone"
              name="phone"
            />
            <motion.textarea
              transition={{
                duration: 0.4,
                delay: 0.4,
              }}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              id="tarea"
              className="w-full"
            />
            <motion.input
              transition={{
                duration: 0.4,
                delay: 0.5,
              }}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              type="submit"
              value="Send"
              id="submit"
              className="shadow-shadowButton"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
