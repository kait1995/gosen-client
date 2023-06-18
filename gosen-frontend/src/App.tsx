import {BrowserRouter, Route, Routes} from "react-router-dom";
import Common from "./components/Common/Common";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Common/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
