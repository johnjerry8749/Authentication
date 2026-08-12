const Home = () => {
  return (
    <div className="row m-auto bg-white p-2" style={{width: "100%" }}>
      <div className="row border border-danger m-auto d-flex justify-content-center align-items-center p-2" style={{ height: "500px", width: "80%" }}>
          <div className=" col-sm-12 col-md-12 col-lg-6 border border-danger" style={{height:"100%"}}>One of two columns</div>
          <div className=" col-sm-12 col-md-12 col-lg-6  border border-danger" style={{height:"100%"}}>One of two columns</div>
        </div>
    </div>
  );
};

export default Home;
