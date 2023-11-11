import axios from "axios";
import DeleteButton from "../../Atoms/DeleteButton";
import Graph from "../../Atoms/Graph";
import GraphTitle from "../../Atoms/GraphTitle";
import DeviceInfo from "../../Molecules/DeviceInfo";
import FunctionSet from "../../Molecules/FunctionSet";
import { ItemInfo } from "../../types";
import "./ItemDetailStyle.css";

const ItemDetailPresenter = (props:{
    itemInfo:ItemInfo,
    delInfo:() => void,
}) => {
    return(
        <div className="detail">
            <div>
                <GraphTitle/>
            </div>
            <div className="graph">
                <Graph/>
            </div>
            <div>
                <DeviceInfo/>
            </div>
            <div>
                <FunctionSet/>
            </div>
            <div className="adjustDelButton" onClick={() => {props.delInfo()}}>
                <DeleteButton/>
            </div>
        </div>
    );
}

export default ItemDetailPresenter;