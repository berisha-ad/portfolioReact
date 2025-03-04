import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className="left"></div>
                <div className="right"></div>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;