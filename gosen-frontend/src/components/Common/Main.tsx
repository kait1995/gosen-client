import MainContentsContainer from "../MainContents/MainContentsContainer";
import "./Main.css";

const Main = () => {
    return(
        <div className="main">
            <div className="list">
                <MainContentsContainer/>
            </div>
        </div>
    );
}

export default Main;