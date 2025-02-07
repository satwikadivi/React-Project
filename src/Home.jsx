// function Home()
// {
//     return(
//         <>
//         <h1>This is Home Page In Home.jsx file</h1>
//         </>
//     )
// }
// export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="text-primary text-center mb-4">Welcome to Online Grocery</h1>

      {/* Hero Section */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <h2 className="text-success">Fresh & Quality Products</h2>
          <p className="lead">
            We offer a wide range of fresh vegetables, high-quality non-veg items,
            and dairy products at the best prices. Enjoy hassle-free online shopping!
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="home-banner.jpg"
            className="img-fluid rounded shadow"
            alt="Home Banner"
          />
        </div>
      </div>

      {/* Category Section */}
      <h3 className="text-center text-secondary mb-3">Explore Our Categories</h3>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <img src="veg.jpg" className="card-img-top" alt="Vegetables" />
            <div className="card-body text-center">
              <h5 className="card-title">Vegetables</h5>
              <p className="card-text">Fresh and organic vegetables at great prices.</p>
              <a href="/veg" className="btn btn-success w-100">Shop Now</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <img src="nonveg.jpg" className="card-img-top" alt="Non-Veg" />
            <div className="card-body text-center">
              <h5 className="card-title">Non-Veg Items</h5>
              <p className="card-text">Premium quality chicken, fish, and meat.</p>
              <a href="/nonveg" className="btn btn-danger w-100">Shop Now</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <img src="milk.jpg" className="card-img-top" alt="Milk Products" />
            <div className="card-body text-center">
              <h5 className="card-title">Dairy Products</h5>
              <p className="card-text">Milk, butter, paneer, and other dairy items.</p>
              <a href="/milk" className="btn btn-primary w-100">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-5 text-muted">
        <p>&copy; 2025 Online Grocery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
