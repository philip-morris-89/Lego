import React from "react";
import Banner from "../../Ui/Banner/Banner";

function Banners() {
  return (
    <div>
      <Banner
        size="large"
        textcolor="white"
        backgroundcolor="black"
        position="left"
        title="Banner title Lorem ipsum dolor amet ipsum."
        paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, ducimus!"
        imgMobile="https://www.lego.com/cdn/cs/set/assets/blt8a95702fdb4260d8/75331-Exclusive-202210-VIP-Hero-Standard-Small.jpg?fit=crop&format=jpg&quality=80&width=600&height=600&dpr=2"
        imgTablet="https://www.lego.com/cdn/cs/set/assets/bltf8f58f8e70b40985/75331-Exclusive-202210-VIP-Hero-Standard-Medium.jpg?fit=crop&format=jpg&quality=80&width=900&height=350&dpr=3"
        imgDesktop="https://www.lego.com/cdn/cs/set/assets/bltd44334316ded064e/75331-Exclusive-202210-VIP-Hero-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=3"
        imgLogo="https://www.lego.com/cdn/cs/set/assets/bltfb987f8b1414454f/starWars_logo_black_stroke_300w.png?format=png&height=60&dpr=2"
        imgBrand="https://www.lego.com/cdn/cs/set/assets/bltfb987f8b1414454f/starWars_logo_black_stroke_300w.png?format=png&height=60&dpr=2"
        btnText1="Button 1"
        btnLink1="./"
        btnText2="Button 2"
        btnLink2="./"
        btnColor="white"
      />

      {/* HOME TOP */}

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

      {/* HOME BOTTOM */}

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
        btnText1="Compra Ora"
        btnLink1="./"
        btnColor="black"
      />

      {/* XMAS TOP */}

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
    </div>
  );
}

export default Banners;
