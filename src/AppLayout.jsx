import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import Error from "./pages/Error";
const AppLayout = () => {
  const {
    windowDimensions: { width },
  } = useGlobalContext();
  return (
    <>
      {width <= 767 && (
        <>
          <Header />
          <main className="main">
            <ErrorBoundary fallback={<Error networkError={true} />}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </main>
          <Sidebar />
        </>
      )}
      {width > 767 && (
        <>
          <LeftSide />
          <main className="main-largescreen">
            <ErrorBoundary fallback={<Error networkError={true} />}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </main>
          <RightSide />
          <Sidebar />
        </>
      )}
    </>
  );
};

export default AppLayout;
