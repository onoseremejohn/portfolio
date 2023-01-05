// import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../Context";
import HomeLarge from "./LargeScreen/HomeLarge";
import HomeMobile from "./MobileScreen/HomeMobile";
const Home = () => {
  const {
    windowDimensions: { width },
  } = useGlobalContext();
  return (
    <>
      {width <= 767 && (
        <HomeMobile/>
      )}
      {width > 767 && <HomeLarge />}
    </>
  );
};

export default Home;
