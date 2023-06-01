import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import AppLayout from "./AppLayout";
import Error from "./pages/Error";
import "./css/mobile.css";

const Home = lazy(() => Wait(500).then(() => import("./pages/Home")));
const Profile = lazy(() => Wait(500).then(() => import("./pages/Profile")));
const Portfolio = lazy(() => Wait(500).then(() => import("./pages/Portfolio")));
const Contact = lazy(() => Wait(500).then(() => import("./pages/Contact")));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
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

function Wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export default App;
