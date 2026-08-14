import Productimg from "../../assets/front/p_img50.png";

const Shop = () => {
  const product = [
    {
      name: "Shirt black color",
      price: "$50",
    },
    {
      name: "Shirt white color",
      price: "$45",
    },
    {
      name: "Blue Jeans",
      price: "$70",
    },
    {
      name: "Shirt black color",
      price: "$50",
    },
    {
      name: "Shirt white color",
      price: "$45",
    },
    {
      name: "Blue Jeans",
      price: "$70",
    },
    {
      name: "Shirt black color",
      price: "$50",
    },
    {
      name: "Shirt white color",
      price: "$45",
    },
    {
      name: "Blue Jeans",
      price: "$70",
    },
    {
      name: "Shirt black color",
      price: "$50",
    },
    {
      name: "Blue Jeans",
      price: "$70",
    },
    {
      name: "Shirt black color",
      price: "$50",
    },
    
  ];

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

        @media (max-width: 768px) {
          .shop-title {
            font-size: 36px !important;
          }
          .product-item {
            flex: 0 0 calc(50% - 12px) !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .shop-title {
            font-size: 38px !important;
          }
          .product-item {
            flex: 0 0 calc(25% - 12px) !important;
          }
        }

        @media (min-width: 1025px) {
          .shop-title {
            font-size: 44px !important;
          }
          .product-item {
            flex: 0 0 calc(10% - 10px) !important;
          }
        }

  `}
      </style>

      <div className="container-fluid p-4 mt-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center mb-5">
              {/* Title with decorative lines */}
              <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
                <h1
                  className="shop-title mb-0"
                  style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: "#666" }}>LATEST</span> COLLECTIONS
                </h1>
                <div
                  style={{
                    width: "50px",
                    height: "2px",
                    backgroundColor: "#1a1a1a",
                  }}
                ></div>
              </div>

              {/* Description text */}
              <p
                style={{
                  maxWidth: "700px",
                  textAlign: "center",
                  color: "#666",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the.
              </p>
            </div>
          </div>
        </div>

    <div className="container-fluid border border-danger p-3 p-md-4">
  <div
    className="row g-3 g-md-4 mx-auto border border-danger"
    style={{ width: "80%" }}
  >
    {product.map((products, index) => (
      <div
        className="col-6 col-md-4 col-lg-3"
        key={products.id || index}
      >
        <div className="card h-100 shadow-sm">
          <div className="card-body text-center">

            <img
              src={Productimg}
              alt={products.name}
              className="img-fluid"
              style={{
                height: "260px",
                width: "100%",
                objectFit: "cover",
              }}
            />

            <p className="card-text mt-3 mb-1 fw-semibold">
              {products.name}
            </p>

            <p className="card-text text-success fw-bold">
              {products.price}
            </p>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </>
  );
};

export default Shop;
