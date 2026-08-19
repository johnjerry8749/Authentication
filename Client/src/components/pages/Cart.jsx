import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Productimg2 from "../../assets/front/p_img49.png";

const Cart = () => {
  return (
    <div>
      <Navbar />

      <div className="container-fluid px-3 px-md-4 px-lg-5 py-4">
        <div className="row justify-content-center g-4">
          {/* YOUR CART */}
          <div className="col-12 col-lg-6">
            <div className="d-flex align-items-center gap-2">
              <h3 className="mt-3 text-start fw-bold text-muted">
                YOUR <span className="text-dark">CART</span>
              </h3>

              <div
                className="bg-dark flex-shrink-0"
                style={{
                  width: "30px",
                  height: "2px",
                }}
              ></div>
            </div>

            {/* CART UI DISPLAY HERE */}
            <div className="w-100">
              {/* TOP BORDER */}
              <div className="border-top"></div>

              <div className="py-4">
                <div className="row align-items-center g-3">
                  {/* PRODUCT IMAGE */}
                  <div className="col-3 col-sm-2 col-md-2">
                    <img
                      src={Productimg2}
                      alt=""
                      className="img-fluid"
                      style={{
                        height: "100px",
                        width: "80px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* PRODUCT NAME + PRICE + SIZE */}
                  <div className="col-9 col-sm-5 col-md-6">
                    <h5 className="mb-6 fw-normal">
                      Men Tapered Fit Flat-Front Trousers
                    </h5>

                    <div className="d-flex align-items-center gap-4">
                      {/* PRICE */}
                      <p className="mb-0 fs-6">$63</p>

                      {/* SIZE */}
                      <div
                        className="border d-flex align-items-center justify-content-center"
                        style={{
                          width: "42px",
                          height: "30px",
                        }}
                      >
                        <p className="mb-0">L</p>
                      </div>
                      <div
                        className="border d-flex align-items-center"
                        style={{
                          height: "50px",
                          width: "60px",
                        }}
                      >
                        <p className="mb-0 ps-3 fs-6">1</p>
                      </div>
                      <div className="col-6 col-sm-2 col-md-1 text-end ps-5">
                        <i
                          className="ti ti-trash"
                          style={{
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM BORDER */}
              <div className="border-bottom"></div>
            </div>
          </div>

          {/* CART TOTALS */}
          <div className="col-12 col-lg-6">
            <div className="mt-4 mt-lg-5 w-100">
              {/* CART TOTALS HEADING */}
              <div className="d-flex align-items-center gap-2 gap-md-3 mb-4">
                <h3 className="mb-0 fw-normal fs-2 text-nowrap">
                  <span className="text-muted">CART</span>{" "}
                  <span className="text-dark">TOTALS</span>
                </h3>

                <div
                  className="bg-dark flex-shrink-0"
                  style={{
                    width: "50px",
                    height: "2px",
                  }}
                ></div>
              </div>

              {/* SUBTOTAL */}
              <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                <p className="mb-0 fs-5">Subtotal</p>

                <p className="mb-0 fs-5">$ {}</p>
              </div>

              {/* SHIPPING */}
              <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                <p className="mb-0 fs-5">Shipping Fee</p>

                <p className="mb-0 fs-5">$ {}</p>
              </div>

              {/* TOTAL */}
              <div className="d-flex justify-content-between align-items-center py-3">
                <p className="mb-0 fs-5 fw-bold">Total</p>

                <p className="mb-0 fs-5 fw-bold">$ {}</p>
              </div>

              {/* CHECKOUT BUTTON */}
              <div className="col-6 align-self-end d-flex justify-content-end mt-4">
                <button
                  className="btn btn-dark rounded-0 p-3 w-100 w-lg-auto"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
