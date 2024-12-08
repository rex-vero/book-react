import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className='mt-5'>
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;