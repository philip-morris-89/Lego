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
      <ProductCard novità={true} sconto={40} titolo={"Prodotto di prova da App - Forza Napoli"} prezzo={79.99} template={"template2"} linkprodotto="https://www.lego.com/it-it/product/galaxy-explorer-10497"/>
    </div>
  );
}

export default App;
