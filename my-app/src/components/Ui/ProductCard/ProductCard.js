import ButtonAtc from "../ButtonAtc/ButtonAtc";
import "../ProductCard/productCard.css"

function ProductCard({
    novità= false,
    sconto=0,
    linkimmagine="https://www.lego.com/cdn/cs/set/assets/bltdcfa4924bc8abd0a/21335.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1.5",
    titolo="Product Title",
    prezzo,

}) {
  return (
    <div>
      <div
        className={"productCard"}
        data-card="template1"
        data-skeleton="false"
      >
        <div className={"productCard-display"}>
          <div className={"productCard-badges"}>
            {
              (novità = true && (
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
            <div>
                <h6 className={"productCard-price"}> ${prezzo} </h6>
                <h6 className={"productCard-price"}>${prezzo * sconto / 100}</h6>
            </div>
          ) : (
            <h6 className={"productCard-price"}>${prezzo}</h6>
          )}

          <div class="productCard-button">
            {/* <!-- Component Add to cart button --> */}
            <ButtonAtc color="primary">Add to cart</ButtonAtc>
          </div>
        </div>
      </div>
      {/* <!-- Product Card --> */}
    </div>
  );
}

export default ProductCard;
