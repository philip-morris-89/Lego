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
        text="header small text left aligned"
        position="left"
        size="small"
      />
      <PageHeader
        text="Header large text center aligned"
        position="center"
        size="large"
      />
      <PageHeader
        text="header small text center aligned"
        position="center"
        size="small"
      />
      <PageHeader
        text="Header large text right aligned"
        position="right"
        size="large"
      />
      <PageHeader
        text="Header small text right aligned"
        position="right"
        size="small"
      />
      <PageHeader
        text="Header large text left aligned with buttons"
        position="left"
        size="large"
        btnText1="Button 1"
        btnText2="Button 2"
      />
      <PageHeader
        text="Header small text left aligned with buttons"
        position="left"
        size="small"
        btnText1="Button 1"
        btnText2="Button 2"
      />
      <PageHeader
        text="Header large text center aligned with buttons"
        position="center"
        size="large"
        btnText1="Button 1"
        btnText2="Button 2"
      />
      <PageHeader
        text="Header small text center aligned with buttons"
        position="center"
        size="small"
        btnText1="Button 1"
        btnText2="Button 2"
      />
      <PageHeader
        text="Header large text right aligned with buttons"
        position="right"
        size="large"
        btnText1="Button 1"
        btnText2="Button 2"
      />
      <PageHeader
        text="Header small text right aligned with buttons"
        position="right"
        size="small"
        btnText1="Button 1"
        btnText2="Button 2"
      />
    </div>
  );
}

export default Headers;
