import {useFetch} from "../../common/customHooks";
import PagePresenter from "./PagePresenter";

const PageContainer = () => {
    useFetch();
    return(
        <PagePresenter/>
    );
}

export default PageContainer;