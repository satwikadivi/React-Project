import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store";
import Home from "./Home";
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Milk from "./Milk";
import Notfound from "./Notfound";
import Login from "./Login";
import Fruits from "./Fruits";
import "./App.css"; // Ensure Bootstrap is included in App.css
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faPepperHot,faDrumstickBite,faAppleWhole,faCow,faCartShopping,faFileSignature,faAddressCard,faIdBadge} from "@fortawesome/free-solid-svg-icons";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  let auth = useSelector((state) => state.auth);
  let isAuthenticated = auth.isAuthenticated;
  let user = auth.user;
  let dispatch = useDispatch();

  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-light shadow fixed-top">
          <div className="container-fluid">
            {/* Brand Name */}
            <Link to="/" className="navbar-brand fw-bold text-primary">
              <img src="shopping-cart.gif" height={30} width={30}></img>Online Grocery
            </Link>

            {/* Toggle Button for Small Screens */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav gap-3">
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-success fw-bold">
                    <FontAwesomeIcon icon={faHome} /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/veg" className="nav-link text-success fw-bold">
                    <FontAwesomeIcon icon={faPepperHot} /> Veg
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nonveg" className="nav-link text-success fw-bold">
                    <FontAwesomeIcon icon={faDrumstickBite} /> NonVeg
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/milk" className="nav-link text-success fw-bold">
                    <FontAwesomeIcon icon={faCow} /> Milk
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/fruits" className="nav-link text-success fw-bold">
                    <FontAwesomeIcon icon={faAppleWhole} /> Fruits
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/orders" className="nav-link text-success fw-bold">
                    <FontAwesomeIcon icon={faFileSignature} /> Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link text-success fw-bold">
                    <FontAwesomeIcon icon={faIdBadge} /> AboutUs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link text-success fw-bold">
                    <FontAwesomeIcon icon={faAddressCard} /> ContactUs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cart & Auth Section */}
            <div className="d-flex align-items-center">
              <Link to="/cart" className="btn btn-outline-primary fw-bold me-3">
                <FontAwesomeIcon icon={faCartShopping} /> Cart{" "}
                <span className="badge bg-primary">{totalItems}</span>
              </Link>

              {isAuthenticated ? (
                <>
                  <span className="text-dark me-3">Welcome, {user}!</span>
                  <button onClick={() => dispatch(logout())} className="btn btn-outline-danger">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="btn btn-primary">Sign In</Link>
              )}
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container mt-5 pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/veg" element={<VegItems />} />
            <Route path="/nonveg" element={<NonVegItems />} />
            <Route path="/milk" element={<Milk />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>

        {/* Footer */}
        
      </BrowserRouter>
    </>
  );
}

export default App;

