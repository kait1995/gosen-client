import ItemTitle from "./ItemParts/ItemTitle";
import { ItemInfo } from "../types";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import "./ItemStyle.css";

const ItemPresenter = (props:{
    showDetails:boolean,
    setShowDetails:React.Dispatch<React.SetStateAction<boolean>>,
    itemInfo:ItemInfo,
    updateInfo:(newItem:ItemInfo) => void,
}) => {

    return(
        <>
            <div onClick={() => props.setShowDetails(!props.showDetails)} className="itemBase">
                <div className="slideSwitch">
                    {/*<SlideSwitch/>*/}
                </div>
                <div className="itemTitle">
                    <ItemTitle itemInfo={props.itemInfo} handler={props.updateInfo} />
                </div>
                <div className="statusIcon">
                    {/*<BatteryIcon/>*/}
                </div>
            </div>
            <div className="detailAdjust">
                <ItemDetailContainer itemInfo={props.itemInfo} showDetails={props.showDetails}/>
            </div>
        </>
    );
}

export default ItemPresenter;