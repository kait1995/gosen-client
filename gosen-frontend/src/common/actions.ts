import { AxiosResponse } from "axios";

export const updateGraph = (res:AxiosResponse<any, any>) => {
    return {type:"UPDATE_GRAPH", data: res.data};
};

export const updateDeviceList = (res:AxiosResponse<any, any>) => {
    return {type:"UPDATE_DEVICE_LIST", data: res.data};
}

export const updateDataTypes = (res:AxiosResponse<any, any>) => {
    return {type:"UPDATE_DATA_TYPE", data: res.data};
}