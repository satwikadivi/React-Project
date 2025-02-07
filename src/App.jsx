import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import VegItems from "./VegItems";
import NonVegItems from "./NonVegItems";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "./App.css";
import Milk from "./Milk";
import { useDispatch, useSelector } from "react-redux";
import Notfound from "./Notfound";
import Login from "./Login";
import { logout } from "./Store";


function App()
{
  const cart=useSelector(state=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);

  let auth=useSelector(state=>state.auth);
  let isAuthenticated=auth.isAuthenticated;
  let user=auth.user;
  let dispatch=useDispatch();
    return(
    <>
    <BrowserRouter>
      <nav className="navbar">
      <Link to='/home' className="myclass">Home</Link>
      <Link to='/veg' className="myclass" >VegItems</Link>
      <Link to='/nonveg' className="myclass">NonVegItems</Link>
      <Link to='/milk' className="myclass">Milk Products</Link>
      <Link to='/cart' className="myclass">Cart<span>{totalItems}</span></Link>
      <Link to='/orders' className="myclass">Orders</Link>
      <Link to='/aboutus' className="myclass">AboutUs</Link>
      <Link to='/contactus' className="myclass">ContactUs</Link>
      {isAuthenticated ?(
          <>
          <span className="welcome">Welcome,{user}!</span>
          <button onClick={()=>dispatch(logout())} className="logout">Logout</button>
          </>
        ):(
      <Link to='/login' className="myclass">Sign In</Link>
        )
      }
      </nav>

      <Routes>
        <Route path="/home"  element={<Home/>}></Route>
        <Route path="/veg" element={<VegItems/>}></Route>
        <Route path="/nonveg" element={<NonVegItems/>}></Route>
        <Route path="/milk"  element={<Milk/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<Notfound/>}>s</Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;


