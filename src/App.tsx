import React from "react";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Section from "./components/Section";
import Technologies from "./components/Technologies";
import Service from "./components/Service";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Section level="about">
        <About />
      </Section>
      <Section level="technologies">
        <Technologies />
      </Section>
      <Section level="services">
        <Service />
      </Section>
    </div>
  );
}

export default App;
