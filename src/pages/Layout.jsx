import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="left"></div>
        <div className="right"></div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
