import React from "react";
import ButtonCta from "../ButtonCta/ButtonCta";
import "./pageHeader.css";

function PageHeader({
  text = "Page header title",
  position = "left",
  size = "large",
  btnText1,
  btnText2,
}) {
  return (
    <header className="pageHeader" data-position={position} data-size={size}>
      <div data-container="large">
        <h2>{text}</h2>
        {btnText1 && (
          <ul>
            <li>
              <ButtonCta
                size="small"
                shape="pill"
                theme="outline"
                color="black"
              >
                {btnText1}
              </ButtonCta>
            </li>
            {btnText2 && (
              <li>
                <ButtonCta
                  size="small"
                  shape="pill"
                  theme="solid"
                  color="black"
                >
                  {btnText2}
                </ButtonCta>
              </li>
            )}
          </ul>
        )}
      </div>
    </header>
  );
}

export default PageHeader;
