import React, { useState } from "react";
import "./App.css";

function Example() 
{
    const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(1000); // Example total amount
  const [error, setError] = useState("");

  // Sample valid coupon codes
  const validCoupons = {
    RATAN10: 10, // 10% discount
    RATAN20: 20, // 20% discount
    RATAN30:30, // 30% discount
  };

  const applyCoupon = () => {
    if (validCoupons[coupon]) {
      const discountPercentage = validCoupons[coupon];
      const discountAmount = (total * discountPercentage) / 100;
      setDiscount(discountAmount);
      setTotal(total - discountAmount);
      setError(""); // Clear any errors
    } else {
      setError("Invalid coupon code. Please try again.");
    }
  };

  return (
    <div className="cart-container">
      <h1>Cart Value</h1>
      <p>Original Total: $1000</p>
      <p>Discount Applied: ${discount.toFixed(2)}</p>
      <h2>Final Total: ${total.toFixed(2)}</h2>

      <div className="coupon-section">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="coupon-input"
        />
        
        <button onClick={applyCoupon} className="apply-coupon-btn">
          Apply Coupon
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  ); 
}
export default Example;