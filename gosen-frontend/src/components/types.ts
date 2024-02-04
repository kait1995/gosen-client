
type ItemInfo = {
    settingId:string,
    title:string,
    deviceNumber:number,
    isActivated:boolean,
    useCamera:boolean,
    useTimer:boolean,
    timerStart:string,
    timerEnd:string,
    manualWatering:boolean,
    status0:boolean,
    status1:boolean,
    status2:boolean,
    status3:boolean,
    status4:boolean,
    status5:boolean,
    status6:boolean,
    status7:boolean,
    status8:boolean,
    status9:boolean,
};

type ItemInfos = {
    itemSettings:Array<ItemInfo>
};

type GraphData = {
    humidity: number,
    temperature: number,
    option0: number,
    option1: number,
    option2: number,
    option3: number,
    option4: number,
    option5: number,
    option6: number,
    option7: number,
    option8: number,
    option9: number,
};

type GraphDataList = {
    dateList:Array<string>,
    measuredValues:Array<GraphData>
}

type DeviceList = {deviceNumberList:Array<number>};

export type { ItemInfo, ItemInfos, GraphData, GraphDataList, DeviceList};