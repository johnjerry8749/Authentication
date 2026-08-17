import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import Newsletter from "./Newsletter"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="border border-danger mb-4 p-2">
        <div>
        <h3 className=" border border-danger mt-3 text-center fw-bold text-muted">ABOUT <span className="text-dark">US</span></h3>
        <div style={{width:"50px", height:"1px", backgroundColor:"black"}}></div>
        </div>

      </div>
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default Contact
