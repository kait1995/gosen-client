import { DeviceInfoTitle } from "../../CommonParts/DeviceInfoTitle";
import { ItemInfo } from "../../types";
import "../ItemDetailStyle.css";

const DeviceInfo = (props:{
    setOptions:() => JSX.Element[],
    itemInfo:ItemInfo,
    updateInfo:(newItem:ItemInfo) => void,
}) => {
    return(
        <div>
            <div>
                <DeviceInfoTitle/>
            </div>
            <div>
                <select 
                    className="deviceInfo"
                    onChange={
                        () => {}
                        /*(e)=>props.updateInfo({
                            ...props.itemInfo,
                            "deviceNumber":Number(e.target.value)
                        })*/
                    }
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