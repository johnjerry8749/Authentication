import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Productimg2 from "../../assets/front/p_img49.png";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-3">
        <div className="row p-2 mx-4 d-flex justify-content-center gap-2 align-items-center">
          {/* Side Photos */}
          <div className="col-12 col-md-12 col-lg-1 d-flex d-md-flex justify-content-center d-lg-block gap-1 p-2 text-dark ">
            <div
              className="col-3 col-md-3 col-lg-12 border border-dark mb-2"
              style={{ height: "150px", width: "110px" }}
            >
              <img
                src={Productimg2}
                alt=""
                style={{ height: "140px", width: "100px" }}
              />
            </div>
            <div
              className="col-3 col-md-3 col-lg-12 border border-dark mb-2"
              style={{ height: "150px", width: "110px" }}
            >
              <img
                src={Productimg2}
                alt=""
                style={{ height: "140px", width: "100px" }}
              />
            </div>
            <div
              className="col-3 col-md-3 col-lg-12 border border-dark mb-2"
              style={{ height: "150px", width: "110px" }}
            >
              <img
                src={Productimg2}
                alt=""
                style={{ height: "140px", width: "100px" }}
              />
            </div>
            <div
              className="col-3 col-md-3 col-lg-12 border border-dark mb-2"
              style={{ height: "150px", width: "110px" }}
            >
              <img
                src={Productimg2}
                alt=""
                style={{ height: "140px", width: "100px" }}
              />
            </div>
          </div>
          {/* Big Photo */}
          <div
            className="col-12 col-md-12 col-lg-4 border border-danger p-2 text-dark"
            style={{ height: "550px" }}
          >
            {" "}
            <img
              src={Productimg2}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          {/* Photo Detials */}
          <div
            className="col-12 col-md-12 col-lg-5 border border-danger p-2 text-dark"
            style={{ height: "650px" }}
          >
            <h3 className="fw-muted fs-4 p-2">Women Round Neck Cotton Top</h3>
            <div className="p-2">
              *****<span>122</span>
            </div>
            <p className="text-muted fs-2">$40</p>
            <p>
              A lightweight, usually knitted, pullover shirt, close-fitting and
              with a round neckline and short sleeves, worn as an undershirt or
              outer garment.
            </p>
            <h3>Select Size</h3>
            <div className="border border-danger p-2 d-flex justify-content-center align-items-center" style={{width:"50%"}}>
              <div className="border border-danger" style={{}}></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
