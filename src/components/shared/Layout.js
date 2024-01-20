
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Principal from "./Principal";

function Layout() {
    return (
        <>
            <Header></Header>
            <Principal>
                <Outlet></Outlet>
            </Principal>
            <Footer></Footer>
        </>
    );
}

export default Layout;