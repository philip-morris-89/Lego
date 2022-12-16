import "./LinkCallToAction.css"

const COLORS = [ "neutral", "primary", "secondary" ]
const SIZES = [ "large", "medium", "small" ]

function LinkCallToAction({
    text,
    color,
    size,
    type
}){

    const COLOR = COLORS.includes(color) ? color : COLORS[0]
    const SIZE = SIZES.includes(size) ? size : SIZES[0]

    return(
    <a href className={"LinkCallToAction"} data-color={COLOR} data-size={SIZE} data-type={type}>
        {text}
        <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            className="LinkCallToAction-arrow">
            <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
        </svg>
    </a>
    )
}

export default LinkCallToAction
