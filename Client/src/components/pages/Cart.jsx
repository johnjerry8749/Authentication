import Footer from "../common/Footer"
import Navbar from "../common/Navbar"

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="row p-2 m-auto">
        <div className=" row mx-auto border border-dark d-flex gap-2 justify-content-center align-items-center p-2">
          <div className="col-12 col-md-10 col-lg-5 p-2 border border-danger">
            <div className="d-flex  align-items-center">
              <h3 className="mt-3 text-start fw-bold text-muted">
            YOUR <span className="text-dark">CART</span>
          </h3>
          <div
            className="mt-2"
            style={{ width: "30px", height: "2px", backgroundColor: "black" }}
          ></div>
            </div>
          {/* CART UI DISPLAY HERE */}
          <div className="row m-auto border border-danger p-2"></div>
          </div>
          <div className="col-12 col-md-10 col-lg-5 p-2 border border-danger"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
