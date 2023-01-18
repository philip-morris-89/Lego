import React from "react";
import "../ArticleCard/articleCard.css";
import ButtonCta from "../../Ui/ButtonCta/ButtonCta";

function ArticleCard({
  image = "https://www.lego.com/cdn/cs/set/assets/blt234264b132e705b2/T3-Star-Wars-202202-Block-Standard.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1",
  logo1,
  logo2,
  title = "Article card title",
  description = "Article card description goes here to describe a snipet of the article content",
  link = "Scopri di più",
  url = "./",
  position = "left",
}) {
  return (
    <div className="articleCard" data-position={position}>
      <a className="articleCard-imgContainer" href="./">
        <img className="articleCard-img" src={image} alt="Article" />
        {logo1 && (
          <div className="articleCard-logoContainer">
            <img src={logo1} alt="Logo" />
            {logo2 && <img src={logo2} alt="Logo" />}
          </div>
        )}
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonCta size="small" theme="none" link={url}>
        {link}
      </ButtonCta>
    </div>
  );
}

export default ArticleCard;
