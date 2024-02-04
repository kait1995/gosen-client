import DeleteButton from "../CommonParts/DeleteButton";
import Graph from "../CommonParts/Graph";
import GraphTitle from "../CommonParts/GraphTitle";
import DeviceInfo from "./ItemDetailParts/DeviceInfo";
import { DeviceList, GraphDataList, ItemInfo } from "../types";
import "./ItemDetailStyle.css";

const ItemDetailPresenter = (props:{
    itemInfo:ItemInfo,
    preloadedData:{deviceList: DeviceList, graphData: GraphDataList},
    delInfo:(deleteTargetId:string) => void,
    getGraphData:(id:number) => void,
    updateInfo:(newItem: ItemInfo) => void
}) => {
    const setOptions = () => {
        return(
            props.preloadedData.deviceList.deviceNumberList.map((deviceNumber, key) => {
                return(
                    <option key={deviceNumber}>
                        {deviceNumber}
                    </option>
                );
            })
        );
    };
    return(
        <div className="detail">
            <div>
                <GraphTitle/>
            </div>
            <div className="graph">
                <Graph graphData={props.preloadedData.graphData}/>
            </div>
            <div>
                <DeviceInfo 
                    setOptions={setOptions} 
                    itemInfo={props.itemInfo}
                    updateInfo={props.updateInfo}
                />
            </div>
            <div>
                {/*<FunctionSet/>*/}
            </div>
            <div className="adjustDelButton" onClick={() => {props.delInfo(props.itemInfo.settingId)}}>
                <DeleteButton/>
            </div>
        </div>
    );
}

export default ItemDetailPresenter;