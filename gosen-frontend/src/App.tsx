import {BrowserRouter, Route, Routes} from "react-router-dom";
import CommonContainer from "./components/Templates/Common/CommonContainer";
import "./AppStyle.css";

function App() {

  const PageNotFound = () => {
    return(
      <h2>Page Not Found</h2>
    );
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/top" element={<CommonContainer/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
