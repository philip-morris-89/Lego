import React from "react";
import "../SpotlightCard/spotlightCard.css";
import ButtonCta from "../ButtonCta/ButtonCta";

function SpotlightCard({
  imgDesktop = "https://www.lego.com/cdn/cs/set/assets/blt3c0b04b63c6a2e93/10307-Exclusive-202211-PS-Block-Mixed-Large.jpg?fit=crop&format=webply&quality=80&width=650&height=720&dpr=2",
  imgMobile = "https://www.lego.com/cdn/cs/set/assets/blt4b9756a12ffb0392/10307-Exclusive-202211-PS-Block-Mixed-Mobile.jpg?fit=crop&format=webply&quality=80&width=375&height=260&dpr=1.5",
  logo = "https://www.lego.com/cdn/cs/set/assets/bltdb8d448dcc06cf2b/icons-logo-neg-600w.png?format=png&height=60&dpr=1.5",
  title = "Da Parigi con amore",
  subtitle = "Costruisci un tributo alla città delle luci con il nuovo set Tour Eiffel.",
  linktitle = "Compra ora",
  link = "./",
}) {
  return (
    <div className="spotlightcard">
      <a href="./" className="spotlightcardcontainer">
        <div className="img-container">
          <picture className="bannerPicture">
            <source
              alt=""
              type="image/webp"
              media="(min-width: 1024px)"
              srcset={imgDesktop}
            />
            <img className="bannerPicture-img" alt="" src={imgMobile} />
          </picture>
          <img className="logo" src={logo} alt="" />
        </div>

        <div className="text-container-desktop">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
          <ButtonCta color="white" size="small" theme="none" link={link}>
            {linktitle}
          </ButtonCta>
        </div>
        <div className="text-container-mobile">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>
          <ButtonCta color="white" size="small" theme="none" link={link}>
            {linktitle}
          </ButtonCta>
        </div>
      </a>
    </div>
  );
}

export default SpotlightCard;
