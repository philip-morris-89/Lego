import React from "react";
import Banner from "../../Ui/Banner/Banner";
import PageHeader from "../../Ui/PageHeader/PageHeader";
import Quicklinks from "../../Ui/QuickLinks/Quicklinks";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Quicklinks />
      <PageHeader text="Page header title" position="left" size="large" />
    </div>
  );
}

export default Home;
