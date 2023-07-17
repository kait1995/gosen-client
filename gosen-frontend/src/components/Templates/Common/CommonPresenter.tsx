import { Outlet } from "react-router-dom";
import HeaderContainer from "../../Organisms/Header/HeaderContainer";
import "./CommonStyle.css";

const CommonPresenter = () => {
    return(
        <div className="common">
            <div className="header">
                <HeaderContainer/>
            </div>
            <div className="main">
                <Outlet/>
            </div>
        </div>
    );
}

export default CommonPresenter;