import React from 'react';
import { BrowserRouter, Route, NavLink, Routes, } from "react-router-dom";
import Home from './components/Home';
import AdminLogin from './components/adminLogin';
import Login from "./components/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/registerPage';
import SeatDetails from './components/seatDetails';
import BookSeat from './components/bookseat';
import EditUser from './components/editUser';

const OnlineSeatBook = () => {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
            <a className="navbar-brand me-5" href="#"><b>Capgemini</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-25 mb-lg-0">
                    <li className="nav-item me-5">
                        <NavLink className="nav-NavLink " to="/">Home</NavLink>
                    </li>
                    <li className="nav-item me-5" >
                        <NavLink className="nav-NavLink" to="#">About</NavLink>
                    </li>
                    <li className="nav-item me-5" >
                        <NavLink className="nav-NavLink" to="#">Contact</NavLink>
                    </li>
                    <li className="nav-item me-5" >
                        <NavLink className="nav-NavLink" to="/admin">AdminLogin</NavLink>
                    </li>
                    <li className="nav-item me-5" >
                        <NavLink className="nav-NavLink" to="/seats">Seat Availablity</NavLink>
                    </li>
                 </ul>
               
                <div className="d-flex">
                    <NavLink className="btn btn-warning me-4 " to="/login">Login</NavLink>
                    <NavLink className="btn btn-success" to="/registration">Registration</NavLink>
                </div>
            </div>
        </div>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seats" element={<SeatDetails />} />
        <Route path="/getAllSeats/:id" element={<BookSeat />} />
        <Route path="/registration/edit/:id" element={<EditUser />} />
        <Route path="/registration" element={<Register />} />

    </Routes>

</BrowserRouter>
  )

}


export default OnlineSeatBook;