
import React, { useState, Fragment,useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import swal from 'sweetalert';
const OrderList = () => {
     const [rating, setRating] = useState(null);
    
     const [reviewcomment, setReviewComment] = useState('');
     const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  //const [data1, setData1] = useState([]);
  const [ordersinfo, setOrdersInfo] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

     const handleReviewComment = (e) => {
          setReviewComment(e.target.value);
        };

const StarRating = () => {
  
  const [hover, setHover] = useState(null);

  return (
    <Fragment>
      <form>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <FontAwesomeIcon
                className="star"
                icon={faStar}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setRating(ratingValue)}
                name="rating"
                id='rate'
                value={ratingValue}
              />
            </label>
          );
        })}
        <p className='text-center mt-2'>Your rating is: {rating}</p>
      </form>
    </Fragment>
  );
};


      
  
 

  const handleClose = () => {
    setShow(false);
    sentReview();
  };

  const handleShow = (productId) => {
    setShow(true);
    setSelectedProductId(productId);
  };


  const sentReview= (e) =>{
     if (e) {
          e.preventDefault();
        };
      
     const data1 = {
          
          
          user_id: localStorage.auth_id,
         product_id: selectedProductId,
        // product_name: ordersinfo.product_name,
         reviewer_rating : rating,
          name:  localStorage.auth_name,
          email: localStorage.auth_email,
          reviewer_comments: reviewcomment,


     }
    // console.log('review data:',data1);
     //console.log('message',data1);
     axios.post('http://127.0.0.1:8000/api/addreview', data1).then(res=>{
         // console.log('review data:',data1);

          if(res.data.status === 201){

               swal("Success",res.data.message,"success");
               //navigate("/");
               //history.push("/cardlist");
               }else if(res.data.status === 409){
                     swal("warning", res.data.message, "warning");
               
               }else if(res.data.status === 404){
               
               swal("Warning",res.data.message, "warning");
               }
          });
     

}


//////////////////////////////////////////
  useEffect(() => {
     const fetchData = async () => {
       try {
         const apiUrl = `http://127.0.0.1:8000/api/order/${localStorage.auth_id}`;
         const response = await fetch(apiUrl);
         const data = await response.json();
         //console.log('mydata',data)
   
         // Check if data is an array
         if (Array.isArray(data)) {
           setData(data[0]);
           setOrdersInfo(data[0]); // Assuming the actual array is inside another array
         } else {
           // Handle the case when the API response is not as expected
           setData([]);
         }
       } catch (error) {
         // Handle any errors from the API call
         setData([]);
       }
     };
   
     fetchData();
   }, [localStorage.auth_id]);
 

  const View = data.map((item) => {
    return (
     <Col md={12} lg={12} sm={6} xs={6} className="d-flex justify-content-between  ">
     
     <div className='ms-5' >
     <h5 className="product-name">Product Name :{item.product_name} </h5>
     <h6>product id = {item.product_id}</h6>
    
     <h6>Quantity = {item.quantity}</h6>
     <h6>Price = {item.unit_price} x {item.quantity} = {item.total_price} TL </h6>
     <h6>Status = {item.order_status}</h6>
     <Button onClick={()=>handleShow(item.product_id)} className="btn btn-danger">
                  Post Review
                </Button>
                <hr />
     </div>
     <div className="d-flex justify-content-end ms-5  "  >
     <img className="center" height={125}  src={item.product_image} alt={item.product_image} />
            
    </div>

     

   </Col>
   

   
   

    );
  });

  return (
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2> User Profile </h2>
        </div>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12}>
            <ul className="list-group">
              <li className="list-group-item">{localStorage.auth_name} {localStorage.auth_surname}</li>
              <li className="list-group-item">Email: {localStorage.auth_email}</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="section-title text-center mb-55">
          <h2> Order History by ({localStorage.auth_name}) </h2>
        </div>

        <Card>
          <Card.Body>
            <Row>
              {/* Add your order history items here */}
              <div>
                {View}
                
              </div>

              {/* Add more order history items as needed */}
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
            <label className="form-label">Your Name</label>
            <input className="form-control" type="text" placeholder="Nizar" />
          </div>
          <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
            <label className="form-label">Your Comment</label>
            <textarea rows={2} className="form-control" onChange={handleReviewComment} type="text" placeholder="Your Comment" />
          </div>
          <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
            <label className="form-label">Your review</label>
            <StarRating />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default OrderList;

