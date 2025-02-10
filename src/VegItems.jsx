import { addTocart } from "./Store";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function VegItems() {
  let dispatch = useDispatch();
  let veg = useSelector((state) => state.products.vegItems);

  const [filterBelow100, setFilterBelow100] = useState(false);
  const [filterAbove100, setFilterAbove100] = useState(false);
  const [discount, setDiscount] = useState(18);
  const [offerActive, setOfferActive] = useState(false);

  useEffect(() => {
    const startHour = 12; // 12 PM
    const endHour = 13; // 1 PM
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour >= startHour && currentHour < endHour) {
      setOfferActive(true);
    }
  }, []);

  let filteredVeg = veg.filter((item) => {
    if (filterBelow100 && filterAbove100) return true;
    if (filterBelow100) return item.price < 100;
    if (filterAbove100) return item.price >= 100;
    return true;
  });

  return (
    <div className="container mt-4 p-4">
      <h1 className="text-success text-center mb-4">
        <img src="veg.jpg" height={80} width={80} className="me-2" alt="Veg" />
        Vegetables
      </h1>
      <h2 className="text-muted">"Nourishment the natural way!"</h2>

      <div className="container p-3 mb-3 shadow-sm">
        <h5 className="text-center text-primary">Filter by Price</h5>
        <div className="d-flex justify-content-center">
          <div className="form-check form-switch me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="below100"
              checked={filterBelow100}
              onChange={() => setFilterBelow100(!filterBelow100)}
            />
            <label className="form-check-label" htmlFor="below100">Below ₹100</label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="above100"
              checked={filterAbove100}
              onChange={() => setFilterAbove100(!filterAbove100)}
            />
            <label className="form-check-label" htmlFor="above100">Above ₹100</label>
          </div>
        </div>
      </div>

      <h4 className="text-danger text-center">{offerActive ? `Limited Time Offer: ${discount}% Off from 12 PM to 1 PM!` : "No Active Offer! Offer is available at 12PM to 1PM"}</h4>

      <div className="row">
        {filteredVeg.map((item, index) => (
          <div key={index} className="col-md-4 col-lg-3 mb-4">
            <div className="card shadow-lg h-100 rounded">
              <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "150px", objectFit: "cover" }}/>
              <div className="card-body text-center">
                <h5 className="card-title">{item.name} </h5>
                <h6 className="card-title text-muted">Quantity: {item.quantity}</h6>
                <p className="card-text text-muted fw-bold">
                  Price: ₹{(item.price * (1 - (offerActive ? discount : 0) / 100)).toFixed(2)} {offerActive && <span className="text-danger">(₹{item.price})</span>}
                </p>
                <button onClick={() => dispatch(addTocart(item))} className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default VegItems;
