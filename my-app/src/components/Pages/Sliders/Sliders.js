import React from "react";
import ProductCard from "../../Ui/ProductCard/ProductCard";
import ArticleCard from "../../Ui/ArticleCard/ArticleCard";
import Slider from "../../Ui/Slider/Slider";
import InjectProductCard from "../../Ui/InjectProduct/InjectProduct";

function Sliders() {
  return (
    <div>
      <Slider slides="four">
        <InjectProductCard />
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="four">
        <ProductCard
          novità={true}
          sconto={40}
          titolo={"Prodotto di prova"}
          prezzo={79.99}
          rating={4}
          template={"template1"}
          linkprodotto="https://www.lego.com/it-it/product/galaxy-explorer-10497"
        />
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="three">
        <ProductCard
          novità={true}
          sconto={40}
          titolo={"Prodotto di prova"}
          prezzo={79.99}
          rating={4}
          template={"template1"}
          linkprodotto="https://www.lego.com/it-it/product/galaxy-explorer-10497"
        />
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="two">
        <ProductCard
          novità={true}
          sconto={40}
          titolo={"Prodotto di prova"}
          prezzo={79.99}
          rating={4}
          template={"template1"}
          linkprodotto="https://www.lego.com/it-it/product/galaxy-explorer-10497"
        />
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="four">
        <ArticleCard />
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="three">
        <ArticleCard />
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="two">
        <ArticleCard />
      </Slider>
    </div>
  );
}

export default Sliders;
