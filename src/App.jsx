import React from "react";
import Starter from "./pages/Starter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Search from "./pages/Search";
import { WithNavbar, WithoutNavbar } from "./components/utils/WithNavBar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<>pro</>} />
          <Route path="/orders" element={<>pro</>} />
          <Route path="/about" element={<>pro</>} />
          <Route path="/ordercallback" element={<>orderc</>} />
          <Route path="/orderstatus" element={<>orders</>} />
        </Route>
        <Route element={<WithoutNavbar />}>
          <Route path="/" element={<Starter />} />
          <Route path="/shopcart" element={<>shop</>} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
