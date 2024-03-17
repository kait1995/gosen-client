import { useSelector } from "react-redux";
import ControlPanelPresenter from "./ControlPanelPresenter";
import "./ControlPanelStyle.css";
import { DataTypes, DeviceList, GraphDataList } from "../types";
import { useGraphData } from "../../common/customHooks";
import { useEffect, useState } from "react";

const ControlPanelContainer = () => {
  const [deviceId, setDeviceId] = useState("none");
  const [dataType, setDataType] = useState("");
  const getGraphData = useGraphData();
  const preloadedData = useSelector(
    (state: {
      deviceList: DeviceList;
      graphData: GraphDataList;
      dataTypes: DataTypes;
    }) => state
  );
  useEffect(() => {
    if (deviceId !== "" && deviceId !== "none" && dataType !== "") {
      getGraphData(deviceId, dataType);
    }
  }, [dataType, deviceId]);
  return (
    <div className="controlPanelPresenter">
      <ControlPanelPresenter
        preloadedData={preloadedData}
        setDeviceId={setDeviceId}
        setDataType={setDataType}
      />
    </div>
  );
};

export default ControlPanelContainer;
