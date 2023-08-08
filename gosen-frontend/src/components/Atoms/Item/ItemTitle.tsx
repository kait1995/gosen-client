import "./ItemStyle.css";

const ItemTitle = () => {
    return(
        <div>
            <input 
                className="itemTitle" 
                type="text" 
                placeholder="Input title ID here..."
                onClick={(e)=>{e.stopPropagation()}}
            />
        </div>
    );
}

export default ItemTitle;