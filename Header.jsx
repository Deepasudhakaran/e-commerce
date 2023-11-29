import React from 'react';
import './Home.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({cartItems}) => {
  return (
    <div>
      <header className="header">
                <div>
                    <h1>
                        <Link to="/" className="logo">
                            OnlineShop
                        </Link>
                    </h1>
                </div>
                <div className="header-links">


                <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>


<ul>
    <li >
        <Link to="/addcard"><FaShoppingCart />
</Link>
    </li>
</ul>
<ul>
    <li>
        <Link to="/add" >create</Link>
    </li>
</ul>


                </div>
            </header>
    </div>
  );
}

export default Header;
