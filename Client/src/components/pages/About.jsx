import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Newsletter from "./Newsletter";
import Aboutimg from "../../assets/front/about_img.png";

function About() {
  return (
    <div>
      <Navbar />
      <div className="mb-4 p-2">
        <div className="d-flex justify-content-center mt-4 align-items-center">
          <h3 className="mt-3 text-center fw-bold text-muted">
            ABOUT <span className="text-dark">US</span>
          </h3>
          <div
            className="mt-3  "
            style={{ width: "30px", height: "2px", backgroundColor: "black" }}
          ></div>
        </div>
        <div className="row border border-danger mt-4 m-auto p-2 d-flex justify-content-center align-items-center gap-2">
          <div className="col-10 col-lg-5 border border-danger p-2">
            <img
              src={Aboutimg}
              alt=""
              className="p-2"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-10 col-lg-5 border border-danger p-2">
            <p className="fs-5 p-2">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="fs-5 p-2">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <h5>Our Mission</h5>
            <p className="fs-5 p-2">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default About;
