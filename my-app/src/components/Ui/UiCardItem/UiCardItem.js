import ButtonAtc from "../ButtonAtc/ButtonAtc"
import ButtonCta from "../ButtonCta/ButtonCta";
import "./uiCardItem.css";

function UiCardItem({
  title,
  component,
  children,
}) {
  return (
    <div className="uiCardItem">
      {title && <h4>{title}</h4>}

      {children}

      {/* Button Add to cart */}
      {component === "ButtonAtc1" && <ButtonAtc color="primary" size="large">Add to cart</ButtonAtc>}
      {component === "ButtonAtc2" && <ButtonAtc color="secondary" size="large">Add to cart</ButtonAtc>}
      {component === "ButtonAtc3" && <ButtonAtc color="primary" size="small">Add to cart</ButtonAtc>}
      {component === "ButtonAtc4" && <ButtonAtc color="primary" size="medium">Add to cart</ButtonAtc>}
      {component === "ButtonAtc5" && <ButtonAtc color="primary" size="large">Add to cart</ButtonAtc>}

      {/* Button Call to action */}
      {component === "ButtonCta1" && <ButtonCta>Scopri di più</ButtonCta>}
      {component === "ButtonCta2" && <ButtonCta color="white">Scopri di più</ButtonCta>}
      {component === "ButtonCta3" && <ButtonCta color="black" theme="outline">Scopri di più</ButtonCta>}
      {component === "ButtonCta4" && <ButtonCta color="black" shape="pill">Scopri di più</ButtonCta>}
      {component === "ButtonCta5" && <ButtonCta color="white" shape="pill">Scopri di più</ButtonCta>}
      {component === "ButtonCta6" && <ButtonCta color="white" shape="pill" theme="outline">Scopri di più</ButtonCta>}
      {component === "ButtonCta7" && <ButtonCta color="black" size="small">Scopri di più</ButtonCta>}
      {component === "ButtonCta8" && <ButtonCta color="black" size="medium">Scopri di più</ButtonCta>}
      {component === "ButtonCta9" && <ButtonCta color="black" size="large">Scopri di più</ButtonCta>}
    </div>
  )
}

export default UiCardItem
