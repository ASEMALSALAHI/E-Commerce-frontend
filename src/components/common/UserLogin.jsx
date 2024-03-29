
import React, { Component, Fragment, useState } from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import LoginImg from '../../assets/images/login.webp'

import {Link, useNavigate } from 'react-router-dom'

import swal from 'sweetalert';
import axios from 'axios';





 const UserLogin = () => {
     const navigate = useNavigate();
     const     [loginInput, setLogin] = useState({
     email: "",
     password: "",
     //error_list: [],
});
const handleInput   = (e) => {
     e.persist();
     setLogin((prevLoginInput) => ({
          ...prevLoginInput,
          [e.target.name]: e.target.value,
        }));
}

const loginSubmit = (e) => {
     e.preventDefault();
     const data = {
          email: loginInput.email,
          password: loginInput.password,
     }
    
          axios.post('http://127.0.0.1:8000/api/login',data)
          .then(response => {
      if (response.status === 200) {
          const responseData = response.data; // Access the data from the response
            localStorage.setItem('auth_token', responseData.access_token);
            localStorage.setItem('auth_name', responseData.user.name);
            localStorage.setItem('auth_surname', responseData.user.surname);
            localStorage.setItem('auth_email', responseData.user.email);
            localStorage.setItem('auth_id', responseData.user.id);
            const welcomeMessage = `Logged in , Welcome ${responseData.user.name}`;
  
            swal('Success', welcomeMessage, 'success').then(() => {
            
               setTimeout(() => {
                 window.location.reload();
               }, 500);
             });
          navigate("/");
          
      }
      else  
          console.log(response);
      
     });


}

    return (

      <Container>

      <Row>

           <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                <Row className="text-center">
                     <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>

                          <Form className="onboardForm" onSubmit={loginSubmit} >

                               <h4 className="section-title-login"> USER Login </h4>
                               <input className="form-control m-2" type="email" name='email' onChange={handleInput} value={loginInput.email}  placeholder="Enter Your Email" />

                               <input className="form-control m-2" type="password" name='password' onChange={handleInput} value={loginInput.password}   placeholder="Enter Your Password" />

                               <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>

                               <br></br> <br></br>

                               <hr />

                               <p> <b> Forget My Password? </b><Link to="/forgetpassword" ><b> Froget Password </b> </Link> </p>

                               <p> <b> New User ? </b><Link to="/register" ><b> Register </b> </Link> </p>

                          </Form>

                     </Col>




                     <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>

                          <img className='onboardBanner' src={LoginImg} />

                     </Col>




                </Row>

           </Col>

      </Row>

 </Container>

      

    );
};




export default UserLogin



