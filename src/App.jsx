import { useState } from "react";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { Menu as Sandwich } from "react-feather";
import AboutMe from "./Pages/AboutMe";
import Toolkit from "./Pages/Toolkit";
import Connect from "./Pages/Connect";
import Menu from "./Components/Menu";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Sandwich
        className="fixed z-40 text-green-700 right-6 top-6"
        size={30}
        style={{ strokeWidth: "3" }}
        onClick={() => setShowMenu(true)}
      />
      {showMenu && <Menu closeMenu={setShowMenu} />}
      <Home />
      <Projects />
      <AboutMe />
      <Toolkit />
      <Connect />
    </div>
  );
};

export default App;
