import { useState } from "react";
import ItemDetailPresenter from "./ItemDetailPresenter";

const ItemDetailContainer = (props:{
    showDetails:boolean,
}) => {

    return(
        <>
            {props.showDetails && (<ItemDetailPresenter/>)}
        </>
    );
}

export default ItemDetailContainer;