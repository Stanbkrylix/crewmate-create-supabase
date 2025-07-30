import { Outlet } from "react-router-dom";

function Layout({ menu }) {
    return (
        <div className="main-container">
            <div className="menu-container">{menu}</div>
            <div className="page-container">
                <Outlet />
            </div>
        </div>
    );
}
export default Layout;
