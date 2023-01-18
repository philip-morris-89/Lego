import React from "react";
import "./slider.css";

function Slider({ slides = "four", disableDesktop = "false", children }) {
  return (
    <div
      className="slider"
      data-slides={slides}
      data-disabled-desktop={disableDesktop}
    >
      <section data-container="large">
        <ul className="slider-ul">{children}</ul>
      </section>
    </div>
  );
}

export default Slider;
