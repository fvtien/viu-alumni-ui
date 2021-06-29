import React from "react";
import TopBar from "./top-bar";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

const MainLayout = props => {
  const { children } = props;
  return (
    <>
      <TopBar />
      <Header>
        <Navbar />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
