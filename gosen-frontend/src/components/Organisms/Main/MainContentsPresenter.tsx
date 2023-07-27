import "./MainStyle.css";
import AddButton from "../../Atoms/AddButton";
import ItemContainer from "../Item/ItemContainer";
import "./MainStyle.css";

const MainContentsPresenter = (props:{initData: {}, setInitData: React.Dispatch<React.SetStateAction<{}>>}) => {
    const Item = () => {
        return(
            <ItemContainer/>
        );
    };

    return(
        <>
            <div className="item">
                <Item/>
            </div>
            <div className="addButton">
                <AddButton/>
            </div>
        </>
    );
}

export default MainContentsPresenter;