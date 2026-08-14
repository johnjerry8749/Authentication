import Productimg from "../../assets/front/p_img50.png";

const Shop = () => {


  const products = [
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
];


  return (
    <>
      <style>{`
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
            flex: 0 0 calc(20% - 12px) !important;
          }
        }

        .products-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
        }

        .product-item {
          background: white;
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .product-item:hover {
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="container-fluid p-4 mt-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center mb-5">
              {/* Title with decorative lines */}
              <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
                <h1 className="shop-title mb-0" style={{ fontFamily: "'Lora', serif", fontWeight: "400", color: "#1a1a1a", whiteSpace: "nowrap" }}>
                  <span style={{ color: "#666" }}>LATEST</span> COLLECTIONS
                </h1>
                <div style={{ width: "50px", height: "2px", backgroundColor: "#1a1a1a" }}></div>
              </div>
              
              {/* Description text */}
              <p style={{ maxWidth: "700px", textAlign: "center", color: "#666", fontSize: "15px", lineHeight: "1.6" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
              </p>
            </div>
          </div>
        </div>

<div className="products-grid">
          {products.map((product, index) => (
            <div className="product-item" key={product.id || index}>
              <img
                src={Productimg}
                alt={product.name}
                className="img-fluid w-100"
                style={{ display: "block" }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#1a1a1a", marginBottom: "8px" }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: "15px", fontWeight: "700", color: "#dc2626", marginBottom: "0" }}>
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Shop
