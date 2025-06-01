import { Route, Routes } from "react-router-dom";
import Home from "./features/home/home";
import Quote from "./features/quote/Quote";
import Services from "./features/services/services";
import backgroundImage from "/images/background.jpg";

function Routing() {
  return (
    <div
      className="h-[calc(100vh-6.8rem)] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default Routing;
