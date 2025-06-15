import React from "react";
import Starter from "./pages/Starter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Search from "./pages/Search";
import { WithNavbar, WithoutNavbar } from "./components/utils/WithNavBar";
import Profile from "./pages/Profile";
import ShopCart from "./pages/ShopCart";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<>orders</>} />
          <Route path="/about" element={<>about</>} />
          <Route path="/ordercallback" element={<>orderc</>} />
          <Route path="/orderstatus" element={<>orders</>} />
        </Route>
        <Route element={<WithoutNavbar />}>
          <Route path="/" element={<Starter />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shopcart" element={<ShopCart />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
