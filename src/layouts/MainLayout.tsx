import BtnResetScroll from "@components/common/BtnResetScroll/BtnResetScroll";
import Footer from "@components/common/Footer/Footer";
import Header from "@components/common/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />

      <div className="min-h-heightLayout">
        <Outlet />
      </div>
      
      <BtnResetScroll />

      <Footer />
    </>
  );
};

export default MainLayout;
