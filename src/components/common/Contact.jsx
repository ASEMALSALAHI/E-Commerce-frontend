
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';


const Contact = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };



  const sentMessage = (e) => {
    e.preventDefault();

    const data1 = {


      user_id: localStorage.auth_id,
      // product_title : data.title,
      //  product_code: data.product_code,
      // product_size: secondData.size,
      //product_color: secondData.color,
      // product_qty: quantity,

      name: name,
      email: localStorage.auth_email,
      message: message,


    }
    //console.log('message',data1);
    axios.post('http://127.0.0.1:8000/api/addmessage', data1).then(res => {
      // console.log('messsage:',data1);

      if (res.data.status === 201) {

        swal("Success", res.data.message, "success");
        navigate("/");
        //history.push("/cardlist");
      } else if (res.data.status === 401) {
        swal("Error", res.data.message, "error");

      } else if (res.data.status === 404) {

        swal("Warning", res.data.message, "warning");
      }
    });


  }


  return (
    <>
      <Container>
        <Row className="p-2">
          <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
            <Row className="text-center">
              <Col className="p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                <br></br><br></br>
              
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3210630882!2d29.341827142585366!3d41.0053702157558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2z2KXYs9i32YbYqNmI2YQ!5e0!3m2!1sar!2str!4v1690544230379!5m2!1sar!2str" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Col>
              <Col className="justify-content-center d-flex" md={6} lg={6} sm={12} xs={12}>
                <Form id="contactForm" className="onboardForm" rows="4" cols="50" >
                  <h4 className="section-title-login">CONTACT WITH US </h4>
                  <h6 className="section-sub-title">Please Contact With Us </h6>
                  <input className="form-control m-2" onChange={handleNameChange} type="text" placeholder="Enter Your Name" />

                  <Form.Control className="form-control m-2" onChange={handleMessageChange} type="text" as="textarea" rows={3} placeholder="your Message" />
                  <Button id="sendBtn" type="submit" onClick={sentMessage} className="btn btn-block m-2 site-btn-login"> Send </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;

