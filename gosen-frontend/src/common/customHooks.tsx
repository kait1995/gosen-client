import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { updateDataTypes, updateDeviceList, updateGraph } from "./actions";

export const useCustomAxios = () => {
  const instance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
  const checkData = (res: AxiosResponse<any, any>) => {
    return res;
  };
  const errorHandling = (err: any) => {
    console.log(err.response);
  };
  instance.interceptors.response.use(checkData, errorHandling);
  return instance;
};

export const useFetch = () => {
  const customAxios = useCustomAxios();
  const dispatch = useDispatch();
  const fetchData = async () => {
    await customAxios
      .get(`${process.env.REACT_APP_DEVICE_LIST_API}`)
      .then((res) => {
        dispatch(updateDeviceList(res));
      });
    await customAxios
      .get(`${process.env.REACT_APP_DEVICE_DATA_TYPE_API}`)
      .then((res) => dispatch(updateDataTypes(res)));
  };
  fetchData();
};

export const useGraphData = () => {
  const customAxios = useCustomAxios();
  const dispatch = useDispatch();
  const getGraphData = async (id: string, datatype: string) => {
    await customAxios
      .get(`${process.env.REACT_APP_DEVICE_GRAPH_DATA_API}/${id}/${datatype}`)
      .then((res) => {
        dispatch(updateGraph(res));
      });
  };
  return getGraphData;
};
