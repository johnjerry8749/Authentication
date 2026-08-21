import { Route, Routes } from "react-router-dom";
import AllHomecomponents from "./components/pages/AllHomecomponents.jsx";
import ProductDetails from "./components/pages/ProductDetails.jsx";
import Collections from "./components/pages/Collections.jsx";
import Contact from "./components/pages/Contact.jsx";
import About from "./components/pages/About.jsx";
import Cart from "./components/pages/Cart.jsx";
import Login from "./components/pages/Login.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<AllHomecomponents />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
