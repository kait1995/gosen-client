import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCustomAxios, useFetch } from "../../../common/customHooks";
import CommonPresenter from "./CommonPresenter";

const CommonContainer = () => {
    useFetch();
    return(
        <CommonPresenter/>
    );
}

export default CommonContainer;