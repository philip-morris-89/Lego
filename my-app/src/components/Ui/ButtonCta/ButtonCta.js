import "./buttonCta.css";

const COLORS = ["black", "white"];
const SIZES = ["large", "medium", "small"];
const THEMES = ["solid", "outline", "none"];
const SHAPES = ["rectangle", "pill"];

function ButtonCta({ color, size, children, theme, shape, link }) {
  const COLOR = COLORS.includes(color) ? color : COLORS[0];
  const SIZE = SIZES.includes(size) ? size : SIZES[0];
  const THEME = THEMES.includes(theme) ? theme : THEMES[0];
  const SHAPE = SHAPES.includes(shape) ? shape : SHAPES[0];

  return (
    <a
      href={link}
      className={"buttonCta"}
      data-color={COLOR}
      data-size={SIZE}
      data-style={THEME}
      data-shape={SHAPE}
    >
      {children}
      <svg
        viewBox="0 0 18 28"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
  );
}

export default ButtonCta;
