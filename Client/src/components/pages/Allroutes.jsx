import Navbar from "../common/Navbar.jsx";
import Footer from "../common/Footer.jsx";
import Home from "../pages/Home.jsx";
import Shop from "./Shop.jsx";
import Newsletter from "./Newsletter.jsx";

const Allroutes = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Shop />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Allroutes;
