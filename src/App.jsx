import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { lazy, Suspense } from "react";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import "./css/mobile.css";

// const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='profile' element={<Profile />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
