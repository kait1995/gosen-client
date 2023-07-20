import BatteryIcon from "../../Atoms/BatteryIcon";
import ItemTitle from "../../Atoms/Item/ItemTitle";
import SlideSwitch from "../../Atoms/SlideSwitch";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import "./ItemStyle.css";
const ItemPresenter = () => {
    return(
        <>
            <div className="mainContents">
                <div className="slideSwitch">
                    <SlideSwitch/>
                </div>
                <div className="itemTitle">
                    <ItemTitle/>
                </div>
                <div className="statusIcon">
                    <BatteryIcon/>
                </div>
            </div>
            <div className="detailAdjust">
                <ItemDetailContainer/>
            </div>
        </>
    );
}

export default ItemPresenter;