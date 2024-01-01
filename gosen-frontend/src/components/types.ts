
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
    deviceNumber:number
    batteryStatus:string,
    signalStrength:string,
    humidity:string,
    temperature:string,
    option0:string,
    option1:string,
    option2:string,
    option3:string,
    option4:string,
    option5:string,
    option6:string,
    option7:string,
    option8:string,
    option9:string,
    date:string,
};

type GraphDataList = Array<GraphData>;

export type { ItemInfo, ItemInfos, GraphData , GraphDataList};