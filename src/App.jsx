import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Offers } from "./components/offers";
import { lazy, Suspense } from "react";

const Offers = lazy(() => import("./components/Offers"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/:slug"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Offers />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
