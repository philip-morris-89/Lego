import React from "react";
import "./banner.css";
import ButtonCta from "../ButtonCta/ButtonCta";

const SIZES = ["large", "small"];
const COLORS = ["white", "black"];
const BANNERCOLORS = ["black", "white", "purple", "blue", "halloween", "xmas"];
const POSITIONS = ["left", "right", "center"];

export function Banner({
  size,
  color,
  bannerColor,
  position,
  skeleton = "false",
  bannerTitle = "Banner title Lorem ipsum dolor amet ipsum dolor amet.",
  bannerParagraph = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, ducimus!",
  logoimage = "https://www.lego.com/cdn/cs/set/assets/bltfb987f8b1414454f/starWars_logo_black_stroke_300w.png?format=png&height=60&dpr=2",
  brandimage = "https://www.lego.com/cdn/cs/set/assets/bltfb987f8b1414454f/starWars_logo_black_stroke_300w.png?format=png&height=60&dpr=2",
  container = "large",
  imgDesktop = "https://www.lego.com/cdn/cs/set/assets/bltd44334316ded064e/75331-Exclusive-202210-VIP-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=3",
  imgTablet = "https://www.lego.com/cdn/cs/set/assets/bltf8f58f8e70b40985/75331-Exclusive-202210-VIP-Hero-Standard-Medium.jpg?fit=crop&format=jpg&quality=80&width=900&height=350&dpr=3",
  imgMobile = "https://www.lego.com/cdn/cs/set/assets/blt8a95702fdb4260d8/75331-Exclusive-202210-VIP-Hero-Standard-Small.jpg?fit=crop&format=jpg&quality=80&width=600&height=600&dpr=2",
}) {
  const SIZE = SIZES.includes(size) ? size : SIZES[0];
  const COLOR = COLORS.includes(color) ? color : COLORS[0];
  const BANNERCOLOR = BANNERCOLORS.includes(bannerColor)
    ? bannerColor
    : BANNERCOLORS[0];
  const POSITION = POSITIONS.includes(position) ? position : POSITIONS[0];

  return (
    <div
      className="banner"
      data-size={SIZE}
      data-color={COLOR}
      data-background={BANNERCOLOR}
      data-position={POSITION}
      data-skeleton={skeleton}
    >
      <section className="bannerMedia">
        <picture className="bannerPicture">
          <source
            className="bannerPicture-source"
            type="image/webp"
            media="(min-width: 1024px)"
            srcset={imgDesktop}
          />
          <source
            className="bannerPicture-source"
            type="image/webp"
            media="(min-width: 425px)"
            srcset={imgTablet}
          />
          <img className="bannerPicture-img" src={imgMobile} />
        </picture>

        <img className="bannerMedia-mark" src={brandimage} alt="Brand image" />
      </section>
      <div data-container={container}>
        <section className="bannerContent">
          <img src={logoimage} alt="Logo image" />
          <h3>{bannerTitle}</h3>
          <p>{bannerParagraph}</p>
          <ul>
            <li>
              <ButtonCta color="white">Compra ora</ButtonCta>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
