import { Route, Routes } from "react-router-dom";
import DesignSystemLibrary from "../Pages/DesignSystemLibrary/DesignSystemLibrary";
import Home from "../Pages/Home/Home";
import ProductCard from "../Ui/ProductCard/ProductCard";
import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/designsystemlibrary" element={<DesignSystemLibrary />} />
      </Routes>
      <ProductCard/>
    </div>
  );
}

export default App;
