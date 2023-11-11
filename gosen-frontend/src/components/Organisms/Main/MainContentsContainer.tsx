import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCustomAxios } from "../../../common/customHooks";
import { GraphData, ItemInfo } from "../../types";
import MainContentsPresenter from "./MainContentsPresenter";
import "./MainStyle.css";

const MainContentsContainer = () => {
    const state = useSelector(
        (state: {defaultItemInfo: ItemInfo, itemInfos: ItemInfo[], graphDataList: GraphData[]}) => state
    );
    const customAxios = useCustomAxios();
    const dispatch = useDispatch();
    const addInfo = async (data:any) => {
        await customAxios.post(`${process.env.REACT_APP_SYSTEM_ADD_API}`, data);
        await customAxios.get(`${process.env.REACT_APP_SYSTEM_GET_API}`).then((res) => {
            dispatch({type:"UPDATE_ITEM", data: res.data});
        });
    };

    return (
        <div className="mainContentsPresenter">
            <MainContentsPresenter 
                state={state}
                addInfo={addInfo}
            />
        </div>
    );
}

export default MainContentsContainer;