import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function NonVegItems() {
  let dispatch = useDispatch();
  let nonVeg = useSelector((state) => state.products.nonvegItems);

  // State for checkboxes
    const [filterBelow500, setFilterBelow500] = useState(false);
    const [filterAbove500, setFilterAbove500] = useState(false);
    const [discount, setDiscount] = useState(18);
    const [offerActive, setOfferActive] = useState(false);
    
      useEffect(() => {
        const startHour = 20; // 8 PM
        const endHour = 22; // 10 PM
        const now = new Date();
        const currentHour = now.getHours();
    
        if (currentHour >= startHour && currentHour < endHour) {
          setOfferActive(true);
        }
      }, []);

    // Filtering logic
    let filterednonVeg = nonVeg.filter((item) => {
      if (filterBelow500 && filterAbove500) return true; // Show all if both are checked
      if (filterBelow500) return item.price < 500;
      if (filterAbove500) return item.price >= 500;
      return true; // Default: show all
    }); 

  return (
    <div className="container-fluid mt-2 py-4">
      <h1 className="text-danger text-center mb-4">
        <img src="nonveg.jpg" height={100} width={100} className="me-2 rounded-circle" alt="NonVeg" />
        Non-Veg Items</h1>
        <h2 className="text-muted">"Meat your cravings with every bite!"</h2>

    {/* Bootstrap-styled checkboxes */}
      <div className="container p-3 mb-3 shadow-sm">
        <h5 className="text-center text-primary">Filter by Price</h5>
        <div className="d-flex justify-content-center">
          <div className="form-check form-switch me-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="below500"
              checked={filterBelow500}
              onChange={() => setFilterBelow500(!filterBelow500)}
            />
            <label className="form-check-label" htmlFor="below500">Below ₹500</label>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="above500"
              checked={filterAbove500}
              onChange={() => setFilterAbove500(!filterAbove500)}
            />
            <label className="form-check-label" htmlFor="above500">Above ₹500</label>
          </div>
        </div>
      </div>  
      
      <h4 className="text-danger text-center">{offerActive ? `Limited Time Offer: ${discount}% Off from 8 PM to 10 PM!` : "No Active Offer! Offer is available at 8PM to 10PM"}</h4>

      <div className="row justify-content-center">
        {filterednonVeg.map((item, index) => (
          <div key={index} className="col-md-4 col-lg-3 mb-4">
            <div className="card shadow-lg h-100 rounded">
              <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "150px", objectFit: "cover" }} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-title text-muted">Quantity: {item.quantity}</h6>
                <p className="card-text text-muted fw-bold">
                  Price: ₹{(item.price * (1 - (offerActive ? discount : 0) / 100)).toFixed(2)} {offerActive && <span className="text-danger">(₹{item.price})</span>}
                </p>
                <button onClick={() => dispatch(addTocart(item))} className="btn btn-danger w-100">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVegItems;
