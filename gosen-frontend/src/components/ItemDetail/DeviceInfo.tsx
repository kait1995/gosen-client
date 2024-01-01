import { DeviceInfoTitle } from "../CommonParts/DeviceInfoTitle";
import "./ItemDetailStyle.css";

const DeviceInfo = (props:{
    setOptions:() => JSX.Element[],
    setSelectedDeviceNumber: React.Dispatch<React.SetStateAction<number>>
}) => {
    return(
        <div>
            <div>
                <DeviceInfoTitle/>
            </div>
            <div>
                <select 
                    className="deviceInfo"
                    onChange={(e)=>props.setSelectedDeviceNumber(Number(e.target.value))}
                    defaultValue={"none"}
                >
                    <option key="none">none</option>
                    {props.setOptions()}
                </select>
            </div>
        </div>
    );
}

export default DeviceInfo;