import ButtonAtc from "../../Atoms/ButtonAtc/ButtonAtc"
import "./atomDisplay.css";

function AtomDisplay({
  title,
  component,
  children,
}) {
  return (
    <div className="atomDisplay">
      {title && <h3>{title}</h3>}

      {children}

      {component === "ButtonAtc1" && <ButtonAtc color="neutral" size="large">Add to cart</ButtonAtc>}
      {component === "ButtonAtc2" && <ButtonAtc color="primary" size="large">Add to cart</ButtonAtc>}
      {component === "ButtonAtc3" && <ButtonAtc color="secondary" size="large">Add to cart</ButtonAtc>}
    </div>
  )
}

export default AtomDisplay
