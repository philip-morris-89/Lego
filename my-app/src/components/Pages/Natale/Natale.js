import React from "react";
import Banner from "../../Ui/Banner/Banner";
import Footer from "../../Ui/Footer/Footer";
import InjectArticles from "../../Ui/InjectArticles/InjectArticles";
import InjectProductCard2 from "../Natale/InjectProduct/InjectProduct";
import PageHeader from "../../Ui/PageHeader/PageHeader";
import Slider from "../../Ui/Slider/Slider";
import Navbar from "../../Ui/Navbar/NavBar";
import "./natale.css";
import ButtonCta from "../../Ui/ButtonCta/ButtonCta";
import InjectProductCard1 from "../../Ui/InjectProduct/InjectProduct";
import Quicklinks from "./QuickLinks/Quicklinks";

function Natale() {
  return (
    <div className="natale">
      <Navbar />
      <div className="background-natale">
        <PageHeader
          text="Regali di Natale LEGO®"
          btnText1="Prodotti"
          btnText2="Scopri di più"
          position="center"
        />
        <Banner
          size="large"
          textcolor="black"
          backgroundcolor="xmas"
          position="left"
          title="Costruisci lo spirito natalizio"
          paragraph="Diffondi lo spirito natalizio con il nuovo set Natale nella strada principale LEGO®."
          imgMobile="https://www.lego.com/cdn/cs/set/assets/blt74a0a7ae0c32055e/Holiday-Landing-202212-10308-Hero-Standard-Small.jpg?fit=crop&format=webply&quality=80&width=600&height=600&dpr=2"
          imgTablet="https://www.lego.com/cdn/cs/set/assets/blt133fbb81fb18da99/Holiday-Landing-202212-10308-Hero-Standard-Medium.jpg?fit=crop&format=jpg&quality=80&width=900&height=350&dpr=3"
          imgDesktop="https://www.lego.com/cdn/cs/set/assets/bltf6665af9c7337230/Holiday-Landing-202212-10308-Hero-Standard-Large.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=3"
          btnText1="Compra Ora"
          btnLink1="./"
          btnColor="black"
        />

        <Quicklinks />

        {/* <PageHeader
          className="trovastore"
          text="La data per la consegna entro Natale degli ordini online è trascorsa. Prova in un LEGO® Store vicino a te!"
          position="center"
          size="large"
        />
        <div className="button-container">
          <ButtonCta>Trova uno store</ButtonCta>
        </div> */}
        <div className="ideeRegalo">
          <PageHeader
            text="Idee regalo popolari"
            position="left"
            size="large"
          />
          <Slider slides="four">
            <InjectProductCard2 />
          </Slider>
        </div>
      </div>

      <div className="setAmati">
        <PageHeader
          text="Trova altri set che tutti amano"
          position="left"
          size="large"
        />
        <Slider slides="four">
          <InjectArticles category={3} />
        </Slider>
      </div>

      <Banner
        size="large"
        textcolor="black"
        backgroundcolor="xmas"
        position="left"
        title="Scopri un'offerta"
        paragraph="Da omaggi con l'acquisto a sconti speciali, trova subito offerte e promozioni."
        imgMobile="https://www.lego.com/cdn/cs/set/assets/blt7fa4f6d8ebea01f1/Holiday-Landing-202212-Promo-Hero-Standard-Small.jpg?fit=crop&format=webply&quality=80&width=600&height=600&dpr=2"
        imgTablet="https://www.lego.com/cdn/cs/set/assets/bltdb9b63d7ff80e7a2/Holiday-Landing-202212-Promo-Hero-Standard-Medium.jpg?fit=crop&format=jpg&quality=80&width=900&height=350&dpr=3"
        imgDesktop="https://www.lego.com/cdn/cs/set/assets/bltf125a015f20df617/Holiday-Landing-202212-Promo-Hero-Standard-Large.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=3"
        btnText1="Scopri di più"
        btnLink1="./"
        btnColor="black"
      />
      <div className="background-natale">
        {/* <div className="header-feste">
          <PageHeader
            text="Le feste sono in arrivo"
            position="center"
            size="large"
          />
          <p>
            Questo è il momento migliore per iniziare a fare shopping per Natale
            e assicurarsi i regali da non perdere.
            <br />
            Qualunque siano i loro interessi, troverai la migliore selezione di
            set LEGO® per tutte le persone che ami.
          </p>
        </div> */}
        <PageHeader text="Scopri le idee regalo" position="left" size="large" />
        <Slider slides="four">
          <InjectProductCard2 />
        </Slider>
        <div className="sectionCustom1">
          <Slider slides="four">
            <InjectArticles category={4} />
          </Slider>
        </div>
      </div>
      <Banner
        size="large"
        textcolor="white"
        backgroundcolor="black"
        position="left"
        title="Rendi le feste ancora più divertenti"
        paragraph="Per far partecipare i bambini allo spirito natalizio, un gioco è il regalo perfetto!"
        imgMobile="https://www.lego.com/cdn/cs/set/assets/blt10cffa5ad9248669/Holiday-TVC-Seasonal-202211-Hero-Standard-Small.jpg?fit=crop&format=jpg&quality=80&width=600&height=600&dpr=2"
        imgTablet="https://www.lego.com/cdn/cs/set/assets/blt07a69c3fe2d7a067/Holiday-TVC-Seasonal-202211-Hero-Standard-Medium.jpg?fit=crop&format=jpg&quality=80&width=900&height=350&dpr=3"
        imgDesktop="https://www.lego.com/cdn/cs/set/assets/blt225eb8c4b442af42/Holiday-TVC-Seasonal-202211-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=3"
        imgLogo="https://www.lego.com/cdn/cs/set/assets/blt5fccba879ba76cc9/RTW_logo_neg_300w.png?format=png&height=60&dpr=2"
        imgBrand="https://www.lego.com/cdn/cs/set/assets/blt5fccba879ba76cc9/RTW_logo_neg_300w.png?format=png&height=60&dpr=2"
        btnText1="Compra ora"
        btnLink1="./"
        btnText2="Scopri"
        btnLink2="./"
        btnColor="white"
      />

      <PageHeader text="Consigliati per te" position="left" size="large" />
      <Slider slides="four">
        <InjectProductCard1 />
      </Slider>
      <br />
      <br />
      <br />

      <div className="background-natale-light">
        <PageHeader
          text="Trova ancora più ispirazione"
          position="left"
          size="large"
        />
        <Slider slides="four">
          <InjectArticles category={5} />
        </Slider>
        <div className="sectionCustom2">
          <PageHeader text="" position="left" size="large" />
          <Slider slides="four">
            <InjectArticles category={6} />
          </Slider>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Natale;
