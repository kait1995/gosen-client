import BatteryIcon from "../../Atoms/BatteryIcon";
import ItemTitle from "../../Atoms/Item/ItemTitle";
import SlideSwitch from "../../Atoms/SlideSwitch";
import "./ItemStyle.css";

const Item = () => {
    return(
        <div className="mainContents">
            <SlideSwitch/>
            <ItemTitle/>
            <BatteryIcon/>
        </div>
    );
}

export default Item;