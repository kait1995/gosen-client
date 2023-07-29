import { useState } from "react";
import { GraphData, ItemInfo } from "../../types";
import MainContentsPresenter from "./MainContentsPresenter";
import "./MainStyle.css";

const MainContentsContainer = () => {
    const [itemInfos, setItemInfos] = useState<Array<ItemInfo>>([]);
    const [graphDataList, setGraphDataList] = useState<Array<GraphData>>([]);
    const addItemInfo = (newInfo:ItemInfo) => {
        setItemInfos([...itemInfos, newInfo]);
    };
    const [defaultItemInfo, setDefaultItemInfo] = useState({
        title:"Title",
        deviceNumber:"Device number",
        is_activated:"true",
        use_camera:"true",
        use_timer:"true",
        timer_start:"Timer start",
        timer_end:"Timer end",
        manual_watering:"true",
        status_0:"Status 0",
        status_1:"Status 1",
        status_2:"Status 2",
        status_3:"Status 3",
        status_4:"Status 4",
        status_5:"Status 5",
        status_6:"Status 6",
        status_7:"Status 7",
        status_8:"Status 8",
        status_9:"Status 9",
    });

    return (
        <div className="mainContentsPresenter">
            <MainContentsPresenter 
                itemInfos={itemInfos}
                defaultItemInfo={defaultItemInfo}
                graphDataList={graphDataList}
                addItemInfo={addItemInfo}
            />
        </div>
    );
}

export default MainContentsContainer;