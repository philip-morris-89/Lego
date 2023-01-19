import React from "react";
import Banner from "../../Ui/Banner/Banner";
import Footer from "../../Ui/Footer/Footer";
import InjectArticles from "../../Ui/InjectArticles/InjectArticles";
import InjectProductCard from "../../Ui/InjectProduct/InjectProduct";
import PageHeader from "../../Ui/PageHeader/PageHeader";
import Quicklinks from "../../Ui/QuickLinks/Quicklinks";
import Slider from "../../Ui/Slider/Slider";
import SpotlightCard from "../../Ui/SpotlightCard/SpotlightCard";
import Navbar from "../../Ui/Navbar/NavBar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner
        size="large"
        textcolor="black"
        backgroundcolor="orange"
        position="right"
        title="Inizia qualcosa di nuovo"
        paragraph="Che tu voglia scoprire cosa desideri davvero nella vita o imparare a praticare la gentilezza, questi nuovi set LEGO® sono pronti all'azione."
        imgMobile="https://www.lego.com/cdn/cs/set/assets/blt52bb639fa70f0714/1812-Novelty-Homepage-202301-Hero-Standard-Small.jpg?fit=crop&format=jpg&quality=80&width=600&height=600&dpr=2"
        imgTablet="https://www.lego.com/cdn/cs/set/assets/blt6206e920f291a8a1/1812-Novelty-Homepage-202301-Hero-Standard-Medium.jpg?fit=crop&format=webply&quality=80&width=900&height=351&dpr=3"
        imgDesktop="https://www.lego.com/cdn/cs/set/assets/blta9f91fcf1dfd9551/1812-Novelty-Homepage-202301-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=3"
        btnText1="Compra Ora"
        btnLink1="./"
        btnColor="black"
      />

      <Quicklinks />

      <PageHeader text="Consigliati per te" position="left" size="large" />
      <Slider slides="four">
        <InjectProductCard />
      </Slider>
      <PageHeader text="Arrivi di questo mese" position="left" size="large" />
      <Slider slides="four">
        <InjectArticles />
      </Slider>
      <PageHeader text="In evidenza..." position="left" size="large" />
      <div data-container="large">
        <ul className="inEvidenza-container">
          <li>
            <SpotlightCard />
          </li>
          <li>
            <SpotlightCard
              imgDesktop="https://www.lego.com/cdn/cs/set/assets/blt0f4fe6d641a4346b/75347-T1-202301-PS-Block-Mixed-Large.jpg?fit=crop&format=jpg&quality=80&width=650&height=720&dpr=2"
              imgMobile="https://www.lego.com/cdn/cs/set/assets/blt01707fdb53e106c1/75347-T1-202301-PS-Block-Mixed-Mobile.jpg?fit=crop&format=jpg&quality=80&width=375&height=260&dpr=1.5"
              logo="https://www.lego.com/cdn/cs/set/assets/blt3ef553a3a4357545/starWars_logo_neg_300w.png?format=png&height=60&dpr=1"
              title="Dai vita ad avventure galattiche"
              subtitle="Ricrea battaglie classiche con i nuovi set LEGO®."
            />
          </li>
        </ul>
      </div>
      <PageHeader text="Set in evidenza" position="left" size="large" />
      <Slider slides="four">
        <InjectProductCard />
      </Slider>
      <PageHeader
        text="I preferiti di questa settimana"
        position="left"
        size="large"
      />
      <Slider slides="three" disableDesktop="true">
        <InjectArticles category={1} />
      </Slider>

      <br />
      <br />
      <br />
      <br />

      <Banner
        size="large"
        textcolor="black"
        backgroundcolor="gray"
        position="left"
        title="Restiamo in contatto"
        paragraph="Iscriviti per ricevere le comunicazioni di marketing LEGO® e scoprire per primo i nuovi set, gli aggiornamenti sui prodotti, le promozioni e molto altro"
        imgMobile="https://www.lego.com/cdn/cs/set/assets/blt3fb3a7afdd5a6061/Grey-Email-Signup-Hero-Mobile.jpg?fit=crop&format=webply&quality=80&width=600&height=600&dpr=2"
        imgTablet="https://www.lego.com/cdn/cs/set/assets/blteaf8164c0008b6ba/Grey-Email-Signup-Hero-Medium-1.jpg?fit=crop&format=webply&quality=80&width=900&height=350&dpr=3"
        imgDesktop="https://www.lego.com/cdn/cs/set/assets/blt8c7ec696474ed641/Grey-Email-Signup-Hero-Standard-1.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=3"
        btnText1="Iscriviti"
        btnLink1="./"
        btnColor="black"
      />

      <PageHeader text="Leggi tutto" position="left" size="large" />
      <Slider slides="four" disableDesktop="true">
        <InjectArticles category={2} />
      </Slider>

      <Footer />
    </div>
  );
}

export default Home;
