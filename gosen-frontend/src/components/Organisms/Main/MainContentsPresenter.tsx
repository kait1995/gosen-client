import "./MainStyle.css";
import AddButton from "../../Atoms/AddButton";
import "./MainStyle.css";
import { GraphDataList, ItemInfo, ItemInfos } from "../../types";
import ItemContainer from "../Item/ItemContainer";

const MainContentsPresenter = (props:{
    itemInfos:ItemInfos | [],
    defaultItemInfo:ItemInfo,
    graphDataList:GraphDataList | [],
    addItemInfo:(newInfo:ItemInfo) => void,
    delItemInfo:(id:String) => void
}) => {

    const ShowItems = () => {
        return(
            <>
                {props.itemInfos.map((itemInfo, key) => {
                    return(
                        <div className="item">
                            <ItemContainer itemInfo={itemInfo} delItemInfo={props.delItemInfo}/>
                        </div>
                    );
                })}
            </>
        );
    };

    return(
        <>
            <ShowItems/>
            <div className="addButton" onClick={()=>{props.addItemInfo(props.defaultItemInfo);}}>
                <AddButton/>
            </div>
        </>
    );
}

export default MainContentsPresenter;