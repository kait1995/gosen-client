import { useState } from "react";
import ItemDetailPresenter from "./ItemDetailPresenter";
import { GraphData, ItemInfo } from "../../types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useCustomAxios } from "../../../common/customHooks";

const ItemDetailContainer = (props:{
    itemInfo:ItemInfo,
    showDetails:boolean
}) => {
    const customAxios = useCustomAxios();
    const dispatch = useDispatch();
    const delInfo = async (id = props.itemInfo.settingId) => {
        await customAxios.post(`${process.env.REACT_APP_SYSTEM_DEL_API}/${id}`);
        await customAxios.get(`${process.env.REACT_APP_SYSTEM_GET_API}`).then((res) => {
            dispatch({type:"UPDATE_ITEM", data: res.data});
        });
    };

    return(
        <>
            {props.showDetails && (
                <ItemDetailPresenter 
                    itemInfo={props.itemInfo}
                    delInfo={delInfo}
                />
            )}
        </>
    );
}

export default ItemDetailContainer;