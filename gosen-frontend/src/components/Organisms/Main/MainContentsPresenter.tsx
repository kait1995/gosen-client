import "./MainStyle.css";
import AddButton from "../../Atoms/AddButton";
import "./MainStyle.css";
import { GraphData, GraphDataList, ItemInfo, ItemInfos } from "../../types";
import ItemContainer from "../Item/ItemContainer";
import axios from "axios";
import { useEffect } from "react";

const MainContentsPresenter = (props:{
    itemInfos:ItemInfos | [],
    defaultItemInfo:ItemInfo,
    graphDataList:GraphDataList | [],
    addItemInfo:(newInfo:ItemInfo) => void
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
            <div className="addButton" onClick={()=>{props.addItemInfo(props.defaultItemInfo);}}>
                <AddButton/>
            </div>
        </>
    );
}

export default MainContentsPresenter;