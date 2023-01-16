import React from "react";
import "../SpotlightCard/spotlightCard.css";
import ButtonCta from "../ButtonCta/ButtonCta";

function SpotlightCard({
  image = "https://www.lego.com/cdn/cs/set/assets/blt4b9756a12ffb0392/10307-Exclusive-202211-PS-Block-Mixed-Mobile.jpg?fit=crop&format=jpg&quality=80&width=375&height=260&dpr=1",
  logo = "https://www.lego.com/cdn/cs/set/assets/bltdb8d448dcc06cf2b/icons-logo-neg-600w.png?format=png&height=60&dpr=1.5",
  title = "Da Parigi con amore",
  subtitle = "Costruisci un tributo alla città delle luci con il nuovo set Tour Eiffel.",
  linktitle = "Compra ora",
  link = "./",
}) {
  return (
    <div className="cardContainer">
      <div className="x">
        <img src={image} />
        <img src={logo} />
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <ButtonCta size="small" theme="none" link={link}>
        {linktitle}
      </ButtonCta>
    </div>
  );
}

export default SpotlightCard;
