
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

type DataTypes = {dataTypes:Array<string>};

export type { GraphData, GraphDataList, DeviceList, DataTypes};