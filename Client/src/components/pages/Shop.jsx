
const Shop = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

        @media (max-width: 768px) {
          .shop-title {
            font-size: 36px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .shop-title {
            font-size: 38px !important;
          }
        }

        @media (min-width: 1025px) {
          .shop-title {
            font-size: 44px !important;
          }
        }
      `}</style>

      <div className="container-fluid p-4 mt-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center gap-4 mb-5 border border-danger">
              <h1 className="shop-title mb-0" style={{ fontFamily: "'Lora', serif", fontWeight: "400", color: "#1a1a1a", whiteSpace: "nowrap" }}>
                <span style={{ color: "#666" }}>LATEST</span> COLLECTIONS
              </h1>
              <div style={{ width: "50px", height: "2px", backgroundColor: "#1a1a1a" }}></div>
            </div>
            <div className="d-flext justify-content-center align-items-center fs-3"> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p></div>
           
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Product cards will go here */}
        </div>
      </div>
    </>
  )
}

export default Shop
