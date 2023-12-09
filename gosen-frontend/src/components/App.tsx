import {BrowserRouter, Route, Routes} from "react-router-dom";
import CommonContainer from "./Templates/Common/CommonContainer";
import "./AppStyle.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import allReducers from "../common/reducers";

function App() {
  const store = configureStore({reducer: allReducers});

  const PageNotFound = () => {
    return(
      <h2>Page Not Found</h2>
    );
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/top" element={<CommonContainer/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
