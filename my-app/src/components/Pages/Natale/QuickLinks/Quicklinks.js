import React from "react";
import QuickLink from "../../../Ui/QuickLink/QuickLink";
import "./quicklinks.css";

function Quicklinks() {
  return (
    <div className="quickLinks" data-skeleton="true">
      <section data-container="large">
        <ul>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt5037a85289da5d49/Holiday2022-Landing-202208-Quicklink1.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Novità del 2023"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blteffa01276a119729/Holiday2022-Landing-202208-Quicklink2.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Set esclusivi"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/bltcf685623bc1adeca/Holiday-Landing-202212-Sale-Quicklink.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Offerte"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt867167ce665095ac/Holiday-Landing-202209-Quicklink14.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="LEGO® Friends"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/bltf62973b700cf20b3/Holiday2022-Landing-202208-Quicklink8.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Capodanno lunare"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/bltfab91ed1a007776a/Holiday2022-Landing-202208-Quicklink5.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Minecraft™"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt41ab71f33bee1949/Holiday2022-Landing-202208-Quicklink4.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Difficile da trovare"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt7dd580282f96f121/Holiday2022-Landing-202208-Quicklink7.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="VIP"
              link="./"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Quicklinks;
