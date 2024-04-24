import { Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OrderOnline from "./pages/OrderOnline";
import Reservation from "./pages/Reservation";
import Menu from "./pages/Menu";
// import Checkout from "./pages/Checkout";
import EnterDetail from "./pages/EnterDetail";
// import ReservationConform from "./pages/ReservationConform";
// import ReservationCancel from "./pages/ReservationCancel";
import ShippingAddress from "./pages/ShippingAddress";
import Chef from "./pages/Chef";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Protected from "./pages/Protected";
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Protected Component={Home}  />} />
        <Route path="/navbar" element={<Protected Component={NavBar}  />} />
        <Route path="/about" element={<Protected Component={About}  />} />
        <Route path="/contact" element={<Protected Component={Contact}  />} />
        <Route path="/orderOnline" element={<Protected Component={OrderOnline}  />} />
        <Route path="/reservation" element={<Protected Component={Reservation} />} />
        <Route path="/menu" element={<Protected Component={Menu}  />} />
        <Route path="/enterdetail" element={<Protected Component={EnterDetail}  />} />
        <Route path="/shippingAddress" element={<Protected Component={ShippingAddress}  />} />
        <Route path="/chef" element={<Protected Component={Chef}  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
