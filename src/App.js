import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import AppBar from "../src/component/appBar/AppBar"
import Home from './component/home/Home'
import './App.css';

function App() {

  return (
    <div className="App">

        {/* <AppBar /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        </BrowserRouter>

      </div>
    
  );
}

export default App;
