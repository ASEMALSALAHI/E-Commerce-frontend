import React, { Fragment,useState,useEffect } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

const About = () => {
     const [data, setData] = useState([]);
   
     useEffect(() => {
       const fetchData = async () => {
         try {
           const apiUrl = `http://127.0.0.1:8000/api/siteinfo`;
           const response = await fetch(apiUrl);
           const responseData = await response.json();
   
           if (responseData && responseData.data && typeof responseData.data === 'object') {
             setData(responseData);
           } else {
             setData([]);
           }
         } catch (error) {
           setData([]);
         }
       };
   
       fetchData();
     }, []);
   
     return (
       <Fragment>
         <Container>
           <Row className="p-2">
             <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
               <h4 className="section-title-login">About Us </h4>
               <p className="section-title-contact">About this site {data.data && data.data.about}</p>
     



    <h3>Address</h3>
    <p>
    <p className="section-title-contact"> {data.data && data.data.address}</p>
    </p>

    <h3>Email</h3>
    <p>
    <p className="section-title-contact"> Email: {data.data && data.data.email}</p>
    </p>

    <h3>Copy Right</h3>
    <p>
    <p className="section-title-contact"> {data.data && data.data.copyright}</p>
    </p>
             </Col>
           </Row>
         </Container>
       </Fragment>
     );
   };
   
   export default About;