import { Outlet } from "react-router-dom";
import Nav from "../Nav";


const Routs = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Routs;