import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Detail } from "../pages/Detail";
import { Favorite } from "../pages/Favorite";
import { Cart } from "../pages/Cart";
import { Order } from "../pages/Order";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/favorites" element={<Favorite />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Order />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}