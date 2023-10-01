import { useState } from "react";
import { ItemInfo } from "../../types";
import ItemPresenter from "./ItemPresenter";

const ItemContainer = (props:{itemInfo:ItemInfo, delItemInfo:(title:string) => void}) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    return(
        <ItemPresenter 
            showDetails={showDetails} 
            setShowDetails={setShowDetails}
            itemInfo={props.itemInfo}
            delItemInfo={props.delItemInfo}
        />
    );
}

export default ItemContainer;