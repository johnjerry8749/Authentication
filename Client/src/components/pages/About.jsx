import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Newsletter from "./Newsletter";

function About() {
  return (
    <div>
      <Navbar />
      <div className="border border-danger p-2"></div>
        
    <Newsletter />    
    <Footer />
    </div>
  );
}

export default About;
