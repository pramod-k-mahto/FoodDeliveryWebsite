import { Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OrderOnline from "./pages/OrderOnline";
import Reservation from "./pages/Reservation";
import Menu from "./pages/Menu";
import Footer from "./pages/Footer";
import Checkout from "./pages/Checkout";
import EnterDetail from "./pages/EnterDetail";
import ReservationConform from "./pages/ReservationConform";
import ReservationCancel from "./pages/ReservationCancel";
import ShippingAddress from "./pages/ShippingAddress";
import Chef from "./pages/Chef";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}

        <Route path="/enterdetail" element={<EnterDetail />} />
        <Route path="/shippingAddress" element={<ShippingAddress />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
