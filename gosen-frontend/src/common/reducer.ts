import { useEffect, useState } from "react";
import { GraphData, ItemInfo } from "../components/types";

const defaultItemInfo = {
  settingId: "",
  title:"",
  deviceNumber:0,
  isActivated:false,
  useCamera:false,
  useTimer:false,
  timerStart:"",
  timerEnd:"",
  manualWatering:false,
  status0:false,
  status1:false,
  status2:false,
  status3:false,
  status4:false,
  status5:false,
  status6:false,
  status7:false,
  status8:false,
  status9:false,
};

const itemInfos:Array<ItemInfo> = [];
const graphDataList:Array<GraphData> = [];
const prop = {
  defaultItemInfo: defaultItemInfo,
  itemInfos: itemInfos,
  graphDataList: graphDataList,
};

const reducer = (
  state = prop,
  action: { type: String; data: any }
) => {
  if (action.type === "UPDATE_ITEM") {
    return {
      ...prop,
      itemInfos: [...action.data]
    };
  }
  return state;
};

export default reducer;