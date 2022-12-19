import { Route, Routes } from "react-router-dom";
import DesignSystemLibrary from "../Pages/DesignSystemLibrary/DesignSystemLibrary";
import Home from "../Pages/Home/Home";
import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designsystemlibrary" element={<DesignSystemLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
