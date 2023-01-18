import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Index() {
  return (
    <div className="index">
      <h1>Index</h1>
      <p>Pages:</p>
      <ul>
        <li>
          <Link to="/designsystemlibrary">Design System Library</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/banners">Banners</Link>
        </li>
        <li>
          <Link to="/headers">Headers</Link>
        </li>
        <li>
          <Link to="/sliders">Sliders</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
