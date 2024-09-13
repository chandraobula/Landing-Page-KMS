import React from "react";
import LandingPage from "./components/LandingPage";
import SearchPage from "./components/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdvSearch from "./components/AdvSearch";
import ResultsPage from "./components/ResultsPage";
import Chatgpt from "./components/Chatgpt";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/resultspage" element={<ResultsPage />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/searchpage" element={<SearchPage />}></Route>
          <Route path="/advsearch" element={<AdvSearch />}></Route>
          <Route path="/chatgpt" element={<Chatgpt />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <LandingPage /> */}
      {/* <SearchPage /> */}
    </div>
  );
};

export default App;
