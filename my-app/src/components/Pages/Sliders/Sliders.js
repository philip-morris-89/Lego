import React from "react";
import ArticleCard from "../../Ui/ArticleCard/ArticleCard";
import Slider from "../../Ui/Slider/Slider";
import InjectProductCard from "../../Ui/InjectProduct/InjectProduct";

function Sliders() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Slider slides="four">
        <InjectProductCard />
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="three">
        <InjectProductCard />
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="four">
        <li className="slider-li">
          <ArticleCard />
        </li>
        <li className="slider-li">
          <ArticleCard />
        </li>
        <li className="slider-li">
          <ArticleCard />
        </li>
        <li className="slider-li">
          <ArticleCard />
        </li>
        <li className="slider-li">
          <ArticleCard />
        </li>
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="three">
        <li className="slider-li">
          <ArticleCard />
        </li>
        <li className="slider-li">
          <ArticleCard />
        </li>
        <li className="slider-li">
          <ArticleCard />
        </li>
        <li className="slider-li">
          <ArticleCard />
        </li>
      </Slider>
      <br />
      <br />
      <br />
      <Slider slides="two" disableDesktop="true">
        <li className="slider-li">
          <ArticleCard />
        </li>
        <li className="slider-li">
          <ArticleCard />
        </li>
      </Slider>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Sliders;
