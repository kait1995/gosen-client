import { useState } from "react";
import { ItemInfo } from "../../types";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import ItemPresenter from "./ItemPresenter";

const ItemContainer = (props:{itemInfo:ItemInfo}) => {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    return(
        <ItemPresenter 
            showDetails={showDetails} 
            setShowDetails={setShowDetails}
            itemInfo={props.itemInfo}
        />
    );
}

export default ItemContainer;