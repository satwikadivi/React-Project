import { addTocart } from "./Store";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function VegItems() {
  let dispatch = useDispatch();
  let veg = useSelector((state) => state.products.vegItems);

  // State for checkboxes
  const [filterBelow100, setFilterBelow100] = useState(false);
  const [filterAbove100, setFilterAbove100] = useState(false);

  // Filtering logic
  let filteredVeg = veg.filter((item) => {
    if (filterBelow100 && filterAbove100) return true; // Show all if both are checked
    if (filterBelow100) return item.price < 100;
    if (filterAbove100) return item.price >= 100;
    return true; // Default: show all
  });
   
  //search items

  const [searchTerm,setsearchTerm]=useState("");
  const [filteredItems,setFilteredItems]=useState(veg);
  const handlesearch=()=>{
    const filter=veg.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredItems(filter);
  };

  //page navigation
  let perpage = 3;
  let totalpages = Math.ceil(veg.length / perpage);
  let [pagenumber, setpagenumber] = useState(1);

  let pageenditemindex = perpage * pagenumber;
  let pagestartitemindex = pageenditemindex - perpage;
  let currentitems = veg.slice(pagestartitemindex, pageenditemindex);

  const handlepage = (page) => {
    setpagenumber(page);
  };


  

  return (
    <div className="container mt-4">
      <h1 className="text-success text-center mb-4">
        <img src="veg.jpg" height={70} width={70} className="me-2" alt="Veg" />
        Veg Items
      </h1>
      
      <input value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} placeholder="search items"/>
      <button onClick={handlesearch}> Search</button>
      {filteredItems.length>0?(
        <ul>
           {filteredItems.map((item,index)=>(
            <li key={index}>{item.name}</li>
          ))} 
        </ul>
      ):(<p>Data Not found</p>)}

      {/* Bootstrap-styled checkboxes */}
      <div className="card p-3 mb-3 shadow-sm">
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

      <div className="row">
        {filteredVeg.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "150px", objectFit: "cover" }}/>
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">₹{item.price}</p>
                <button onClick={() => dispatch(addTocart(item))} className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    
    <div className="container text-center mt-4">
      <h2>Vegetable Items</h2>

      {/* List of Items */}
      <ul className="list-group mb-3">
        {currentitems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.name}
          </li>
        ))}
      </ul>

      {/* Pagination Controls with Conditional Rendering */}
      <div>
        {/* Show 'Previous' button only if not on first page */}
        {pagenumber > 1 && (
          <button
            className="btn btn-primary me-2"
            onClick={() => handlepage(pagenumber - 1)}>
            Previous
          </button>
        )}

        {/* Page Number Buttons */}
        {Array.from({ length: totalpages }, (_, index) => (
          <button
            key={index}
            className={`btn ${pagenumber === index + 1 ? "btn-success" : "btn-outline-secondary"} me-2`}
            onClick={() => handlepage(index + 1)}>
            {index + 1}
          </button>
        ))}

        {/* Show 'Next' button only if not on last page */}
        {pagenumber < totalpages && (
          <button
            className="btn btn-primary"
            onClick={() => handlepage(pagenumber + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
    </div>
  );
}

export default VegItems;
