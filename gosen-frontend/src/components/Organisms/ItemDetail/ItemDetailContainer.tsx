import { useState } from "react";
import ItemDetailPresenter from "./ItemDetailPresenter";
import { ItemInfo } from "../../types";

const ItemDetailContainer = (props:{
    itemInfo:ItemInfo,
    delItemInfo:(id:String) => void
    showDetails:boolean
}) => {

    return(
        <>
            {
                props.showDetails && (
                    <ItemDetailPresenter 
                        itemInfo={props.itemInfo}
                        delItemInfo={props.delItemInfo}
                    />
                )
            }
        </>
    );
}

export default ItemDetailContainer;