
import React, { useState, useEffect } from 'react';
import { Container, Row, Col,Card } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import main_img from '../../assets/images/products/product1/1.jpeg';
import one_img from '../../assets/images/products/product1/2.jpeg';
import two_img from '../../assets/images/products/product1/3.jpeg';
import three_img from '../../assets/images/products/product1/4.jpeg';
import four_img from '../../assets/images/products/product1/5.jpeg';
import SuggestedProduct from './SuggestedProduct';
import ReviewList from './ReviewList';
//import { useParams } from 'react-router-dom';
import { Link,useNavigate  } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const ProductsDetails = ({myproductdetailsID}) => {
     

const navigate = useNavigate();

const [data, setData] = useState([]);
const [secondData, setSecondData] = useState([]);
const [loading, setLoading] = useState(true);
const [previewImg, setPreviewImg] = useState(data.image);
const [quantity, setQuantity] = useState(1);

const imgOnClick = (event) => {
  let imgSrc = event.target.getAttribute('src');
  setPreviewImg(imgSrc);
};

useEffect(() => {
  const fetchDataAndSecondData = async () => {
    try {
      setLoading(true);

      const apiUrl = `http://127.0.0.1:8000/api/product/${myproductdetailsID}`;
      const dataResponse = await fetch(apiUrl);
      const data = await dataResponse.json();
      //console.log('Response from fetchData:', data);

      if (Array.isArray(data)) {
        setData(data[0]);
      } else {
        setData([]);
      }

      const apiUrlSecond = `http://127.0.0.1:8000/api/productdetails/${myproductdetailsID}`;
      const secondDataResponse = await fetch(apiUrlSecond);
      const secondDataArray = await secondDataResponse.json();
     // console.log('Response from fetchSecondData:', secondDataArray);
      //console.log('قيمة id', localStorage.auth_id);

      if (Array.isArray(secondDataArray) && secondDataArray.length > 0) {
        const secondDataObject = secondDataArray[0][0]; // Access the first element of the inner array
        setSecondData(secondDataObject);
      } else {
        setSecondData([]);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  fetchDataAndSecondData();
}, [myproductdetailsID]);

useEffect(() => {
     if (previewImg === "0") {
       setPreviewImg(data.image);
     }
   }, [previewImg]);
   
   //Quantity Increment
   const handleDecrement = () => {
     if (quantity > 1) {
       setQuantity(prevCount => prevCount - 1);
     }
     }
     const handleIncrement = () => {
          if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1);
          }
          }
          






          const submetAddtocart = (e) =>{
               e.preventDefault();
               const data = {
                    
                    product_id: secondData.product_id,
                    user_id: localStorage.auth_id,
                
                    product_qty: quantity,
               }
               if(  !localStorage.getItem('auth_token') ){
                    swal("Error", "Please Login First", "error");
                    
                    setTimeout(() => {
                         //window.location.reload();
                         navigate("/login");
                       }, 700);
                       
                  }else{
               axios.post('http://127.0.0.1:8000/api/add_to_cart', data).then(res=>{
                    
                    //console.log('السلة',data);
          
                    if(res.data.status === 201){
          
                         swal("Success",res.data.message,"success");
                         navigate("/cardlist");
                         //history.push("/cardlist");
                         
                         }else if(res.data.status === 409){
                         
                         //Already added to cart
                         
                         swal ("Success",res.data.message,"success");
                         
                         } else if(res.data.status === 401){
                               swal("Error", res.data.message, "error");
                         
                         }else if(res.data.status === 404){
                         
                         swal("Warning",res.data.message, "warning");
                         }
                    });}
               

          }




     
          return (
               <Container fluid={true}>

             <div className="breadbody">
                  <Breadcrumb>
                       <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                       <Breadcrumb.Item href="">
                            Library
                       </Breadcrumb.Item>
                       <Breadcrumb.Item>Data</Breadcrumb.Item>
                  </Breadcrumb>
             </div>


             <Row className="p-2">
             <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                  <Row>
                       <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                            <Row className="p-2">
                                 <Col md={2} lg={2} sm={12} xs={12} >
                                      <Col className="p-0 m-0" >
                                      <img onClick={imgOnClick} className="smallimage product-sm-img" src={secondData.image_one} />
                                      </Col>
                                      <Col  className="p-0 m-0" md={12} lg={12} sm={3} xs={3}>
                                      <img onClick={imgOnClick}  className="smallimage product-sm-img"  src={secondData.image_two} />
                                      </Col>
                                      <Col  className="p-0 m-0" md={12} lg={12} sm={3} xs={3}>
                                      <img onClick={imgOnClick} className="smallimage product-sm-img" src={secondData.image_three} />
                                      </Col>
                                      <Col  className="p-0 m-0" md={12} lg={12} sm={3} xs={3}>
                                      <img onClick={imgOnClick} className="smallimage product-sm-img" src={secondData.image_four} />
                                      </Col>
                                 </Col>
                                 
                                  <Col md={10} lg={10} sm={12} xs={10} >
                                 

                                  <InnerImageZoom zoomType={"hover"} zoomScale={1.5} className="main-image"  src={previewImg} />
                                  </Col>
                                 
                            </Row>
                       </Col>
                       <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                            <h5 className="Product-Name">  {data.title}</h5>
                            <h6 className="Product-Name"> Price: {data.price} $ </h6>
                            
                            
                         

                            <div >
                                 <h6 className="mt-2"> Choose Color  </h6>
                                 <select className="form-control form-select">
                                      <option disabled>Choose Color</option>
                                      <option>{secondData.color}</option>
                                      

                                 </select>
                            </div>
                            <div >
                                 <h6 className="mt-2"> Choose Size  </h6>
                                 <select className="form-control form-select">
                                 <option>{secondData.size}</option>
                                

                                 </select>
                            </div>
                    
                             
                            <div className="input-group mt-3">
                                <button className="btn site-btn m-1 " onClick={submetAddtocart}> <i className="fa fa-shopping-cart"></i>  addToCart </button>
                        
                                <Link to="/cardlist" className="user-icon">
                                  <i className="fa fa-share"></i></Link>
                                 <button className="btn btn-secondary m-1"> <i className="fa fa-heart"></i> addToFav </button>
                            </div>
                       </Col>
                  </Row>

                  <Row>
                       <Col className="" md={6} lg={6} sm={12} xs={12}>
                            <h5 className="mt-2"><b>DETAILS</b></h5>
                            <p>{secondData.long_description}</p>
                       </Col>
                       <Col className="" md={6} lg={6} sm={12} xs={12}>
                       <ReviewList/>
                       </Col>
                  </Row>
             </Col>
        </Row>



        </Container>
        
          );
        
      
  
};

export default ProductsDetails