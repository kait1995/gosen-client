import { useState } from "react";
import ItemDetailPresenter from "./ItemDetailPresenter";
import { GraphData, ItemInfo } from "../../types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useCustomAxios } from "../../../common/customHooks";
import { updateItem } from "../../../common/actions";

const ItemDetailContainer = (props:{itemInfo:ItemInfo, showDetails:boolean}) => {
    const customAxios = useCustomAxios();
    const graphData = useSelector((state: {itemInfo: ItemInfo[], graphData: GraphData[]}) => state.graphData);
    const dispatch = useDispatch();
    const delInfo = async (id = props.itemInfo.settingId) => {
        await customAxios.delete(`${process.env.REACT_APP_ITEM_API}/${id}`);
        await customAxios.get(`${process.env.REACT_APP_ITEM_API}`).then((res) => {
            dispatch(updateItem(res));
        });
    };

    return(
        <>
            {props.showDetails && (
                <ItemDetailPresenter 
                    itemInfo={props.itemInfo}
                    graphData={graphData}
                    delInfo={delInfo}
                />
            )}
        </>
    );
}

export default ItemDetailContainer;