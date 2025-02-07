import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  let dispatch = useDispatch();
  let milk = useSelector((state) => state.products.milkItems);

  return (
    <div className="container mt-4">
      <h2 className="text-primary text-center mb-4">
        <img src="milk.jpg" height={70} width={70} className="me-2 img-fluid" alt="Milk"/>
        Milk Items
      </h2>

      {milk?.length > 0 ? (
        <div className="row">
          {milk.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100 d-flex flex-column">
                <img src={item.image} className="card-img-top img-fluid" alt={item.name} style={{ height: "150px", objectFit: "cover" }}/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text text-muted mb-3">${item.price}</p>
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


