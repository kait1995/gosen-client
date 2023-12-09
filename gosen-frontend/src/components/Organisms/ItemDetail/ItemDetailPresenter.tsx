import { useState } from "react";
import DeleteButton from "../../Atoms/DeleteButton";
import Graph from "../../Atoms/Graph";
import GraphTitle from "../../Atoms/GraphTitle";
import DeviceInfo from "../../Molecules/DeviceInfo";
import { GraphData, ItemInfo } from "../../types";
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
    const selectedGraphDataSet = (dataType: string, labelName: string) => {
        const extractTargetDataAndLabels = (data: GraphData) => {
            const extractedData = Object.entries(data)
                .filter(([key, val]) => key === dataType)
                .map(([key, val]) => val);
            const extractedLabels = Object.entries(data)
                .filter(([key, val]) => key === labelName)
                .map(([key, val]) => val);
            return {extractedData, extractedLabels};
        };
        const dataset = props.graphData
            .filter((data) => data.deviceNumber === selectedDeviceNumber)
            .map(extractTargetDataAndLabels);
        return dataset.;
    };
    return(
        <div className="detail">
            <div>
                <GraphTitle/>
            </div>
            <div className="graph">
                <Graph selectedGraphDataSet={selectedGraphDataSet}/>
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