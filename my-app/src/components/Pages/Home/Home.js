import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../../Ui/ProductCard/ProductCard'
import './home.css'

function Home() {
  return (
    <div className="home">
      <h1>Welcome</h1>
      <p>This page is work in progress...</p>
      <p>
        Go to the <Link to="/designsystemlibrary">Design System Library</Link>{" "}
        to view the latest updates.
      </p>
      <ProductCard
        novità={true}
        sconto={40}
        titolo={"Prodotto di prova da App - Forza Napoli"}
        prezzo={79.99}
        rating={3.5}
        template={"template1"}
        linkprodotto="https://www.lego.com/it-it/product/galaxy-explorer-10497"
      />
    </div>
  );
}

export default Home
