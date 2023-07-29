
type ItemInfo = {
    title:string,
    deviceNumber:string,
    is_activated:string,
    use_camera:string,
    use_timer:string,
    timer_start:string,
    timer_end:string,
    manual_watering:string,
    status_0:string,
    status_1:string,
    status_2:string,
    status_3:string,
    status_4:string,
    status_5:string,
    status_6:string,
    status_7:string,
    status_8:string,
    status_9:string,
};

type ItemInfos = Array<ItemInfo>;

type GraphData = {
    battery_status:string,
    signal_strength:string,
    humidity:string,
    temperature:string,
    option_0:string,
    option_1:string,
    option_2:string,
    option_3:string,
    option_4:string,
    option_5:string,
    option_6:string,
    option_7:string,
    option_8:string,
    option_9:string,
    date:string,
};

type GraphDataList = Array<GraphData>;

export type { ItemInfo, ItemInfos, GraphData , GraphDataList};