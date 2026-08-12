import { Link } from "react-router-dom";
import Logo from "../../assets/front/logo.png";
import cart_icon from "../../assets/front/cart_icon.png";
import user_icon from "../../assets/front/profile_icon.png";
import search_icon from "../../assets/front/search_icon.png";
import menu_icon from "../../assets/front/menu_icon.png";

const Navbar = () => {
  return (
    <div className="border border-danger bg-danger text-light text-right ">
      <div className="col-12">
        <p className="mb-0 ps-3">+1234567890</p>
        <p className="mb-0 ps-3">support@yourstore.com</p>
      </div>
      <div className="bg-white row d-flex justify-content-center  align-items-center m-auto mt-0">
        <div className="container">
          <div className="row align-items-center d-flex gap-3 pe-2 justify-content-center">
            <div className="col-3 py-3">
              <div className="image-container ps-2 mt-2">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "200px", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-4 fs-4  d-flex gap-4 p-4 justify-content-start ">
              <Link to="/" className="text-decoration-none text-dark">
                Home
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
                Collection
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
                About
              </Link>
              <Link to="/" className="text-decoration-none text-dark">
                Contact
              </Link>
            </div>
            <div className="col-3 border border-danger d-flex gap-3 p-2 justify-content-end">
              <div className="image-container ps-2 mt-2">
                <img
                  src={search_icon}
                  alt="search"
                  style={{ width: "25px", height: "auto" }}
                />
              </div>
              <div className="image-container ps-2 mt-2">
                <img
                  src={user_icon}
                  alt="user"
                  style={{ width: "25px", height: "auto" }}
                />
              </div>
              <div className="image-container ps-2 mt-2">
                <img
                  src={cart_icon}
                  alt="cart"
                  style={{ width: "25px", height: "auto" }}
                />
              </div>
              <div className="image-container ps-2 mt-2">
                <img
                  src={menu_icon}
                  alt="menu"
                  style={{ width: "25px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
