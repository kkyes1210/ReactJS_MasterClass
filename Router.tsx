import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/coins";
import Coin from "./routes/coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
