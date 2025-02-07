import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Orders() {
  const orders = useSelector((state) => state.purchasedetails);

  return (
    <div className="container mt-4">
      <h2 className="text-primary text-center mb-4">Purchase History</h2>

      {orders.length === 0 ? (
        <p className="text-center text-muted">No purchase history available.</p>
      ) : (
        <div className="row">
          {orders.map((purchase, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-secondary">Order Date: {purchase.date}</h5>
                  <p className="text-success"><strong>Total Amount:</strong> ${purchase.total.toFixed(2)}</p>

                  <ul className="list-group">
                    {purchase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-group-item d-flex justify-content-between">
                        <span>{item.name}</span>
                        <span>${item.price} (Qty: {item.quantity})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
