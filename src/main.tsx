import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Hypocrisy from "./pages/Hypocrisy";

gsap.registerPlugin(ScrollTrigger);

// biome-ignore lint/style/noNonNullAssertion: root element is always present
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="games/hypocrisy" element={<Hypocrisy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
