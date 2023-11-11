import { AnyAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { GraphData, ItemInfo } from "../components/types";

//データ取得時にはuseFetchを利用し、PostしたいときはuseCustomAxiosを使う。
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
