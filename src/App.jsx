import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Gallery2 } from "./components/gallery2";
import { Contact } from "./components/contact";
import "./App.css";
import { Traditional } from "./components/traditional";
import { Blogs } from "./components/blogs";

const App = () => {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Traditional/>
      <Features/>
      <Gallery2/>
      <About/>
      <Gallery/>
      <Blogs/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default App;
