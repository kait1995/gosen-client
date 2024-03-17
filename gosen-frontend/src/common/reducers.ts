import { combineReducers } from "@reduxjs/toolkit";
import { GraphDataList } from "../components/types";

const graphDataList:Array<GraphDataList> = [];
const deviceList:Array<number> = [];
const dataTypes:Array<string> = [];

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

const dataTypesReducer = (
    state = dataTypes,
    action: {type: String; data: any}
) => {
    switch(action.type){
        case "UPDATE_DATA_TYPE":
            return {...action.data};
        default:
            return state;
    }
};

const allReducers = combineReducers({
    graphData: graphDataReducer,
    deviceList: deviceListReducer,
    dataTypes: dataTypesReducer,
});

export default allReducers;