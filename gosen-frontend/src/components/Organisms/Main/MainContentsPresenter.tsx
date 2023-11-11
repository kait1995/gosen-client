import "./MainStyle.css";
import AddButton from "../../Atoms/AddButton";
import "./MainStyle.css";
import { GraphData, GraphDataList, ItemInfo, ItemInfos } from "../../types";
import ItemContainer from "../Item/ItemContainer";
import { AxiosInstance } from "axios";

const MainContentsPresenter = (props:{
    state: {
        defaultItemInfo: ItemInfo;
        itemInfos: ItemInfo[];
        graphDataList: GraphData[];
    }, 
    addInfo:(data: any) => void
}) => {

    const ShowItems = () => {
        return(
            <>
                {props.state.itemInfos.map((itemInfo, key) => {
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
                onClick={() => props.addInfo(props.state.defaultItemInfo)}
            >
                <AddButton/>
            </div>
        </>
    );
}

export default MainContentsPresenter;