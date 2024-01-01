import { useState } from "react";
import DeleteButton from "../CommonParts/DeleteButton";
import Graph from "../CommonParts/Graph";
import GraphTitle from "../CommonParts/GraphTitle";
import DeviceInfo from "./DeviceInfo";
import { GraphData, ItemInfo } from "../types";
import "./ItemDetailStyle.css";
import { string } from "prop-types";

const ItemDetailPresenter = (props:{
    itemInfo:ItemInfo,
    graphData:GraphData[],
    delInfo:() => void,
}) => {
    const [selectedDeviceNumber, setSelectedDeviceNumber] = useState(0);
    const setOptions = () => {
        const distinctDeviceNumber = Array.from(
            new Set(props.graphData.map((data, key) => data.deviceNumber))
        );
        return(
            distinctDeviceNumber.map((deviceNumber, key) => {
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
                <Graph/>
            </div>
            <div>
                <DeviceInfo 
                    setOptions={setOptions} 
                    setSelectedDeviceNumber={setSelectedDeviceNumber}
                />
            </div>
            <div>
                {/*<FunctionSet/>*/}
            </div>
            <div className="adjustDelButton" onClick={() => {props.delInfo()}}>
                <DeleteButton/>
            </div>
        </div>
    );
}

export default ItemDetailPresenter;