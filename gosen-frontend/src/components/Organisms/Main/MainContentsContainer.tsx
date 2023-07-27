import { useState } from "react";
import MainContentsPresenter from "./MainContentsPresenter";
import "./MainStyle.css";

const MainContentsContainer = () => {
    const [initData, setInitData] = useState({});
    /*
    const initData:{} = {
        data1:{
            itemSettings:{
                title:"title1",
                deviceNumber:"1234",
                is_activated:"true",
                use_camera:"true",
                use_timer:"true",
                timer_start:"start",
                timer_end:"end",
                manual_watering:"true",
                status_0:"true",
                status_1:"true",
                status_2:"true",
                status_3:"true",
                status_4:"true",
                status_5:"true",
                status_6:"true",
                status_7:"true",
                status_8:"true",
                status_9:"true",
            },
            graphData:{
                battery_status:"100",
                signal_strength:"100",
                humidity:"100",
                temperature:"100",
                option_0:"0",
                option_1:"0",
                option_2:"0",
                option_3:"0",
                option_4:"0",
                option_5:"0",
                option_6:"0",
                option_7:"0",
                option_8:"0",
                option_9:"0",
                date:"0000/00/00",
            },
        },
        data2:{
            itemSettings:{
                title:"title2",
                deviceNumber:"1234",
                is_activated:"true",
                use_camera:"true",
                use_timer:"true",
                timer_start:"start",
                timer_end:"end",
                manual_watering:"true",
                status_0:"true",
                status_1:"true",
                status_2:"true",
                status_3:"true",
                status_4:"true",
                status_5:"true",
                status_6:"true",
                status_7:"true",
                status_8:"true",
                status_9:"true",
            },
            graphData:{
                battery_status:"100",
                signal_strength:"100",
                humidity:"100",
                temperature:"100",
                option_0:"0",
                option_1:"0",
                option_2:"0",
                option_3:"0",
                option_4:"0",
                option_5:"0",
                option_6:"0",
                option_7:"0",
                option_8:"0",
                option_9:"0",
                date:"0000/00/00",
            },
        },
    };
    */

    return (
        <div className="mainContentsPresenter">
            <MainContentsPresenter initData={initData} setInitData={setInitData}/>
        </div>
    );
}

export default MainContentsContainer;