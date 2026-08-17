import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Collections = () => {
  return (
    <div>
      <Navbar />
      <div className="p-2 mx-5">
        <div className="col-12  border border-danger gap-2 d-flex justify-content-center mt-3 p-2">
          <div className="col-2 border border-dark p-2"></div>

          <div className="col-9 p-2">
            <div className="d-flex align-items-center justify-content-between pb-3">
              {/* Collection Title */}
              <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                <h1
                  className="shop-title mb-0 text-center"
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "30px",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: "#777" }}>All</span> Collections
                </h1>

                <div className="mt-2"
                  style={{
                    width: "45px",
                    height: "1px",
                    backgroundColor: "#1a1a1a",
                  }}
                ></div>
              </div>

              {/* Sort */}
              <div
                className="border rounded px-3 py-2 d-flex align-items-center gap-2"
                style={{
                  minWidth: "180px",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                }}
              >
                <span className="text-muted" style={{ fontSize: "14px" }}>
                  Sort by:
                </span>

                <span className="fw-semibold" style={{ fontSize: "14px" }}>
                  High to Low
                </span>

                <span className="ms-auto">▾</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collections;
