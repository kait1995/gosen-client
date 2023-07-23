import DeviceConnectionStatus from "../Atoms/DeviceConnectionStatus";
import DeviceID from "../Atoms/DeviceID";
import "./MoleculesStyle.css";

const DeviceInfo = () => {
    return(
        <div>
            <div className="deviceInfo">
                <DeviceID/>
            </div>
            <DeviceConnectionStatus/>
        </div>
    );
}

export default DeviceInfo;