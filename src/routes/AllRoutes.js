import { Route, Routes } from "react-router-dom"
import { HomePage } from '../pages';

import { WithProducts } from '../pages/Cart';
import { Gears } from "../pages/gears";
import { LogIn, Register } from "../auth";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <HomePage /> }></Route>
      <Route path="/cart" element={ <WithProducts /> }></Route>
      <Route path="/gears" element={ <Gears /> }></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </>
  )
}
