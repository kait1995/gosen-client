import ItemDetailPresenter from "./ItemDetailPresenter";
import { DeviceList, GraphDataList, ItemInfo } from "../types";
import { useSelector } from "react-redux";
import { useGraphData, useUpdateItem } from "../../common/customHooks";

const ItemDetailContainer = (props:{itemInfo:ItemInfo, showDetails:boolean}) => {
    const preloadedData = useSelector((state: {deviceList: DeviceList, graphData: GraphDataList}) => state);
    const delInfo = useUpdateItem().delInfo;
    const getGraphData = useGraphData().getGraphData;
    const updateInfo = useUpdateItem().updateInfo;

    return(
        <>
            {props.showDetails && (
                <ItemDetailPresenter 
                    itemInfo={props.itemInfo}
                    preloadedData={preloadedData}
                    delInfo={delInfo}
                    getGraphData={getGraphData}
                    updateInfo={updateInfo}
                />
            )}
        </>
    );
}

export default ItemDetailContainer;