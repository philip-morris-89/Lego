import ButtonAtc from "../ButtonAtc/ButtonAtc";
import RatingStar from "../../Ui/RatingStar/RatingStar";
import "../ProductCard/productCard.css";

// bdge=something fa comparire il badge con all'interno il something,impostare uno sconto fa comparire il badge sconto con la percentuale indicata
// e svolge il calcolo dello sconto partendo dal prezzo, linkprodotto abilità il collegamento con la pagina del prodotto sia per il titolo
// che per l'immagile, onclick per impostare il bottone.

function ProductCard({
  badge= false,
  badgetype= "Novità",
  sconto = 0,
  linkimmagine = "https://www.lego.com/cdn/cs/set/assets/bltdcfa4924bc8abd0a/21335.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
  titolo = "Product Title",
  rating = 0,
  prezzo,
  linkprodotto = "",
  onClick = "",
  template = "template1",
  dataskeleton = "false",
}) {
  return (
    <div
      className={"productCard"}
      data-card={template}
      data-skeleton={dataskeleton}
    >
      <div className={"productCard-display"}>
        <div className={"productCard-badges"}>
          {badge !== false && (
            <div className={"productCard-badge"}>
              <span>{badgetype}</span>
            </div>
          )}
          {sconto > 0 && (
            <div className={"productCard-badge"}>
              <strong>-{sconto}%</strong>
            </div>
          )}
        </div>
        <a className={"productCard-imgContainer"} href={linkprodotto}>
          <img src={linkimmagine} alt="Product" />
        </a>
      </div>
      <div className={"productCard-content"}>
        <a href={linkprodotto} className={"productCard-title"}>
          {titolo}
        </a>
        <div className={"productCard-starRating-box"}>
          {/* <!-- Component Rating --> */}
          <RatingStar score={rating} size="small" />
        </div>
        {sconto > 0 ? (
          <div className={"productCard-content-price"}>
            <h6 className={"productCard-price-old"}> €{prezzo} </h6>
            <h6 className={"productCard-price-new"}>
              €{( prezzo - (prezzo * sconto) / 100).toFixed(2)}
            </h6>
          </div>
        ) : (
          <h6 className={"productCard-price"}>€{prezzo}</h6>
        )}
        <div className={"productCard-button"}>
          {/* <!-- Component Add to cart button --> */}
          <ButtonAtc color="primary" size="medium" onClick={onClick}>
            Add to cart
          </ButtonAtc>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
