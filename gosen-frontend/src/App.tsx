import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/Organisms/ItemDetail/ItemDetailContainer";
import CommonContainer from "./components/Templates/Common/CommonContainer";
import MainContentsContainer from "./components/Organisms/Main/MainContentsContainer";
import "./AppStyle.css";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonContainer/>}>
            <Route path="/top" element={<MainContentsContainer/>}/>
            <Route path="/detail" element={<ItemDetailContainer/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
