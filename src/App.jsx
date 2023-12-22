import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Nuclear } from "./components/Nuclear";
import { TheAveroDifference } from "./components/TheAveroDifference";
import { Careers } from "./components/Careers";
import { OurWork } from "./components/OurWork";
import { Gallery2 } from "./components/gallery2";
import { Footer } from "./components/Footer";
import "./App.css";
import { Traditional } from "./components/traditional";
import { Blogs } from "./components/Blogs";

const App = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Traditional/>
      <Nuclear/>
      <Gallery2/>
      <TheAveroDifference/>
      <OurWork/>
      <Blogs/>
      <Careers/>
      <Footer/>
    </div>
  );
};

export default App;
