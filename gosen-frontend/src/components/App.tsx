import {BrowserRouter, Route, Routes} from "react-router-dom";
import CommonContainer from "./Templates/Common/CommonContainer";
import "./AppStyle.css";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../common/reducer";
import { Provider } from "react-redux";

function App() {
  const store = configureStore({reducer: reducer});

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
