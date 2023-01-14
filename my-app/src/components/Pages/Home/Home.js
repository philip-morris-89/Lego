import React from "react";
import Banner from "../../Ui/Banner/Banner";
import Quicklinks from "../../Ui/QuickLinks/Quicklinks";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Quicklinks />
    </div>
  );
}

export default Home;
