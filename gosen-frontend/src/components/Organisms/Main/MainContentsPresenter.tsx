import "./MainStyle.css";
import AddButton from "../../Atoms/AddButton";
import ItemContainer from "../Item/ItemContainer";
import "./MainStyle.css";

const MainContentsPresenter = () => {
    const Test = () => {
        return(
            <ItemContainer/>
        );
    };

    return(
        <>
            <div className="item">
                <Test/>
            </div>
            <div className="addButton">
                <AddButton/>
            </div>
        </>
    );
}

export default MainContentsPresenter;