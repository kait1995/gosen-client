import { useState } from "react";
import { GraphData, ItemInfo } from "../types";
import ItemPresenter from "./ItemPresenter";
import { useDispatch, useSelector } from "react-redux";
import { useCustomAxios } from "../../common/customHooks";
import { updateItem } from "../../common/actions";

const ItemContainer = (props:{itemInfo:ItemInfo}) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const customAxios = useCustomAxios();
    const dispatch = useDispatch();
    const updateInfo = async (title:string) => {
        const data = {...props.itemInfo, title};
        await customAxios.put(`${process.env.REACT_APP_ITEM_API}/${props.itemInfo.settingId}`, data);
        await customAxios.get(`${process.env.REACT_APP_ITEM_API}`).then((res) => {
            dispatch(updateItem(res));
        });
    };

    return(
        <ItemPresenter 
            showDetails={showDetails} 
            setShowDetails={setShowDetails}
            itemInfo={props.itemInfo}
            updateInfo={updateInfo}
        />
    );
}

export default ItemContainer;