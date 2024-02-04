import { useState } from "react";
import { ItemInfo } from "../types";
import ItemPresenter from "./ItemPresenter";
import { useUpdateItem } from "../../common/customHooks";

const ItemContainer = (props:{itemInfo:ItemInfo}) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const updateInfo = useUpdateItem().updateInfo;

    return(
        <ItemPresenter 
            showDetails={showDetails} 
            setShowDetails={setShowDetails}
            itemInfo={props.itemInfo}
            updateInfo={updateInfo}
        />
    );
}

export default ItemContainer;