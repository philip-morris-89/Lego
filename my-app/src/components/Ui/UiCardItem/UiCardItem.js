import ButtonAtc from "../ButtonAtc/ButtonAtc"
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

      {component === "ButtonAtc1" && <ButtonAtc color="primary" size="large">Add to cart</ButtonAtc>}
      {component === "ButtonAtc2" && <ButtonAtc color="secondary" size="large">Add to cart</ButtonAtc>}
      {component === "ButtonAtc3" && <ButtonAtc color="primary" size="small">Add to cart</ButtonAtc>}
      {component === "ButtonAtc4" && <ButtonAtc color="primary" size="medium">Add to cart</ButtonAtc>}
      {component === "ButtonAtc5" && <ButtonAtc color="primary" size="large">Add to cart</ButtonAtc>}
    </div>
  )
}

export default UiCardItem
