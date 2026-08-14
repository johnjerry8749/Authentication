import Navbar from "../common/Navbar.jsx";
import Footer from "../common/Footer.jsx";
import Home from "../pages/Home.jsx";
import Shop from "./Shop.jsx";

const Allroutes = () => {
  return (
      <div className="">
        <Navbar />
        <Home />
        <Shop />
        <Footer />
      </div>          
  )
}

export default Allroutes
