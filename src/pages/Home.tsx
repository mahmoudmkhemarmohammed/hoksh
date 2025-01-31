import Hero from "@components/portfolio/Hero/Hero";
import Services from "@components/portfolio/Services/Services";
import Portfolio from "@components/portfolio/Portfo/Portfolio";
import Skils from "@components/portfolio/Skills/Skills";
import About from "@components/portfolio/About/about";
import Contact from "@components/portfolio/Contact/Contact";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Skils />
      <About />
      <Contact />
    </>
  );
};

export default Home;
