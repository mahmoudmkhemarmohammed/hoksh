import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Skils from "./Components/Skils";
import Details from "./Components/Details";
import BtnScroll from "./Components/BtnScroll";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/details/:projectId" element={<Details />} />
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Portfolio />
              <Skils />
              <About />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
      <BtnScroll />
    </>
  );
};

export default App;
