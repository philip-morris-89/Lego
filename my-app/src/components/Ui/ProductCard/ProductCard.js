import ButtonAtc from "../ButtonAtc/ButtonAtc";
import "../ProductCard/productCard.css"

// novità=true fa comparire il badge novità,impostare uno sconto fa comparire il badge sconto con la percentuale indicata
// e svolge il calcolo dello sconto partendo dal prezzo (non ancora funzionante a dovere),

function ProductCard({
    novità=false,
    sconto=0,
    linkimmagine="https://www.lego.com/cdn/cs/set/assets/bltdcfa4924bc8abd0a/21335.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    titolo="Product Title",
    prezzo,
    template= "template1",
    dataskeleton="false",

}) {
  return (
    <div>
      <div
        className={"productCard"}
        data-card={template}
        data-skeleton={dataskeleton}
      >
        <div className={"productCard-display"}>
          <div className={"productCard-badges"}>
            {
              (novità != false && (
                <div className={"productCard-badge"}>
                  <span>Novità</span>
                </div>
              ))
            }
            {sconto > 0 && (
              <div className={"productCard-badge"}>
                <strong>-{sconto}%</strong>
              </div>
            )}
          </div>
          <a className={"productCard-imgContainer"} href="">
            <img src={linkimmagine} alt="Product image" />
          </a>
        </div>
        <div className={"productCard-content"}>
          <a href="" className={"productCard-title"}>
            {titolo}
          </a>
          {sconto > 0 ? (
            <div className={"productCard-content-price"}>
                <h6 className={"productCard-price-old"}> €{prezzo} </h6>
                <h6 className={"productCard-price-new"}>€{prezzo * sconto / 100}</h6>
            </div>
          ) : (
            <h6 className={"productCard-price"}>€{prezzo}</h6>
          )}

          <div className={"productCard-button"}>
            {/* <!-- Component Add to cart button --> */}
            <ButtonAtc color="primary" size="medium">Add to cart</ButtonAtc>
          </div>
        </div>
      </div>
      {/* <!-- Product Card --> */}
    </div>
  );
}

export default ProductCard;
