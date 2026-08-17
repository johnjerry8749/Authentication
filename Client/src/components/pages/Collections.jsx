import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useState } from "react";

const Collections = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("High to Low");

  // FILTER TOGGLE FOR MD / MOBILE
  const [filterOpen, setFilterOpen] = useState(false);

  const togglesort = () => {
    setSortOpen(!sortOpen);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleSort = (option) => {
    setSelectedSort(option);
    setSortOpen(false);
  };

  const sortOptions = [
    "High to Low",
    "Low to High",
    "Newest",
    "Oldest",
  ];

  return (
    <div>
      <Navbar />

      <div className="container px-3 px-md-4 px-lg-5 py-4">

        {/* =====================================================
            MOBILE / TABLET LAYOUT
            ===================================================== */}
        <div className="d-lg-none">

          {/* FILTER HEADER */}
          <div
            className="d-flex align-items-center gap-2 mb-4"
            onClick={toggleFilter}
            style={{
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <h2
              className="mb-0"
              style={{
                fontFamily: "'Lora', serif",
                fontSize: "24px",
                fontWeight: "400",
                color: "#111",
              }}
            >
              FILTERS
            </h2>

            <i
              className={`ti ${
                filterOpen
                  ? "ti-chevron-down"
                  : "ti-chevron-right"
              }`}
              style={{
                fontSize: "22px",
                color: "#777",
              }}
            ></i>
          </div>


          {/* MOBILE / TABLET FILTER CONTENT */}
          {filterOpen && (
            <div className="mobile-filter-wrapper mb-4">

              {/* CATEGORIES */}
              <div className="filter-box mb-4">

                <h3> CATEGORIES </h3>

                <label>
                  <input type="checkbox" />
                  <span>Men</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Women</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>kids</span>
                </label>

              </div>


              {/* TYPE */}
              <div className="filter-box">

                <h3>TYPE</h3>

                <label>
                  <input type="checkbox" />
                  <span>Topwear</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Bottomwear</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Winterwear</span>
                </label>

              </div>

            </div>
          )}


          {/* =====================================================
              COLLECTION + SORT
              ===================================================== */}
          <div className="d-flex align-items-center justify-content-between gap-3">

            {/* ALL COLLECTIONS */}
            <div className="d-flex align-items-center gap-3">

              <h1
                className="mb-0"
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "23px",
                  fontWeight: "400",
                  color: "#1a1a1a",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "#777" }}>ALL</span>{" "}
                COLLECTIONS
              </h1>

              <div
                style={{
                  width: "45px",
                  height: "1px",
                  backgroundColor: "#1a1a1a",
                }}
              ></div>

            </div>


            {/* SORT */}
            <div
              className="position-relative"
              style={{
                flexShrink: 0,
              }}
            >

              <div
                className="border px-3 py-2 d-flex align-items-center gap-2"
                style={{
                  minWidth: "220px",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  borderColor: "#cfd2d6",
                }}
                onClick={togglesort}
              >

                <span
                  style={{
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sort by:
                </span>

                <span
                  className="fw-semibold"
                  style={{
                    fontSize: "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {selectedSort}
                </span>

                <i
                  className={`ti ${
                    sortOpen
                      ? "ti-chevron-up"
                      : "ti-chevron-down"
                  } ms-auto`}
                  style={{
                    fontSize: "18px",
                  }}
                ></i>

              </div>


              {/* SORT OPTIONS */}
              {sortOpen && (
                <div
                  className="position-absolute bg-white border shadow-sm mt-2"
                  style={{
                    width: "100%",
                    zIndex: 1000,
                    right: 0,
                    overflow: "hidden",
                  }}
                >

                  {sortOptions.map((option) => (
                    <div
                      key={option}
                      className="p-2 sort-option"
                      onClick={() => handleSort(option)}
                    >
                      {option}
                    </div>
                  ))}

                </div>
              )}

            </div>

          </div>

        </div>


        {/* =====================================================
            LARGE SCREEN LAYOUT
            ===================================================== */}
        <div className="row g-4 d-none d-lg-flex">

          {/* =====================================================
              FILTER SIDEBAR
              ===================================================== */}
          <div className="col-lg-3">

            <div className="large-filter">

              <h2>
                FILTERS
              </h2>


              {/* CATEGORIES */}
              <div className="filter-box">

                <h3>CATEGORIES</h3>

                <label>
                  <input type="checkbox" />
                  <span>Men</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Women</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>kids</span>
                </label>

              </div>


              {/* TYPE */}
              <div className="filter-box">

                <h3>TYPE</h3>

                <label>
                  <input type="checkbox" />
                  <span>Topwear</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Bottomwear</span>
                </label>

                <label>
                  <input type="checkbox" />
                  <span>Winterwear</span>
                </label>

              </div>

            </div>

          </div>


          {/* =====================================================
              COLLECTION
              ===================================================== */}
          <div className="col-lg-9">

            <div
              className="d-flex align-items-center justify-content-between gap-3 pb-3 border-bottom"
            >

              {/* COLLECTION TITLE */}
              <div className="d-flex align-items-center justify-content-center gap-3 flex-grow-1">

                <div
                  style={{
                    width: "45px",
                    height: "1px",
                    backgroundColor: "#1a1a1a",
                  }}
                ></div>

                <h1
                  className="shop-title mb-0 text-center"
                  style={{
                    fontFamily: "'Lora', serif",
                    fontSize: "50px",
                    fontWeight: "400",
                    color: "#1a1a1a",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: "#777" }}>All</span>{" "}
                  Collections
                </h1>

                <div
                  style={{
                    width: "45px",
                    height: "1px",
                    backgroundColor: "#1a1a1a",
                  }}
                ></div>

              </div>


              {/* SORT */}
              <div
                className="position-relative"
                style={{
                  width: "230px",
                }}
              >

                <div
                  className="border border-dark rounded px-3 py-2 d-flex align-items-center gap-2"
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                  }}
                  onClick={togglesort}
                >

                  <span
                    className="text-muted"
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    Sort by:
                  </span>

                  <span
                    className="fw-semibold text-truncate"
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    {selectedSort}
                  </span>

                  <i
                    className={`ti ${
                      sortOpen
                        ? "ti-chevron-up"
                        : "ti-chevron-down"
                    } fs-5 text-dark ms-auto`}
                  ></i>

                </div>


                {/* SORT OPTIONS */}
                {sortOpen && (
                  <div
                    className="position-absolute bg-white border border-dark rounded shadow-sm mt-2"
                    style={{
                      width: "100%",
                      zIndex: 1000,
                      overflow: "hidden",
                    }}
                  >

                    {sortOptions.map((option) => (
                      <div
                        key={option}
                        className="p-2 sort-option"
                        onClick={() => handleSort(option)}
                      >
                        {option}
                      </div>
                    ))}

                  </div>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          CSS
          ===================================================== */}
      <style>
        {`

          /* ============================
             FILTER SIDEBAR
             ============================ */

          .large-filter {
            padding-top: 55px;
          }

          .large-filter h2 {
            font-family: 'Lora', serif;
            font-size: 30px;
            font-weight: 400;
            color: #111;
            margin-bottom: 38px;
          }


          /* ============================
             FILTER BOX
             ============================ */

          .filter-box {
            border: 1px solid #cfd2d6;
            padding: 22px 30px;
            background: #fff;
          }

          .filter-box + .filter-box {
            margin-top: 30px;
          }

          .filter-box h3 {
            font-family: Arial, sans-serif;
            font-size: 20px;
            font-weight: 500;
            color: #111;
            margin: 0 0 24px 0;
          }


          /* ============================
             CHECKBOX LABEL
             ============================ */

          .filter-box label {
            display: flex;
            align-items: center;
            gap: 13px;
            margin-bottom: 19px;
            cursor: pointer;
          }

          .filter-box label:last-child {
            margin-bottom: 0;
          }


          /* ============================
             CHECKBOX
             ============================ */

          .filter-box input[type="checkbox"] {
            appearance: none;
            -webkit-appearance: none;

            width: 18px;
            height: 18px;

            border: 1.5px solid #777;
            border-radius: 3px;

            background: #fff;

            cursor: pointer;

            position: relative;

            flex-shrink: 0;
          }

          .filter-box input[type="checkbox"]:checked {
            background: #111;
            border-color: #111;
          }

          .filter-box input[type="checkbox"]:checked::after {
            content: "✓";

            position: absolute;

            color: #fff;

            font-size: 13px;

            left: 3px;
            top: -1px;
          }


          /* ============================
             FILTER TEXT
             ============================ */

          .filter-box label span {
            font-size: 20px;
            font-weight: 400;
            color: #243b63;
          }


          /* ============================
             MOBILE / TABLET FILTER
             ============================ */

          .mobile-filter-wrapper {
            animation: filterSlide 0.25s ease;
          }

          @keyframes filterSlide {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }


          /* ============================
             SORT
             ============================ */

          .sort-option {
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 15px;
          }

          .sort-option:hover {
            background-color: #000;
            color: #fff;
          }


          /* ============================
             TABLET
             ============================ */

          @media (min-width: 768px) and (max-width: 991px) {

            .mobile-filter-wrapper {
              max-width: 500px;
            }

            .mobile-filter-wrapper .filter-box {
              padding: 25px 30px;
            }

          }


          /* ============================
             MOBILE
             ============================ */

          @media (max-width: 767px) {

            .sort-option {
              font-size: 14px;
            }

            .filter-box {
              padding: 20px;
            }

            .filter-box h3 {
              font-size: 18px;
            }

            .filter-box label span {
              font-size: 17px;
            }

          }


          @media (max-width: 575px) {

            .container-fluid {
              padding-left: 12px !important;
              padding-right: 12px !important;
            }

            .sort-option {
              padding: 10px !important;
            }

          }

        `}
      </style>


      <Footer />
    </div>
  );
};

export default Collections;