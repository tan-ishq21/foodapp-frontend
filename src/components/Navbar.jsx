import React, { useState } from 'react'
import Badge from "react-bootstrap/Badge"
import { Link , useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
const Navbar = () => {
    const [cartView , setCartView] = useState(false)
    let data = useCart()
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Flavor Wheels</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                    <li className='nav-item'>
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {
                        (localStorage.getItem("authToken")) ?
                        <li className='nav-item'>
                            <Link className="nav-link active" aria-current="page" to="/myOrder">My Orders</Link>
                        </li>
                        :
                        ""
                    }
                </ul>

                    {
                        (!localStorage.getItem("authToken")) ?
                        <div className='d-flex'>
                            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                            <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
                        </div>
                        : 
                        <div>
                            <div className='btn bg-white text-success mx-2' onClick={() => setCartView(true)}>
                                Cart {"      "}
                                <Badge pill bg='danger'> {data.length} </Badge>
                            </div>
                            {
                                cartView ? <Modal onClose={() => setCartView(false)}> <Cart /> </Modal> : ""
                            }
                            <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                                Logout
                            </div>
                        </div>
                    }
                </div>
            </div>
            </nav>
        </>
    );
};

export default Navbar;
