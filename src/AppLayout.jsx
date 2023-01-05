import { Outlet } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
const AppLayout = () => {
  const {
    windowDimensions: { width },
  } = useGlobalContext();
  return (
    <>
      {width <= 767 && (
        <>
          <Header />
          <main className='main'>
            <Outlet />
          </main>
          <Sidebar />
        </>
      )}
      {width > 767 && (
        <>
          <LeftSide />
          <main className='main-largescreen'>
            <Outlet />
          </main>
          <RightSide />
          <Sidebar />
        </>
      )}
    </>
  );
};

export default AppLayout;
