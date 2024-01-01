import HeaderContainer from "../Header/HeaderContainer";
import MainContentsContainer from "../Main/MainContentsContainer";
import "./PageStyle.css";

const PagePresenter = () => {
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

export default PagePresenter;