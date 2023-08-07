import axios from "axios";
import { useEffect, useState } from "react";
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
        deviceNumber:12345,
        isActivated:false,
        useCamera:true,
        useTimer:true,
        timerStart:"Timer start",
        timerEnd:"Timer end",
        manualWatering:true,
        status0:true,
        status1:true,
        status2:true,
        status3:true,
        status4:true,
        status5:true,
        status6:true,
        status7:true,
        status8:true,
        status9:true,
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