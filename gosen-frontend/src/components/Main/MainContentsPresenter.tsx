import "./MainStyle.css";
import AddButton from "../CommonParts/AddButton";
import "./MainStyle.css";
import { ItemInfo } from "../types";
import ItemContainer from "../Item/ItemContainer";
import { defaultItemInfo } from "../../common/defaultItemInfo";

const MainContentsPresenter = (props: {
    itemInfos: ItemInfo[], 
    addInfo:(data: any) => void
}) => {

    const ShowItems = () => {
        return(
            <>
                {props.itemInfos.map((itemInfo, key) => {
                    return(
                        <div className="item">
                            <ItemContainer itemInfo={itemInfo}/>
                        </div>
                    );
                })}
            </>
        );
    };

    return(
        <>
            <ShowItems/>
            <div 
                className="addButton" 
                onClick={() => props.addInfo(defaultItemInfo)}
            >
                <AddButton/>
            </div>
        </>
    );
}

export default MainContentsPresenter;