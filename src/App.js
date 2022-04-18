import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import AppBar from "../src/component/appBar/AppBar"
import { Parallax } from "@react-spring/parallax";
import Home from './component/home/Home'
import './App.css';

function App() {

  return (
    <div className="App">
      <Parallax pages={1.6}>
        {/* <AppBar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        </BrowserRouter>
      </Parallax>
      </div>
    
  );
}

export default App;
