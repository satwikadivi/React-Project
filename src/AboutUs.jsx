// function AboutUs()
// {
//     return(
//         <>
//         <h1>This is About Us Page In AboutUs.jsx file</h1>
//         </>
//     )
// }
// export default AboutUs;

import React from "react";

function AboutUs() {
  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src="home-banner.jpg"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="lead">
            Welcome to <strong>MyShop</strong>, your one-stop destination for the
            best products. We are committed to providing quality items at
            affordable prices.
          </p>
          <p>
            Our journey started with a vision to make shopping easy, accessible,
            and enjoyable for everyone. With a wide range of categories
            including Veg, Non-Veg, Dairy, and more, we bring fresh and
            high-quality products straight to your home.
          </p>
          <p>
            <strong>Why Choose Us?</strong>
          </p>
          <ul className="list-group">
            <li className="list-group-item">✔ High-quality and fresh products</li>
            <li className="list-group-item">✔ Secure and fast delivery</li>
            <li className="list-group-item">✔ 24/7 customer support</li>
            <li className="list-group-item">✔ Easy returns and refunds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
