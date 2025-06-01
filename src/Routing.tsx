import { Route, Routes } from "react-router-dom";
import NavbarMenu from "./common/navbar-menu";
import Home from "./features/home/home";
import Quote from "./features/quote/Quote";
import Services from "./features/services/services";
import backgroundImage from "/images/background.jpg";

function Routing() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <NavbarMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default Routing;
