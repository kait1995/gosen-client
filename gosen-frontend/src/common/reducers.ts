import { combineReducers } from "@reduxjs/toolkit";
import { GraphDataList, ItemInfo } from "../components/types";

const itemInfos:Array<ItemInfo> = [];
const graphDataList:Array<GraphDataList> = [];
const deviceList:Array<number> = [];

const itemInfoReducer = (
  state = itemInfos,
  action: {type: String; data: any }
) => {
    switch(action.type){
        case "UPDATE_ITEM":
            return [...action.data.itemSettings];
        default:
            return state;
    }
};

const graphDataReducer = (
    state = graphDataList,
    action: {type: String; data: any }
) => {
    switch(action.type){
        case "UPDATE_GRAPH":
            return {...action.data};
        default:
            return state;
    }
};

const deviceListReducer = (
    state = deviceList,
    action: {type: String; data: any}
) => {
    switch(action.type){
        case "UPDATE_DEVICE_LIST":
            return {...action.data};
        default:
            return state;
    }
};

const allReducers = combineReducers({
    itemInfos: itemInfoReducer,
    graphData: graphDataReducer,
    deviceList: deviceListReducer
});

export default allReducers;