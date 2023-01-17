import { Route, Routes } from "react-router-dom";
import DesignSystemLibrary from "../Pages/DesignSystemLibrary/DesignSystemLibrary";
import Index from "../Pages/Index/Index";
import Home from "../Pages/Home/Home";
import Banners from "../Pages/Banners/Banners";
import Headers from "../Pages/Headers/Headers";
import SpotlightCard from "../Ui/SpotlightCard/SpotlightCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/designsystemlibrary" element={<DesignSystemLibrary />} />
        <Route path="/banners" element={<Banners />} />
        <Route path="/headers" element={<Headers />} />
        <Route path="/spotlightcard" element={<SpotlightCard />} />
      </Routes>
    </div>
  );
}

export default App;
