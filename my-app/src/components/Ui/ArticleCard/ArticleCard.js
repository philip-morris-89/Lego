import React from "react";
import "../ArticleCard/articleCard.css";
import ButtonCta from "../../Ui/ButtonCta/ButtonCta";

function ArticleCard({
  image = "https://www.lego.com/cdn/cs/set/assets/blt234264b132e705b2/T3-Star-Wars-202202-Block-Standard.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1",
  logo1 = "https://www.lego.com/cdn/cs/set/assets/bltc87b4d0a757a6632/harryPotter_logo_gold_neg_100h.png?format=png&height=60&dpr=2",
  logo2 = "https://www.lego.com/cdn/cs/set/assets/blt4fb1c3a4e8917247/wizardingWorld_logo_gold_300w.png?format=png&height=60&dpr=2",
  title = "Article card title",
  description = "Article card description goes here to describe a snipet of the article content",
  linktitle = "Scopri di più",
  link = "./",
}) {
  return (
    <div className="articleCard" data-position="right">
      <a className="articleCard-imgContainer" href="./">
        <img className="articleCard-img" src={image} alt="Article" />
        <div className="articleCard-logoContainer">
          <img src={logo1} alt="Logo" />
          <img src={logo2} alt="Logo" />
        </div>
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonCta size="small" theme="none" link={link}>
        {linktitle}
      </ButtonCta>
    </div>
  );
}

export default ArticleCard;
