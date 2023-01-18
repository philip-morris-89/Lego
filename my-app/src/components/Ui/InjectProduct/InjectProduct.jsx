import apiDummy from "./dummy";
import ProductCard from "../ProductCard/ProductCard";

function InjectProductCard() {
  let data = apiDummy[Math.floor(Math.random() * 3)];
  return data.map((element) => {
    return (
      <li className="slider-li">
        <ProductCard
          badge={element.badge}
          badgetype={element.badgetype}
          sconto={element.sconto}
          linkimmagine={element.linkimmagine}
          titolo={element.titolo}
          rating={element.rating}
          prezzo={element.prezzo}
          linkprodotto={element.linkprodotto}
        />
      </li>
    );
  });
}

export default InjectProductCard;
