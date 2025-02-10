import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


function Home() {
  
  const allitems=[{image:"potato.jpg",name:"Potato",price:100},
    {image:"tomato.jpg",name:"Tomato",price:200},
    {image:"onion.jpg",name:"Onion",price:150},
    {image:"ladiesfinger.jpg",name:"LadiesFingures",price:70},
    {image:"beans.jpg",name:"Beans",price:50},
    {image: "carrot.jpg", name: "Carrot", price: 45 },
    {image: "capscium.jpg", name: "Capsicum", price: 60 },
    {image: "cabbage.jpg", name: "Cabbage", price: 25 },
    {image: "cauliflower.jpg", name: "Cauliflower", price: 55 },
    {image: "brinjal.jpg", name: "Brinjal", price: 50 },
    {image: "kakara.JPG", name: "Kakarakaya", price: 30},
    {image: "drumstick.png", name: "DrumStick", price: 40 },
    {image: "donda.jpg", name: "Dondakaya", price: 40 },
    { image: "beetroot.jpg", name: "Beetroot", price: 50 },
    {image: "dosa.jpg", name: "Dosakaya", price: 40 },
    {image: "mirchi.webp", name: "Chilli", price: 120 },
    {image:"chicken.avif",name:"Chicken",price:300},
    {image: "crabs.jpg",name:"Crabs",price:50},
    {image: "mutton.jpg",name:"Mutton",price:850},
    {image: "fish.png",name:"Fish",price:400},
    {image: "prawns.jpg",name:"Prawns",price:350},
    {image: "egg_basket.jpg",name:"Eggs-12",price:150},
    { image: "chicken liver.avif", name: "Chicken Liver", price: 400 },
    { image: "smallfish.jpg", name: "Small Fishes", price: 300 },
    {image: "milk1.jpg",name:"Milk",price:30},
    {image: "curd.jpg",name:"Curd",price:10},
    {image: "paneer.jpg",name:"Paneer",price:250},
    {image: "ghee.jpg",name:"Ghee",price:200},
    {image: "cheese.png",name:"Cheese",price:150},
    {image: "butter.webp",name:"Butter",price:230},
    {image: "yogurt.webp", name: "Yogurt", price: 70 },
    { image: "condensedmilk.webp", name: "Condensed Milk", price: 200 },
    {image:"apple.jpg",name:"Apple",price:100},
    { image: "banana.jpg", name: "Banana", price: 50 },
    { image: "orange.webp", name: "Orange", price: 80 },
    { image: "grapes.jpg", name: "Grapes", price: 120 },
    { image: "mango.jpg", name: "Mango", price: 150 },
    { image: "watermelon.jpg", name: "Watermelon", price: 90 },
    { image: "strawberry.jpg", name: "Strawberry", price: 200 },
    { image: "pineapple.jpg", name: "Pineapple", price: 130 },
    { image: "kiwi.jpg", name: "Kiwi", price: 180 },
    { image: "papaya.webp", name: "Papaya", price: 110 },
    { image: "pomogrante.jpg", name: "Pomegranate", price: 160 },
    { image: "pear.jpg", name: "Pear", price: 140 },
    { image: "guava.jpg", name: "Guava", price: 70 },
    { image: "dragon.jpg", name: "Dragon Fruit", price: 300 },
    { image: "custradapple.jpeg", name: "Custard Apple", price: 150 },
    { image: "avacodo.jpg", name: "Avacado", price: 80 }
  ]

    const [searchTerm, setSearchTerm] = useState("");
      const [filteredItems, setFilteredItems] = useState([]);
    
      const handleSearch = () => {
        const result = allitems.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(result);
      };

      // Pagination Logic
let perpage = 3;
let totalpages = Math.ceil(allitems.length / perpage);
let [pagenumber, setpagenumber] = useState(1);

let pageenditemindex = perpage * pagenumber;
let pagestartitemindex = pageenditemindex - perpage;
let currentitems = allitems.slice(pagestartitemindex, pageenditemindex);

const handlepage = (page) => {
  setpagenumber(page);
};
        
  return (
    <div className="container mt-4">
      <h1 className="text-primary text-center mb-4">Welcome to Online Grocery</h1>

      <div className="container mt-4">
      <h2 className="text-center text-success mb-3">Search the item</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>

      {filteredItems.length > 0 && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ul className="list-group">
              {filteredItems.map((item, index) => (
                <li key={index} className="list-group-item">
                   {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>

    <div>
       {/* Image Carousel */}
       <div id="homeCarousel" className="carousel slide p-2" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="vegetables.jpg" className="d-block w-100 " alt="Vegetables" style={{ height: "400px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="non-veg-food.jpg" className="d-block w-100" alt="Dairy Products" style={{ height: "400px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="milk-dairy.jpg" className="d-block w-100" alt="Dairy Products" style={{ height: "400px", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="all-fruit.jpg" className="d-block w-100" alt="Fruits" style={{ height: "400px", objectFit: "cover" }} />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>


      {/* Hero Section */}
      <div className="row align-items-center mb-4 p-4">
        <div className="col-md-6">
          <h2 className="text-success">Fresh & Quality Products</h2>
          <p className="lead">
            We offer a wide range of fresh vegetables, high-quality non-veg items,
            and dairy products at the best prices. Enjoy hassle-free online shopping!
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="home-banner.jpg"
            className="img-fluid rounded shadow"
            alt="Home Banner"
          />
        </div>
      </div>

      {/* Category Section */}
      <h3 className="text-center text-secondary mb-3">Explore Our Categories</h3>
      <div className="row">
        <div className="col-md-3 mb-6 p-2">
          <div className="card shadow-sm">
            <img src="veg.jpg" className="card-img-top" alt="Vegetables" />
            <div className="card-body text-center">
              <h5 className="card-title">Vegetables</h5>
              <p className="card-text">Fresh and organic vegetables at great prices.</p>
              <a href="/veg" className="btn btn-success w-100">Shop Now</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-6 p-2">
          <div className="card shadow-sm">
            <img src="nonveg.jpg" className="card-img-top" alt="Non-Veg" />
            <div className="card-body text-center">
              <h5 className="card-title">Non-Veg Items</h5>
              <p className="card-text">Premium quality chicken, fish, and meat.</p>
              <a href="/nonveg" className="btn btn-danger w-100">Shop Now</a>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-6 p-2">
          <div className="card shadow-sm">
            <img src="milk.jpg" className="card-img-top" alt="Milk Products" />
            <div className="card-body text-center">
              <h5 className="card-title">Dairy Products</h5>
              <p className="card-text">Milk, butter, paneer, and other dairy items.</p>
              <a href="/milk" className="btn btn-primary w-100">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-6 p-2">
          <div className="card shadow-sm">
            <img src="fruits.jpg" className="card-img-top" alt="Fruits" />
            <div className="card-body text-center">
              <h5 className="card-title">Fruits</h5>
              <p className="card-text">Fresh and seasonal fruits, full of nutrition.</p>
              <a href="/fruits" className="btn btn-warning w-100">Shop Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-4">
    <h2 className="text-secondary mb-3">All Items Explore here</h2>

    {/* List of Items with Images */}
    <div className="row">
      {currentitems.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card shadow-lg rounded">
            <img 
              src={item.image} 
              className="card-img-top img-fluid p-2 rounded" 
              alt={item.name} 
              style={{ height: "200px", objectFit: "cover" }} 
            />
            <div className="card-body text-center">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text text-muted fw-bold">₹{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination Controls with Conditional Rendering */}
    <div className="d-flex justify-content-center gap-2 mt-4">
      {/* Show 'Previous' button only if not on first page */}
      {pagenumber > 1 && (
        <button
          className="btn btn-primary"
          onClick={() => handlepage(pagenumber - 1)}>
          Previous
        </button>
      )}

      {/* Page Number Buttons */}
      {Array.from({ length: totalpages }, (_, index) => (
        <button
          key={index}
          className={`btn ${pagenumber === index + 1 ? "btn-success" : "btn-outline-secondary"}`}
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
    <footer className="bg-dark text-white text-center py-3 mt-5">
          <p className="mb-0">&copy; 2025 Online Grocery. All Rights Reserved.</p>
        </footer>
    </div>

    
  );
}

export default Home;


