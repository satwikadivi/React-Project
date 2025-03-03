import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Orders() {
  const orders = useSelector((state) => state.purchasedetails);

  return (
    <div className="container mt-4">
      <h2 className="text-primary text-center mb-4">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-muted">No Orders Found.</p>
      ) : (
        <div className="row justify-content-center">
          {orders.map((purchase, index) => (
            <div key={index} className="col-md-8 mb-4">
              <div className="card shadow-lg h-100 border-primary rounded">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">Order Date: {purchase.date}</h5>
                </div>
                <div className="card-body">
                  <p className="text-success fs-5"><strong>Total Amount:</strong> ₹{purchase.total.toFixed(2)}</p>

                  <ul className="list-group list-group-flush">
                    {purchase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-group-item d-flex justify-content-between">
                        <img src={item.image} width={50} height={40}></img>
                        <br></br>
                        <span className="fw-bold">{item.name}:</span>
                        <span className="text-end">₹{item.price}(Qty:{item.quantity})</span>
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

