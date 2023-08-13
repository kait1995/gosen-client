import BatteryIcon from "../../Atoms/BatteryIcon";
import ItemTitle from "../../Atoms/Item/ItemTitle";
import SlideSwitch from "../../Atoms/SlideSwitch";
import { ItemInfo } from "../../types";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import "./ItemStyle.css";

const ItemPresenter = (props:{
    showDetails:boolean,
    setShowDetails:React.Dispatch<React.SetStateAction<boolean>>,
    itemInfo:ItemInfo,
    delItemInfo:(title:string) => void
}) => {

    return(
        <>
            <div onClick={() => props.setShowDetails(!props.showDetails)} className="itemBase">
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
                <ItemDetailContainer 
                    itemInfo={props.itemInfo} 
                    delItemInfo={props.delItemInfo}
                    showDetails={props.showDetails}
                />
            </div>
        </>
    );
}

export default ItemPresenter;