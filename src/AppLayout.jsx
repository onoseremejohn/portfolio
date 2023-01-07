import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Loader from "./components/Loader";
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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
          <Sidebar />
        </>
      )}
      {width > 767 && (
        <>
          <LeftSide />
          <main className='main-largescreen'>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
          <RightSide />
          <Sidebar />
        </>
      )}
    </>
  );
};

export default AppLayout;
