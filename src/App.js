import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  const [theme, setTheme] = useState("dark-mode");
  const toogleTheme = () => {
    theme === "light-mode" ? setTheme("dark-mode") : setTheme("light-mode");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="App">
      <Header theme={theme} toogleTheme={toogleTheme} />
      <About theme={theme} toogleTheme={toogleTheme} />
      <Skills theme={theme} toogleTheme={toogleTheme} />
      <Work theme={theme} toogleTheme={toogleTheme} />
      <Contact theme={theme} toogleTheme={toogleTheme} />
      <Footer theme={theme} toogleTheme={toogleTheme} />
    </div>
  );
}

export default App;
