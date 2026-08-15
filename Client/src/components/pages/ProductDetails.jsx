import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const ProductDetails = () => {
  return (
    <div>
      <Navbar />
      <div className=" border border-dark mx-3">
        <div className="row p-2 mx-4 d-flex justify-content-center gap-2 align-items-center">
          {/* Side Photos */}
          <div className="col-12 col-md-12 col-lg-1 border border-danger p-2 text-dark "></div>
          {/* Big Photo */}
          <div className="col-12 col-md-12 col-lg-4 border border-danger p-2 text-dark "></div>
          {/* Photo Detials */}
          <div className="col-12 col-md-12 col-lg-5 border border-danger p-2 text-dark "></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
