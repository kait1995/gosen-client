import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./AppStyle.css";
import Header from "./components/Organisms/Header/Header";
import MainContainer from "./components/Organisms/Main/MainContainer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="top">
              <Header/>
              <MainContainer/>
            </div>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
