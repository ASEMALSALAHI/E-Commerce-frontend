

import React from 'react';
import { Fragment } from 'react';
import { Container, Col, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import '../assets/css/custom.css';
import swal from 'sweetalert';

const TopNavbar = () => {
  const handleLogout = () => {
    
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_surname');
    localStorage.removeItem('auth_name');
    localStorage.removeItem('auth_id');
    localStorage.removeItem('auth_email');
    swal('Success', 'Logged out', 'success').then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });

     
  };
  
  
  var AuthButtons ='';
  if(!localStorage.getItem('auth_token')){
    AuthButtons = (<Fragment>
      <Link to="/login" className="user-icon">
      <i className="fa fa-user"></i>
    </Link>
    </Fragment>
    );
  }
  else{
    AuthButtons = (<Fragment>
      <Link to="/profile" className="user-icon">
      <i className="fa h4 fa-address-card"></i>
    </Link>
    
      <i  onClick={handleLogout}  className=" fa fa-share-square user-icon "></i>
    
    
  </Fragment>
    );
  }
  
  return (
   
      <Navbar variant="light" className="navbar">
        <Container fluid={true}>
          <Col lg={3} md={4} sm={12} xs={12}>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  src={Logo}
                  width="50"
                  height="50"
                  className="d-inline-block "
                  alt="Logo"
                />
              </Link>
              {' '}
              My Site
            </Navbar.Brand>
          </Col>

          <Col lg={4} md={4} sm={12} xs={12}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-0"
                aria-label="Search"
              />
              <Link to="/search" className="Search-btn">
                <i className="fa fa-search"></i>
              </Link>
            </Form>
          </Col>

          <Link to="/cardlist" className="cart-btn">
            <i className="fa fa-shopping-cart"></i> items 
          </Link>
          <Link to="/favorate" href="">
            <i className="fa h4 fa-heart"></i>
            <sup>
              <span className="badge text-white bg-danger"></span>
            </sup>{' '}
          </Link>
    {     /* <Link to="/notification" href="">
            <i className="fa h4 fa-bell"></i>
            <sup>
              <span className="badge text-white bg-danger"></span>
            </sup>{' '}
  </Link>*/}
          {AuthButtons}
        </Container>
      </Navbar>
 
  );
};

export default TopNavbar;




