import Header from "../../Organisms/Header/Header";
import MainContainer from "../../Organisms/Main/MainContainer";
import "./CommonStyle.css";

const CommonTemplate = () => {
    return(
        <div className="common">
            <Header/>
            <MainContainer/>
        </div>
    );
}

export default CommonTemplate;