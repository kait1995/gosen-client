import { combineReducers } from "@reduxjs/toolkit";
import { GraphData, ItemInfo } from "../components/types";

const itemInfos:Array<ItemInfo> = [];
const graphDataList:Array<GraphData> = [];

const itemInfoReducer = (
  state = itemInfos,
  action: { type: String; data: any }
) => {
    switch (action.type) {
        case "UPDATE_ITEM":
            return [...action.data];
        default:
            return state;
    }
};

const graphDataReducer = (
    state = graphDataList,
    action: { type: String; data: any }
) => {
    switch (action.type) {
        case "UPDATE_GRAPH":
            return [...action.data];
        default:
            return state;
    }
};

const allReducers = combineReducers({
    itemInfos: itemInfoReducer,
    graphData: graphDataReducer,
});

export default allReducers;