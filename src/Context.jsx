import { createContext, useContext, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const AppContext = createContext();

const getWindowDimensions = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const type = () => {
    return (
      <Typewriter
        options={{ loop: true }}
        onInit={(str) =>
          str
            .typeString("I am Onos")
            .pauseFor(2000)
            .deleteChars(7)
            .typeString("love to code")
            .pauseFor(800)
            .start()
        }
      />
    );
  };
  return (
    <AppContext.Provider
      value={{
        isNavOpen,
        toggleNav,
        closeNav,
        windowDimensions,
        type,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
