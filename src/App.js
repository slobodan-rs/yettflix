import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import { Loader } from "./components/Loader";
import Show from "./components/Show";
import GlobalStyle from "./components/styledcomponents/GlobalStyle";
/* const LandingPage = lazy(() => import("./components/LandingPage")); */

const App = () => {
  const [selectedShow, setSelectedShow] = useState([]);

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyle />
      <Router>
        <Header setSelectedShow={setSelectedShow} />
        <Routes>
          <Route
            exact
            path="/"
            element={<LandingPage setSelectedShow={setSelectedShow} />}
          ></Route>
          <Route
            path="/show/:id"
            element={<Show selectedShow={selectedShow} />}
          ></Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
