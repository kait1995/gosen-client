import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { ItemInfo } from "../components/types";
import { updateDeviceList, updateGraph, updateItem } from "./actions";

export const useCustomAxios = () => {
    const instance = axios.create({baseURL: process.env.REACT_APP_BASE_URL});
    const checkData = (res:AxiosResponse<any, any>) => {
        return res;
    };
    const errorHandling = (err:any) => {
        console.log(err.response);
    };
    instance.interceptors.response.use(checkData, errorHandling);
    return instance;
};

export const useFetch = () => {
    const customAxios = useCustomAxios();
    const dispatch = useDispatch();
    const fetchData = async () => {
        await customAxios.get(`${process.env.REACT_APP_ITEM_API}`).then((res) => {
            dispatch(updateItem(res));
        });
        await customAxios.get(`${process.env.REACT_APP_DEVICE_LIST_API}`).then((res) => {
            dispatch(updateDeviceList(res));
        });
    };
    fetchData();
}

export const useUpdateItem = () => {
    const customAxios = useCustomAxios();
    const dispatch = useDispatch();
    const addInfo = async (data:any) => {
        await customAxios.post(`${process.env.REACT_APP_ITEM_API}`, data);
        await customAxios.get(`${process.env.REACT_APP_ITEM_API}`).then((res) => {
            dispatch(updateItem(res));
        });
    };
    const delInfo = async (deleteTargetId:string) => {
        await customAxios.delete(`${process.env.REACT_APP_ITEM_API}/${deleteTargetId}`);
        await customAxios.get(`${process.env.REACT_APP_ITEM_API}`).then((res) => {
            dispatch(updateItem(res));
        });
    };
    const updateInfo = async (newItem:ItemInfo) => {
        await customAxios.put(`${process.env.REACT_APP_ITEM_API}/${newItem.settingId}`, newItem);
        await customAxios.get(`${process.env.REACT_APP_ITEM_API}`).then((res) => {
            dispatch(updateItem(res));
        });
    };
    return {addInfo, delInfo, updateInfo};
}

export const useGraphData = () => {
    const customAxios = useCustomAxios();
    const dispatch = useDispatch();
    const getGraphData = async (id:number) => {
        await customAxios.get(`${process.env.REACT_APP_DEVICE_GRAPH_DATA_API}/${id}`).then((res) => {
            dispatch(updateGraph(res));
        });
    };
    return {getGraphData};
}