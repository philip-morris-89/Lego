import apiDummy from "./dummy";
import ProductCard from "../ProductCard/ProductCard";

function InjectProductCard() {
  let data = apiDummy[Math.floor(Math.random() * 6)];
  return(
    data.map((element) => { return( <ProductCard badge={element.badge} sconto={element.sconto} linkimmagine={element.linkimmagine} titolo={element.title}
      rating={element.rating} prezzo={element.price} linkprodotto={element.linkprodotto} />)}) 
  )
}

export default InjectProductCard;