import React from "react";
import QuickLink from "../QuickLink/QuickLink";
import "./quicklinks.css";

function Quicklinks() {
  return (
    <div className="quickLinks" data-skeleton="true">
      <section data-container="large">
        <ul>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt413a72c966de5019/1812-Novelty-Homepage-202301-Quicklink.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Novità del 2023"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt985c185e9456faed/Generic-Site-Wave-1-Exclusive-202208-Quicklink.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Set esclusivi"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt000ef33faa9bca80/offers_Promos-Home-2021-Quicklink.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Offerte"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/bltca4c0ba542103743/Friends-2HY-Primary-PLP-202209-Quicklink.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="LEGO® Friends"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/bltf9b17b60653cf537/1830-Home-202301-Quicklink.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Capodanno lunare"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt944f15f94625732f/21171-202106-Quicklink.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Minecraft™"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt324aefebb7df1ed0/21325-Quicklink.png?fit=crop&format=png&width=80&height=65&dpr=2"
              titolo="Difficile da trovare"
              link="./"
            />
          </li>
          <li>
            <QuickLink
              linkImmagine="https://www.lego.com/cdn/cs/set/assets/blt3c435fefe7e0b613/VIPSoftLaunch-Quicklink.jpg?fit=crop&format=jpg&quality=80&width=80&height=65&dpr=2"
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
