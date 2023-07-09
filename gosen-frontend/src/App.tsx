import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./AppStyle.css";
import CommonTemplate from "./components/Templates/Common/CommonTemplate";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonTemplate/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
