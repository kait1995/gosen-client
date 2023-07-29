import "./MainStyle.css";
import AddButton from "../../Atoms/AddButton";
import "./MainStyle.css";
import { GraphData, GraphDataList, ItemInfo, ItemInfos } from "../../types";
import ItemContainer from "../Item/ItemContainer";

const MainContentsPresenter = (props:{
    itemInfos:ItemInfos | [],
    defaultItemInfo:ItemInfo,
    graphDataList:GraphDataList | [],
    addItemInfo:(newInfo:ItemInfo) => void
}) => {

    const ShowItems = (itemInfoProps:{itemInfos:ItemInfos | []}) => {
        return(
            <>
                {itemInfoProps.itemInfos.map((key, val) => {
                    return(<ItemContainer/>);
                })};
            </>
        );
    };

    return(
        <>
            <div className="item">
                <ShowItems itemInfos={props.itemInfos}/>
            </div>
            <div className="addButton" onClick={()=>{props.addItemInfo(props.defaultItemInfo)}}>
                <AddButton/>
            </div>
        </>
    );
}

export default MainContentsPresenter;