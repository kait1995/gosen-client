import { BoltIcon } from "@heroicons/react/24/solid";
import "./MainContents.css";

const MainContentsPresenter = () => {
    return(
        <div className="mainContents">
            <div className="slideSwitch">test1</div>
            <div className="title">test2</div>
            <div className="status1">test3</div>
            <BoltIcon className="status2"/>
        </div>
    );
}

export default MainContentsPresenter;