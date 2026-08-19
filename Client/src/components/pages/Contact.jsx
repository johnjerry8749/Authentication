import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Newsletter from "./Newsletter";
import Contactimg from "../../assets/front/contact_img.png"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className=" mb-4 p-2">
        <div className="d-flex justify-content-center mt-4 align-items-center">
          <h3 className="mt-3 text-center fw-bold text-muted">
            CONTACT <span className="text-dark">US</span>
          </h3>
          <div
            className="mt-3  "
            style={{ width: "30px", height: "2px", backgroundColor: "black" }}
          ></div>
        </div>
        <div className="row border border-danger mt-4 m-auto p-2 d-flex justify-content-center align-items-center gap-2">
          <div className="col-10 col-lg-5 border  border-danger p-2">
            <img src={Contactimg} alt="" className="p-2" style={{width:"100%", height:"100%"}} />
          </div>
          <div className="col-10 col-lg-5 border border-danger p-2"></div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;
