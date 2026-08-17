import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Newsletter from "./Newsletter";

function About() {
  return (
    <div>
      <Navbar />
      <div className="border border-danger mb-4 p-2">
        <div className="d-flex justify-content-center mt-4 align-items-center">
        <h3 className="mt-3 text-center fw-bold text-muted">ABOUT <span className="text-dark">US</span></h3>
        <div className="mt-3  " style={{width:"30px", height:"2px", backgroundColor:"black"}}></div>
        </div>

      </div>
        
    <Newsletter />    
    <Footer />
    </div>
  );
}

export default About;
