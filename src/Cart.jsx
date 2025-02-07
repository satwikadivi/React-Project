import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearcart, completepurchase, decrement, increment, remove } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  let cartObjects = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  let totalPrice = cartObjects.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // Discount Process
  const [discountPercentage, setDiscountPercentage] = useState(0);
  let [showDiscount, setShowDiscount] = useState(false);

  let discountAmount = (totalPrice * discountPercentage) / 100;
  let finalPrice = totalPrice - discountAmount;

  // Coupon Apply Process
  const [coupon, setCoupon] = useState("");
  let [couponDiscountPer, setCouponDiscountPer] = useState(0);
  let [showCouponApplied, setShowCouponApplied] = useState(false);

  let handleCouponPer = () => {
    switch (coupon.toUpperCase()) {
      case "SS10":
        setCouponDiscountPer(10);
        setShowCouponApplied(true);
        break;
      case "SS20":
        setCouponDiscountPer(20);
        setShowCouponApplied(true);
        break;
      case "SS30":
        setCouponDiscountPer(30);
        setShowCouponApplied(true);
        break;
      case "SS40":
        setCouponDiscountPer(40);
        setShowCouponApplied(true);
        break;
      default:
        alert("Invalid Coupon Code");
        setCouponDiscountPer(0);
    }
  };

  let couponDiscountAmount = (totalPrice * couponDiscountPer) / 100;
  let finalPrice1 = totalPrice - discountAmount - couponDiscountAmount;

  const purchaseDate = new Date().toLocaleDateString();
  const handlePurchaseDetails = () => {
    const purchaseDetailsObject = {
      date: purchaseDate,
      items: [...cartObjects],
      total: finalPrice1,
    };
    dispatch(completepurchase(purchaseDetailsObject));
    dispatch(clearcart());
  };

  return (
    <div className="container mt-4">
      {cartObjects.length > 0 ? (
        <div>
          <h2 className="text-primary text-center mb-4">Your Cart</h2>
          <ul className="list-group mb-4">
            {cartObjects.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  <strong>{item.name}</strong> - ${item.price}
                </span>
                <div>
                  <button className="btn btn-sm btn-outline-success me-2" onClick={() => dispatch(increment(item))}>
                    +
                  </button>
                  <span className="mx-2">Qty: {item.quantity}</span>
                  <button className="btn btn-sm btn-outline-warning me-2" onClick={() => dispatch(decrement(item))}>
                    -
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => dispatch(remove(item))}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-primary"><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>

          {showDiscount && (
            <div className="alert alert-warning">
              <p className="text-orange">Discount Applied: {discountPercentage}%</p>
              <p className="text-danger">Discount Amount: ${discountAmount.toFixed(2)}</p>
            </div>
          )}

          <p className="text-success"><strong>Net Amount to Pay:</strong> ${finalPrice.toFixed(2)}</p>

          {/* Discount Buttons */}
          <div className="mb-3">
            <button className="btn btn-info me-2" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>
              Apply 10% Discount
            </button>
            <button className="btn btn-warning me-2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>
              Apply 20% Discount
            </button>
            <button className="btn btn-success" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>
              Apply 30% Discount
            </button>
          </div>

          {/* Coupon Section */}
          <div className="mb-3">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="form-control w-50 d-inline"
              placeholder="Enter Coupon Code"
            />
            <button className="btn btn-dark ms-2" onClick={() => { handleCouponPer(); setShowCouponApplied(true); }}>
              Apply Coupon
            </button>
          </div>

          {showCouponApplied && (
            <div className="alert alert-success">
              <p>Coupon Code Applied: {coupon}</p>
              <p>Coupon Discount: ${couponDiscountAmount.toFixed(2)}</p>
              <p><strong>Final Amount:</strong> ${finalPrice1.toFixed(2)}</p>
            </div>
          )}

          {/* Purchase Button */}
          <button className="btn btn-primary mt-3" onClick={handlePurchaseDetails}>
            Complete Purchase
          </button>
        </div>
      ) : (
        <p className="text-center text-muted">Your Cart is Empty!</p>
      )}
    </div>
  );
}

export default Cart;
