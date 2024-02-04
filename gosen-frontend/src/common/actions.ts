import { AxiosResponse } from "axios";

export const updateItem = (res:AxiosResponse<any, any>) => {
    return {type:"UPDATE_ITEM", data: res.data};
};

export const updateGraph = (res:AxiosResponse<any, any>) => {
    return {type:"UPDATE_GRAPH", data: res.data};
};

export const updateDeviceList = (res:AxiosResponse<any, any>) => {
    return {type:"UPDATE_DEVICE_LIST", data: res.data};
}