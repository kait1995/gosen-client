import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCustomAxios } from "../../common/customHooks";
import { GraphData, ItemInfo } from "../types";
import MainContentsPresenter from "./MainContentsPresenter";
import "./MainStyle.css";
import { updateItem } from "../../common/actions";

const MainContentsContainer = () => {
    const itemInfos = useSelector((state: {itemInfos: ItemInfo[], graphData: GraphData[]}) => state.itemInfos);
    const customAxios = useCustomAxios();
    const dispatch = useDispatch();
    const addInfo = async (data:any) => {
        await customAxios.post(`${process.env.REACT_APP_ITEM_API}`, data);
        await customAxios.get(`${process.env.REACT_APP_ITEM_API}`).then((res) => {
            dispatch(updateItem(res));
        });
    };
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