import "./App.scss";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import BurgerMenu from "./components/burger-menu";
import IntroSection from "./components/intro-section";
import Content from "./components/content";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Header onMenuClick={toggleMenu} />
      <BurgerMenu isOpen={isOpen} backgroundClick={toggleMenu} />
      <main>
        <IntroSection />
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
