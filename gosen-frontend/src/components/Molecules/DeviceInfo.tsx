import DeviceConnectionStatus from "../Atoms/DeviceConnectionStatus";
import DeviceID from "../Atoms/DeviceID";

const DeviceInfo = () => {
    return(
        <div>
            <DeviceID/>
            <DeviceConnectionStatus/>
        </div>
    );
}

export default DeviceInfo;