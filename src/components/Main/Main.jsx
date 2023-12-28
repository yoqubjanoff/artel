import React from "react";
import Hero from "../hero/hero";
import About from "../About/About";
import Advertising from "../advertising/advertising";
import Tavarlar from "../Tavarlar/Tavarlar";
import New from "../new/New";
import Uslugi from "../Uslugi/Uslugi";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <Hero />
      <About />
      <Advertising />
      <Tavarlar />
      <New />
      <Uslugi />
      <Footer />
    </div>
  );
};

export default Main;
