import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  let dispatch = useDispatch();
  let milk = useSelector((state) => state.products.milkItems);

  // State for checkboxes
    const [filterBelow200, setFilterBelow200] = useState(false);
    const [filterAbove200, setFilterAbove200] = useState(false);
    const [discount, setDiscount] = useState(18);
    const [offerActive, setOfferActive] = useState(false);
    
      useEffect(() => {
        const startHour = 7; // 7 AM
        const endHour = 8; // 8 AM
        const now = new Date();
        const currentHour = now.getHours();
    
        if (currentHour >= startHour && currentHour < endHour) {
          setOfferActive(true);
        }
      }, []);

    // Filtering logic
    let filteredmilk = milk.filter((item) => {
      if (filterBelow200 && filterAbove200) return true; // Show all if both are checked
      if (filterBelow200) return item.price < 200;
      if (filterAbove200) return item.price >= 200;
      return true; // Default: show all
    });

  return (
    <div className="container mt-4 p-4">
      <h1 className="text-primary text-center mb-4">
        <img src="milk.jpg" height={80} width={80} className="me-2 img-fluid" alt="Milk"/>
        Milk Items</h1>
        <h2 className="text-muted">"Start your day the milky way!"</h2>
      
    {/* Bootstrap-styled checkboxes */}
    <div className="container p-3 mb-3 shadow-sm">
        <h5 className="text-center text-primary">Filter by Price</h5>
        <div className="d-flex justify-content-center">
          <div className="form-check form-switch me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="below200"
              checked={filterBelow200}
              onChange={() => setFilterBelow200(!filterBelow200)}
            />
            <label className="form-check-label" htmlFor="below200">Below ₹200</label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="above200"
              checked={filterAbove200}
              onChange={() => setFilterAbove200(!filterAbove200)}
            />
            <label className="form-check-label" htmlFor="above200">Above ₹200</label>
          </div>
        </div>
      </div>

      <h4 className="text-danger text-center">{offerActive ? `Limited Time Offer: ${discount}% Off from 7 AM to 8 AM!` : "No Active Offer! Offer is available  at 7AM to 8PM"}</h4>

      {milk?.length > 0 ? (
        <div className="row">
          {filteredmilk.map((item, index) => (
            <div key={index} className="col-md-4 col-lg-3 mb-4">
            <div className="card shadow-lg h-100 rounded">
                <img src={item.image} className="card-img-top img-fluid" alt={item.name} style={{ height: "150px", objectFit: "cover" }}/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-title text-muted">Quantity: {item.quantity}</h6>
                  <p className="card-text text-muted fw-bold">
                  Price: ₹{(item.price * (1 - (offerActive ? discount : 0) / 100)).toFixed(2)} {offerActive && <span className="text-danger">(₹{item.price})</span>}
                </p>
                  <button onClick={() => dispatch(addTocart(item))} className="btn btn-primary mt-auto">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No milk items available.</p>
      )}
    </div>
  );
}

export default Milk;


