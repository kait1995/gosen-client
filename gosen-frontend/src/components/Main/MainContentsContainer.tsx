import { useSelector } from "react-redux";
import { useUpdateItem } from "../../common/customHooks";
import { GraphData, ItemInfo } from "../types";
import MainContentsPresenter from "./MainContentsPresenter";
import "./MainStyle.css";

const MainContentsContainer = () => {
    const itemInfos = useSelector((state: {itemInfos: ItemInfo[], graphData: GraphData[]}) => state.itemInfos);
    const addInfo = useUpdateItem().addInfo;
    return (
        <div className="mainContentsPresenter">
            <MainContentsPresenter 
                itemInfos={itemInfos}
                addInfo={addInfo}
            />
        </div>
    );
}

export default MainContentsContainer;