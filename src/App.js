import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
//  import Navbar from './Components/Nabar'
 import Checkbmi from './Components/Checkbmi'
 import Food from "./Components/Food"
 import Movies from "./Components/Movies"
 import News from './Components/News'
import Contacts from './Components/Contacts'
 import Products from './Components/Products'
 import Weather from './Components/Weather'
 import Home from "./Components/Home"
 import Login from './Components/Login'
import API from './Components/API'
// import Footer from './Components/Footer'
import pic from'./Components/images/mourilogo.jpg'
import "./App.css"
export default function App() {

  return (
    
 <BrowserRouter>
 <div  style={{height:'200px'}} className="nav container-fluid bg-secondary">
    

        <nav className="navbar navbar-expand-lg">
        <Link to="/" className="nav-link active p-5 navbar-brand" id="nav-link"><img  className="logo" src={pic} alt='logo'/></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="btn1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-link nav-item">
                <Link to="/" className="active pr-5-" aria-current="page" id="logo">
                  
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Home" className="nav-link active p-5" aria-current="page" id="nav-link">
                  Home
                  {/* <img src={logo} alt="Logo" id="logomain" /> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Checkbmi" className="nav-link active p-5" id="nav-link">
                  CheckBMI
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Login" className="nav-link active p-5" id="nav-link">
                  Api's
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contacts" className="nav-link active p-5" id="nav-link">
                  Contacts
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit" id="btn2">Search</button>
            </form>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
 <Routes>
          <Route path="/" element={<Home />}></Route> 
          <Route path="/Home" element={<Home />}></Route>         
           <Route path="/Weather" element={<Weather />}></Route>
          <Route path="/News" element={<News />}></Route>
          <Route path="/Food" element={<Food />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Contacts" element={<Contacts/>}></Route>
          <Route path="/Checkbmi" element={<Checkbmi />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/API" element={<API />}></Route>
        </Routes>
        </div>
        </div>
        </div>
      </BrowserRouter>

      
  )
}
