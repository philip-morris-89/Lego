import React from "react";
import "./banner.css";
import ButtonCta from "../ButtonCta/ButtonCta";

const SIZES = ["large", "small"];
const TEXTCOLORS = ["white", "black"];
const BACKGROUNDCOLORS = ["black", "purple", "blue", "orange","gray", "halloween", "halloweenlight", "halloweengreen", "xmas"];
const POSITIONS = ["left", "center", "right"];

function Banner({
  size,
  textcolor,
  backgroundcolor,
  position,
  title = "Banner title Lorem ipsum dolor amet ipsum dolor amet.",
  paragraph,
  imgMobile = "https://www.lego.com/cdn/cs/set/assets/blt8a95702fdb4260d8/75331-Exclusive-202210-VIP-Hero-Standard-Small.jpg?fit=crop&format=jpg&quality=80&width=600&height=600&dpr=2",
  imgTablet = "https://www.lego.com/cdn/cs/set/assets/bltf8f58f8e70b40985/75331-Exclusive-202210-VIP-Hero-Standard-Medium.jpg?fit=crop&format=jpg&quality=80&width=900&height=350&dpr=3",
  imgDesktop = "https://www.lego.com/cdn/cs/set/assets/bltd44334316ded064e/75331-Exclusive-202210-VIP-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=3",
  video,
  imgBrand,
  imgLogo,
  btnText1,
  btnLink1,
  btnText2,
  btnLink2,
  btnColor = "white",
}) {
  const SIZE = SIZES.includes(size) ? size : SIZES[0];
  const TEXTCOLOR = TEXTCOLORS.includes(textcolor) ? textcolor : TEXTCOLORS[0];
  const BACKGROUNDCOLOR = BACKGROUNDCOLORS.includes(backgroundcolor)
    ? backgroundcolor
    : BACKGROUNDCOLORS[0];
  const POSITION = POSITIONS.includes(position) ? position : POSITIONS[0];
  return (
    <div
      className="banner"
      data-size={SIZE}
      data-color={TEXTCOLOR}
      data-background={BACKGROUNDCOLOR}
      data-position={POSITION}
    >
      <section className="bannerMedia">
        {!video && <picture className="bannerPicture">
          <source
            className="bannerPicture-source"
            alt=""
            type="image/webp"
            media="(min-width: 1024px)"
            srcSet={imgDesktop}
          />
          <source
            className="bannerPicture-source"
            alt=""
            type="image/webp"
            media="(min-width: 601px)"
            srcSet={imgTablet}
          />
          <img className="bannerPicture-img" alt="" src={imgMobile} />
        </picture>}
        {video && <video loop playsInline autoPlay muted>
          <source src={video} type="video/mp4" />
          </video>}
        {imgBrand && (
          <img className="bannerMedia-mark" src={imgBrand} alt="Brand" />
        )}
      </section>
      <div data-container="large">
        <section className="bannerContent">
          {imgLogo && <img src={imgLogo} alt="Logo" />}
          <h3>{title}</h3>
          {paragraph && <p>{paragraph}</p>}
          <ul className="banner-btnGroup">
          {btnText1 && (
            <li className="banner-btnContainer">
               {<ButtonCta color={btnColor} size="medium" link={btnLink1}>
                {btnText1}
              </ButtonCta>}
            </li>
            )}
            {btnText2 && (
              <li className="banner-btnContainer">
                {<ButtonCta color={btnColor} size="medium" link={btnLink2}>
                  {btnText2}
                </ButtonCta>}
              </li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Banner;
