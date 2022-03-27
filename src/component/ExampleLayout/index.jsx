import React from "react";
import TheHeader from "./TheHeader";
import TheBanner from "./TheBanner";
import ServiceList from "./ServiceList";
import Footer from "./Footer";
function ExampleLayout() {
  return <div>
    <TheHeader></TheHeader>
    <TheBanner></TheBanner>
    <ServiceList></ServiceList>
    <Footer></Footer>
  </div>;
}

export default ExampleLayout;
