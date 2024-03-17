import Graph from "../CommonParts/Graph";
import GraphTitle from "../CommonParts/GraphTitle";
import { DataTypes, DeviceList, GraphDataList } from "../types";
import "./ControlPanelStyle.css";
import SelectParts from "../CommonParts/SelectParts";

const ControlPanelPresenter = (props: {
  preloadedData: {
    deviceList: DeviceList;
    graphData: GraphDataList;
    dataTypes: DataTypes;
  };
  setDeviceId: React.Dispatch<React.SetStateAction<string>>;
  setDataType: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="detail">
      <div>
        <GraphTitle />
      </div>
      <div className="graph">
        <Graph graphData={props.preloadedData.graphData} />
      </div>
      <div>
        <SelectParts
          itemList={props.preloadedData.deviceList.deviceNumberList}
          partsTitle="DeviceList"
          onChange={props.setDeviceId}
        />
      </div>
      <div>
        <SelectParts
          itemList={props.preloadedData.dataTypes.dataTypes}
          partsTitle="DataType"
          onChange={props.setDataType}
        />
      </div>
      <div>{/*<FunctionSet/>*/}</div>
    </div>
  );
};

export default ControlPanelPresenter;
