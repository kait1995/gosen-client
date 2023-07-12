import Header from "../../Organisms/Header/Header";
import MainContainer from "../../Organisms/Main/MainContainer";
import "./CommonStyle.css";

const CommonTemplate = () => {
    return(
        <div className="common">
            <div className="test">
                <Header/>
            </div>
            <div className="test2">
                <MainContainer/>
            </div>
        </div>
    );
}

export default CommonTemplate;