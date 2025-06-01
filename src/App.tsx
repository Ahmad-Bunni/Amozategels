import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routing from "./Routing";
import NavbarMenu from "./common/navbar-menu";

function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routing />
    </BrowserRouter>
  );
}
export default App;
