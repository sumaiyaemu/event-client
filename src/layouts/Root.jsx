import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";


const Root = () => {
    return (
       <div>
         <div className="max-w-5xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Root;