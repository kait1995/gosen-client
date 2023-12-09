import { AnyAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GraphData, ItemInfo } from "../components/types";
import { updateGraph, updateItem } from "./actions";

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
        await customAxios.get(`${process.env.REACT_APP_DEVICE_API}`).then((res) => {
            dispatch(updateGraph(res));
        });
    };
    fetchData();
}
