import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function NonVegItems() {
  let dispatch = useDispatch();
  let nonVeg = useSelector((state) => state.products.nonvegItems);

  return (
    <div className="container mt-4">
      <h2 className="text-danger text-center mb-4">
        <img src="nonveg.jpg" height={70} width={70} className="me-2" alt="NonVeg"/>
        Non-Veg Items
      </h2>

      <div className="row">
        {nonVeg.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "150px", objectFit: "cover" }}/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">${item.price}</p>
                <button onClick={() => dispatch(addTocart(item))} className="btn btn-danger w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonVegItems;
