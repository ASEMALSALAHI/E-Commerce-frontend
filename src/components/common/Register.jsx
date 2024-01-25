

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
//import axios from '../../AppUrl/axios';
import axios from 'axios';


function Register() {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [password_confirmation, setpassword_confirmation] = useState("");
     const navigate = useNavigate();
     const handleRegister = async (event) => {
          event.preventDefault();
          try{
            const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

           
            axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
           
            axios.defaults.headers.common['Accept'] = 'application/json';
            axios.defaults.headers.common['Content-Type'] = 'application/json';
            axios.defaults.withCredentials = true;


         

               
            
            const response = await axios.post("http://127.0.0.1:8000/api/rregister", {
              name,
                email,
                password,
                password_confirmation
          });

           
           const token = response.data.token;

     
    
      localStorage.setItem('authToken', token);

      console.log(response.data);
           

               navigate('/')

          } catch(error){
               console.error(error)
          }
     };
  return (
    <Container>
      <Row>
        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
          <Row className="text-center">
            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
            <Form onSubmit={handleRegister} className="onboardForm" >
                 <h4 className="section-title-login"> USER REGISTER </h4>
                 <input className="form-control m-2" type="text" value={name}  onChange={(e) => setName(e.target.value) } placeholder="Enter Your Name" />
                 <input className="form-control m-2" type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Enter Your Email" />
                 <input className="form-control m-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
                 <input className="form-control m-2" type="password" value={password_confirmation} onChange={(e) => setpassword_confirmation(e.target.value)} placeholder="Confirm Your Password" />
                 <Button type="submit" className="btn btn-block m-2 site-btn-login"> Sing Up </Button>
                 <br></br> <br></br>
                 <hr />
                 <p> <b> Forget My Password? </b><Link to="/forgetpassword" ><b> Froget Password </b> </Link> </p>
                 <p> <b> Already Have An Account ? </b><Link to="/login"><b> Login </b> </Link> </p>
            </Form>
       </Col>

       
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;








