import React from "react";
import Starter from "./pages/Starter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Search from "./pages/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Starter />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<>pro</>} />
      <Route path="/shopcart" element={<>shop</>} />
      <Route path="/ordercallback" element={<>orderc</>} />
      <Route path="/orderstatus" element={<>orders</>} />
    </Routes>
  );
};

export default App;
