import axios from "axios";
import { useEffect, useState } from "react";
import { GraphData, ItemInfo } from "../../types";
import MainContentsPresenter from "./MainContentsPresenter";
import "./MainStyle.css";

const MainContentsContainer = () => {
    const [itemInfos, setItemInfos] = useState<Array<ItemInfo>>([]);
    const [graphDataList, setGraphDataList] = useState<Array<GraphData>>([]);

    const getItems = () => {
        axios.get(
            `${process.env.REACT_APP_SYSTEM_GET_API}`
        ).then((res) => {
            setItemInfos([...res.data]);
        }).catch((res) => {
            console.log(res.response);
        });
    }
    
    const addItemInfo = (newInfo:ItemInfo) => {
        axios.post(
            `${process.env.REACT_APP_SYSTEM_ADD_API}`,
            newInfo,
        ).then((res) => {
            getItems();
        }).catch((res) => {
            console.log(res.response);
        });
    };

    const delItemInfo = (id:String) => {
        axios.post(
            `${process.env.REACT_APP_SYSTEM_DEL_API}/${id}`
        ).then((res) => {
            getItems();
        }).catch((res) => {
            console.log(res.response);
        });
    }

    const [defaultItemInfo, setDefaultItemInfo] = useState({
        settingId: "",
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
                delItemInfo={delItemInfo}
            />
        </div>
    );
}

export default MainContentsContainer;