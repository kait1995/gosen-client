import { useState } from "react";
import { ItemInfo } from "../types";
import "./ItemStyle.css";

const ItemTitle = (props:{
    itemInfo:ItemInfo,
    handler:(title:string) => void
}) => {
    const [title, setTitle] = useState(props.itemInfo.title);
    return(
        <div>
            <input 
                className="itemTitle" 
                type="text" 
                value={title}
                placeholder="Input title ID here..."
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){props.handler(title);}
                }}
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}

export default ItemTitle;