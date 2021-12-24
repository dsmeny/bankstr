import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Withdrawal from "./pages/Withdrawal";
import Deposit from "./pages/Deposit";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Withdraw-money" element={<Withdrawal />} />
      <Route path="/Deposit-money" element={<Deposit />} />
    </Routes>
  );
};

export default App;
