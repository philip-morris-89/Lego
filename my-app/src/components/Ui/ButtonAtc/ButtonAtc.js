import "./buttonAtc.css";

const COLORS = ["neutral", "primary", "secondary"];
const SIZES = ["large", "medium", "small"];

function ButtonAtc({ children = "Button", type, onClick, color, size }) {
  const COLOR = COLORS.includes(color) ? color : COLORS[0];
  const SIZE = SIZES.includes(size) ? size : SIZES[0];

  return (
    <button
      className={`buttonAtc`}
      data-color={COLOR}
      data-size={SIZE}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default ButtonAtc;
