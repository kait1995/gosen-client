import HeaderContainer from "../../Organisms/Header/HeaderContainer";
import MainContentsContainer from "../../Organisms/Main/MainContentsContainer";
import "./CommonStyle.css";

const CommonPresenter = () => {
    return(
        <div className="common">
            <div className="header">
                <HeaderContainer/>
            </div>
            <div className="main">
                <MainContentsContainer/>
            </div>
        </div>
    );
}

export default CommonPresenter;