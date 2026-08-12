import hero_image from "../../assets/front/hero_img.png";

const Home = () => {
  return (
    <div className="bg-white" style={{ width: "100%" }}>
      <div className="row m-auto border border-dark d-flex justify-content-center align-items-center" style={{ minHeight: "500px", width: "83%" }}>
        {/* Left Content */}
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center p-5" style={{ backgroundColor: "#f9f7f4" }}>
          <p className="mb-3" style={{ fontSize: "14px", fontWeight: "600", color: "#666", letterSpacing: "2px" }}>
            ─── OUR BESTSELLERS
          </p>
          <h1 className="mb-4" style={{ fontSize: "56px", fontWeight: "700", color: "#1a1a1a", lineHeight: "1.2" }}>
            Latest Arrivals
          </h1>
          <button
            style={{
              width: "fit-content",
              padding: "12px 40px",
              backgroundColor: "#1a1a1a",
              color: "white",
              border: "none",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#dc2626")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#1a1a1a")}
          >
            SHOP NOW ──
          </button>
        </div>

        {/* Right Image */}
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#deb1a07b", minHeight: "600px" }}>
          <img
            src={hero_image}
            alt="Hero Image"
            className="img-fluid"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
