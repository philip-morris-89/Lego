import React from "react";
import PageHeader from "../../Ui/PageHeader/PageHeader";

function Headers() {
  return (
    <div>
      <PageHeader
        text="Header large text left aligned"
        position="left"
        size="large"
      />
      <PageHeader
        text="Header large text center aligned"
        position="center"
        size="large"
      />
      <PageHeader
        text="Header large text right aligned"
        position="right"
        size="large"
      />
      <PageHeader
        text="Header large text left aligned with buttons"
        position="left"
        size="large"
        btnText1="Button"
        btnText2="Button"
      />
      <PageHeader
        text="Header large text center aligned with buttons"
        position="center"
        size="large"
        btnText1="Button"
        btnText2="Button"
      />
      <PageHeader
        text="Header large text right aligned with buttons"
        position="right"
        size="large"
        btnText1="Button"
        btnText2="Button"
      />
    </div>
  );
}

export default Headers;
