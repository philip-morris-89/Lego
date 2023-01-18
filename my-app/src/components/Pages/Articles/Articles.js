import React from "react";
import InjectArticles from "../../Ui/InjectArticles/InjectArticles";
import PageHeader from "../../Ui/PageHeader/PageHeader";
import Slider from "../../Ui/Slider/Slider";

function Articles() {
  return (
    <div>
      <PageHeader text="Arrivi di questo mese" />
      <Slider slides="four">
        <InjectArticles category={0} />
      </Slider>
      <PageHeader text="I preferiti di questa settimana" />
      <Slider slides="three" disableDesktop="true">
        <InjectArticles category={1} />
      </Slider>
      <PageHeader text="Leggi tutto" />
      <Slider slides="four" disableDesktop="true">
        <InjectArticles category={2} />
      </Slider>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Articles;
