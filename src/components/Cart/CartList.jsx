// import React, { Component, Fragment } from 'react'
// import { Col, Container,Row,Card,Button } from 'react-bootstrap'
// export class CartList extends Component {
//      render() {
//           return (
//                <Fragment>
//                     <Container fluid={true}>
//                          <Row>
//                               <Col className="p-1" lg={7} md={7} sm={12} xs={12} >
//                                    <Card >
//                                         <Card.Body>
//                                              <Row>
//                                                   <Col md={3} lg={3} sm={6} xs={6}>
//                                                        <img className="cart-product-img" src="http://127.0.0.1:8000/upload/product/1725828427740611.jpeg" />
//                                                   </Col>
//                                                   <Col className='product-name' md={6} lg={6} sm={7} xs={7} >
//                                                        <h5>Home Sizzler 214 cm (7 ft)</h5>
//                                                        <h6> Quantity = 7 </h6>
//                                                        <p>large | Red</p>
//                                                        <h6>Price = 10 x 7 = 10 $</h6>
//                                                   </Col>
//                                                   <Col md={3} lg={3} sm={2} xs={2}>
//                                                        <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i> </Button>
//                                                        <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i> </Button>
//                                                        <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i> </Button>
//                                                   </Col>
//                                              </Row>
//                                         </Card.Body>
//                                    </Card>
//                                    <Card >
//                                         <Card.Body>
//                                              <Row>
//                                                   <Col md={3} lg={3} sm={6} xs={6}>
//                                                        <img className="cart-product-img" src="http://127.0.0.1:8000/upload/product/1725828427740611.jpeg" />
//                                                   </Col>
//                                                   <Col className='product-name' md={6} lg={6} sm={7} xs={7} >
//                                                        <h5>Home Sizzler 214 cm (7 ft)</h5>
//                                                        <h6> Quantity = 7 </h6>
//                                                        <p>large | Red</p>
//                                                        <h6>Price = 10 x 7 = 10 $</h6>
//                                                   </Col>
//                                                   <Col md={3} lg={3} sm={2} xs={2}>
//                                                        <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i> </Button>
//                                                        <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i> </Button>
//                                                        <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i> </Button>
//                                                   </Col>
//                                              </Row>
//                                         </Card.Body>
//                                    </Card>
//                               </Col>
//                               <Col className="p-1" lg={5} md={5} sm={12} xs={12} >
//                                    <Card>

//                                    <Card.Header>
//                                    <h6 className="text-center">Your information</h6>
//                                    </Card.Header>

//                                         <Card.Body>
//                                              <Container fluid={true}>
//                                                   <Row>
//                                                        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
//                                                             <label className="form-label">Choose City</label>
//                                                             <select className="form-control">
//                                                                  <option value="" disabled>Choose</option>
//                                                                  <option value="Istanbul">Istanbul</option>
//                                                                  <option value="Bursa">Bursa </option>
//                                                                  <option value="Konya">Konya </option>
//                                                                  <option value="Izmir">Izmir </option>
//                                                                  <option value="Ankara">Ankara </option>
//                                                             </select>
//                                                        </div>
//                                                        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
//                                                             <label className="form-label">Choose Payment Method</label>
//                                                             <select className="form-control">
//                                                                  <option value="" disabled>Choose</option>
//                                                                  <option value="Istanbul">Cache</option>
//                                                                  <option value="Bursa">Mastercard </option>
//                                                             </select>
//                                                        </div>

//                                                        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
//                                                        <label className="form-label">Your Name</label>
//                                                        <input  className="form-control" type="text" placeholder="your name" />
//                                                   </div>


//                                                   <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
//                                                   <label className="form-label">Delivery Address</label>
//                                                   <textarea  rows={2} className="form-control" type="text" placeholder="your Address" />
//                                              </div>

//                                              <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
//                                              <button  className="btn  site-btn"> confirm order </button>
//                                              </div>







//                                                   </Row>
//                                              </Container>
//                                         </Card.Body>
//                                    </Card>
//                               </Col>
//                          </Row>
//                     </Container>
//                </Fragment>
//           )
//      }
// }

// export default CartList


////////////////////شغغغغغغغغغال
import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
const CartList = () => {
     const [data, setData] = useState([]);
     const [seconddata, setSecondData] = useState([]);
     const [idd, setIdd] = useState([]);
     const [quantity, setQuantity] = useState(1);
     //const [totalprice, setTotalprice] = useState(1);
     const [selectedCity, setSelectedCity] = useState('');
     const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
     const [creditCardNumber, setCreditCardNumber] = useState('');
     const [verificationCode, setVerificationCode] = useState('')
     const [name, setName] = useState('');
     const [address, setAddress] = useState('');
     const [selectedItemId, setSelectedItemId] = useState(null);
     const [cartinfo, setCartinfo] = useState([]);
     //console.log('cartinfoooooooooooooo',cartinfo);

     const turkishCities = [
          'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin', 'Aydın',
          'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı',
          'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep',
          'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 'Kars',
          'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa',
          'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
          'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa',
          'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman',
          'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'
        ];
     
     

     const navigate = useNavigate();
     const [loading, setLoading] = useState(true);
     const [cart, setCart] = useState();

     const handlePaymentMethodChange = (e) => {
          setSelectedPaymentMethod(e.target.value);
        };
        const handleNameChange = (e) => {
          setName(e.target.value);
        };
        const handleAddressChange = (e) => {
          setAddress(e.target.value);
        };
        const handleCityChange = (e) => {
          setSelectedCity(e.target.value);
            };
     
     const confrimorder = (e) =>{
          if (e) {
               e.preventDefault();
             }
          const data1 = {
               
               product_id:cartinfo.id,
               user_id: localStorage.auth_id,
              // product_title : data.title,
             //  product_code: data.product_code,
              // product_size: secondData.size,
               //product_color: secondData.color,
              // product_qty: quantity,
               quantity: quantity,
               total_price: cartinfo.price * quantity,
               name: name,
               email: localStorage.auth_email,
               unit_price: cartinfo.price,
               product_image: cartinfo.image,
               payment_method:selectedPaymentMethod,
               delivery_address: address,
               city: selectedCity,


          }
         // console.log('order',data1);
          axios.post('http://127.0.0.1:8000/api/add_order', data1).then(res=>{
               //console.log('order',data1);
     
               if(res.data.status === 201){
     
                    swal("Success",res.data.message,"success");
                    navigate("/");
                    //history.push("/cardlist");
                    }else if(res.data.status === 401){
                          swal("Error", res.data.message, "error");
                    
                    }else if(res.data.status === 404){
                    
                    swal("Warning",res.data.message, "warning");
                    }
               });
          

     }

///شغالة

     useEffect(() => {
          const fetchData = async () => {
            try {
              const apiUrl = `http://127.0.0.1:8000/api/cart/${localStorage.auth_id}`;
              const response = await fetch(apiUrl);
              const data = await response.json();
              //console.log('resp cart from cart table ',data[0]);
              

        
              // Check if data is an array
             // Check if dataArray is an array and not empty
      if (Array.isArray(data) && data.length > 0) {
          setData(data); // Update this line
          setSelectedItemId(data[0].id);
          setCartinfo(data[0]);
              } else {
                // Handle the case when the API response is not as expected
                setData([]);
                setSelectedItemId(null);
                setCartinfo([]);
              }
            } catch (error) {
              // Handle any errors from the API call
              setData([]);
              setSelectedItemId(null);
            }
          };
        
          fetchData();
          
        }, [localStorage.auth_id]);
        
     //    console.log('product id from cart',data.product_id)
     const deleteCart = async () => {
          try {
            const deleteUrl = `http://127.0.0.1:8000/api/remove_cart/${localStorage.auth_id}`;
            const deleteResponse = await fetch(deleteUrl);
        
          } catch (error) {
            // Handle any errors from the API call
          }
        };
        const handleConfirmOrderClick = async (event) => {
          if (event) {
               event.preventDefault();
             }
             try {
               await deleteCart();
               await confrimorder();
             } catch (error) {
               console.error('Error confirming order:', error);
             }
        };











       if (data.length === 0) {
         return <Container className="text-center" fluid={true}>
         <div className="section-title text-center mb-40">
           <h3> Your Cart Is Empty</h3>
          
         </div>
       </Container>
  // Display a loading message
       }




   
     const View =data.map((item) => {
         // console.log('item',item)
          const handleDecrement = () => {
               if (quantity > 1) {
                 setQuantity(prevCount => prevCount - 1);
                 //calculateTotal();
                 //setTotalprice(item.price * quantity)
               }
               }
               const handleIncrement = () => {
                    if (quantity < 10) {
                      setQuantity(prevCount => prevCount + 1);
                     // calculateTotal();
                      //setTotalprice(item.price * quantity)
                    }
                    }
                   

                         const calculateTotal = () => {
                              // قم بحساب الإجمالي عند كل تغيير في الكمية أو السعر
                              return item.price * quantity;
                             // setTotalprice(item.price * quantity)
                          };
                       

                         
          


         
     

 
          return(

          <Card >
               <Card.Body>
                    <Row>
                         <Col md={3} lg={3} sm={6} xs={6}>
                              <img className="cart-product-img" src={item.image} alt="Product" />
                         </Col>
                         <Col className='product-name' md={6} lg={6} sm={7} xs={7}>
                              <h5>{item.title}</h5>
                              <h6> Quantity : {quantity} </h6>
                             
                              <h6>Price: {item.price}</h6>
                         </Col>
                         <Col md={3} lg={2} sm={2} xs={2}>
          {/*<Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i> </Button>*/ }
                              <Button   onClick={handleIncrement} className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i> </Button>
                              <Button onClick={handleDecrement}  className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i> </Button>
                              

                              <h8> Toplam :{calculateTotal()}</h8>
                           
                             
                             
                         </Col>
                    </Row>
               </Card.Body>
          </Card>
          );
     });
    
    


    

     return (
          <Fragment>
               <Container fluid={true}>
                    <Row>
                         <Col className="p-1" lg={7} md={7} sm={12} xs={12}>
                         <Row>{View}</Row>
                         </Col>
                         <Col className="p-1" lg={5} md={5} sm={12} xs={12}>
                              <Card>
                                   <Card.Header>
                                        <h6 className="text-center">Your information</h6>
                                   </Card.Header>
                                   <Card.Body>
                                        <Container fluid={true}>
                                             <Row>
                                             <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                             <label className="form-label">Choose City</label>
                                             <select 
                                             className="form-control"
                                             onChange={handleCityChange}
                                             >
                                               <option value="" disabled>Choose</option>
                                               {turkishCities.map(city => (
                                                 <option key={city} value={city}>{city}</option>
                                               ))}
                                             </select>
                                           </div>
                                           <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                           <label className="form-label">Choose Payment Method</label>
                                           <select
                                             className="form-control"
                                             value={selectedPaymentMethod}
                                             onChange={handlePaymentMethodChange}
                                           >
                                             <option value="" disabled>Choose</option>
                                             <option value="cash">Cash</option>
                                             <option value="mastercard">Mastercard</option>
                                           </select>
                                         </div>
                                         {selectedPaymentMethod === 'mastercard' && (
                                           <Fragment>
                                             <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                               <label className="form-label">Credit Card Number</label>
                                               <input
                                                 className="form-control"
                                                 type="text"
                                                 placeholder="Enter credit card number"
                                                 value={creditCardNumber}
                                                 onChange={(e) => setCreditCardNumber(e.target.value)}
                                               />
                                             </div>
                                             <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                               <label className="form-label">Verification Code</label>
                                               <input
                                                 className="form-control"
                                                 type="text"
                                                 placeholder="Enter verification code"
                                                 value={verificationCode}
                                                 onChange={(e) => setVerificationCode(e.target.value)}
                                               />
                                             </div>
                                           </Fragment>
                                         )}

                                                  <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                       <label className="form-label">Your Name</label>
                                                       <input className="form-control" type="text"  onChange={handleNameChange} placeholder="your name" />
                                                  </div>

                                                  <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                       <label className="form-label">Delivery Address</label>
                                                       <textarea rows={2} className="form-control" type="text"  onChange={handleAddressChange} placeholder="your Address" />
                                                  </div>

                                                  <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                       <button  onClick={handleConfirmOrderClick} className="btn site-btn"> confirm order </button>
                                                  </div>
                                             </Row>
                                        </Container>
                                   </Card.Body>
                              </Card>
                         </Col>
                    </Row>
               </Container>
          </Fragment>
     );
}
export default CartList;



////////////////////////////شغغغغغغغال


         
          // const handleDecrement = (card_id) => {
          //      setCart(cart =>
          //           cart.map((item) =>
          //                card_id === item.id ? { ...item, product_qty: item.product_qty - (item.product_qty > 1 ? 1 : 0) } : item
          //           )
          //      );
          //     // updateCartQuantity(card_id, "dec");
          // }
          // const handleIncrement = (card_id) => {
          //      setCart(cart =>
          //           cart.map((item) =>
          //                card_id === item.id ? { ...item, product_qty: item.product_qty + (item.product_qty < 10 ? 1 : 0) } : item
          //           )
          //      );
          //     // updateCartQuantity(card_id, "inc");
          // }

          // function updateCartQuantity(card_id, scope) {
          //      axios.put(`/cart-updatequantity/${card_id}/${scope}}`).then(res => {
          //           if (res.data.status === 200) {
          //                swal("Success", res.data.message, "success");
          //           }

          //      });
          // }

          // const View2 =data.map((item2) => {
          //      return ( <h6>  {item2.title}</h6>);
          // });
          


               //شغالة 

     

     // const View =data.map((item) => {
     //      console.log('item',item)
          

         
     //      // const handleDecrement = (card_id) => {
     //      //      setCart(cart =>
     //      //           cart.map((item) =>
     //      //                card_id === item.id ? { ...item, product_qty: item.product_qty - (item.product_qty > 1 ? 1 : 0) } : item
     //      //           )
     //      //      );
     //      //      updateCartQuantity(card_id, "dec");
     //      // }
     //      // const handleIncrement = (card_id) => {
     //      //      setCart(cart =>
     //      //           cart.map((item) =>
     //      //                card_id === item.id ? { ...item, product_qty: item.product_qty + (item.product_qty < 10 ? 1 : 0) } : item
     //      //           )
     //      //      );
     //      //      updateCartQuantity(card_id, "inc");
     //      // }

     //      // function updateCartQuantity(card_id, scope) {
     //      //      axios.put(`/cart-updatequantity/${card_id}/${scope}}`).then(res => {
     //      //           if (res.data.status === 200) {
     //      //                swal("Success", res.data.message, "success");
     //      //           }

     //      //      });
     //      // }

     //      // const View2 =data.map((item2) => {
     //      //      return ( <h6>  {item2.title}</h6>);
     //      // });
          
         
     

 
     //      return(

     //      <Card >
     //           <Card.Body>
     //                <Row>
     //                     <Col md={3} lg={3} sm={6} xs={6}>
     //                          <img className="cart-product-img" src={item.image} alt="Product" />
     //                     </Col>
     //                     <Col className='product-name' md={6} lg={6} sm={7} xs={7}>
     //                          <h5>{item.title}(7 ft)</h5>
     //                          <h6> Quantity {item.product_qty}</h6>
     //                          <p>large | Red</p>
     //                          <h6>Price: {item.price}</h6>
     //                     </Col>
     //                     <Col md={3} lg={3} sm={2} xs={2}>
     //                          <Button className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-trash-alt"></i> </Button>

     //                          {/*<Button onClick={() => handleIncrement(item.id)} className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-plus"></i> </Button>
     // <Button onClick={() => handleDecrement(item.id)} className="btn mt-5 mx-1 btn-sm site-btn"><i className="fa fa-minus"></i> </Button>*/}
     //                     </Col>
     //                </Row>
     //           </Card.Body>
     //      </Card>
     //      );
     // });
   // console.log('product id from cart',data.product_id)


//    const View = data.map((item, index) => {
//      if (index === 0) {
//        // Accessing order information
//        const order = item[0];
//        return (
//          <div key={order.id}>
//            <h5>Order ID: {order.id}</h5>
//            <h6>Quantity: {order.product_qty}</h6>
//            {/* Other order details */}
//          </div>
//        );
//      } else if (index === 1) {
//        // Accessing product information
//        const product = item;
//        return (
//          <Card key={product.id}>
//            <Card.Body>
//              <Row>
//                <Col md={3} lg={3} sm={6} xs={6}>
//                  <img className="cart-product-img" src={product.image} alt="Product" />
//                </Col>
//                <Col className='product-name' md={6} lg={6} sm={7} xs={7}>
//                  <h5>{product.title}(7 ft)</h5>
//                  {/* Other product details */}
//                </Col>
//                {/* Action buttons */}
//              </Row>
//            </Card.Body>
//          </Card>
//        );
//      }
//    });




//شغالة


     //    useEffect(() => {
     //      if (idd) {
     //      const fetchSecondData= async () => {
     //           try {
     //             setLoading(true);
     //             const apiUrl = `http://127.0.0.1:8000/api/product/${idd}`;
     //             const response = await fetch(apiUrl);
     //             const seconddata = await response.json();
     //             console.log('mySecondData',seconddata)
           
     //             // Check if data is an array
     //             if (Array.isArray(seconddata)) {
     //               setSecondData(seconddata[0]); // Assuming the actual array is inside another array
     //             } else {
     //               // Handle the case when the API response is not as expected
     //               setSecondData([]);
     //             }
     //           } catch (error) {
     //             // Handle any errors from the API call
     //             setSecondData([]);
     //           }
     //         };
           

     //      fetchSecondData();
     //      }

     // }, [idd]);
     
       

     // useEffect(() => {
     //      const fetchData = async () => {
     //        try {
     //          const apiUrl = `http://127.0.0.1:8000/api/cart/${localStorage.auth_id}`;
     //          const response = await fetch(apiUrl);
     //          const dataArray = await response.json();
      
     //          if (Array.isArray(dataArray) && dataArray.length > 0) {
     //            setData(dataArray[0]);
     //          } else {
     //            setData([]);
     //          }
     //        } catch (error) {
     //          setData([]);
     //        }
     //      };
          
      
     //      fetchData();
     //    }, [localStorage.auth_id]);
      
     // useEffect(() => {
     //      const fetchData = async () => {
     //        try {
     //          const apiUrl = `http://127.0.0.1:8000/api/cart/${localStorage.auth_id}`;
     //          const response = await fetch(apiUrl);
     //          const data = await response.json();
        
     //          if (Array.isArray(data) && data.length > 0) {
     //            setData(data[0]);
     //          } else {
     //            setData([]);
     //          }
     //        } catch (error) {
     //          setData([]);
     //        }
     //      };
        
     //      const fetchSecondData = async () => {
     //        try {
     //          const secondApiUrl = `http://127.0.0.1:8000/api/product/${data.product_id}`;
     //          const secondResponse = await fetch(secondApiUrl);
     //          const seconddata = await secondResponse.json();
     //          console.log('myddddata', data);
     //          console.log('mySecondddddData', seconddata);
        
     //          if (Array.isArray(seconddata) && seconddata.length > 0) {
     //            setSecondData(seconddata[0]);
     //          } else {
     //            setSecondData([]);
     //          }
     //        } catch (error) {
     //          setSecondData([]);
     //        }
     //      };
        
     //      fetchData();
     //      if (data.product_id) {
     //        fetchSecondData();
     //      }
     //    }, [data.product_id]);



          // useEffect(() => {
     //     let isMounted = true;
     //      axios.get(`http://127.0.0.1:8000/api/cart/${localStorage.auth_id}`).then(res => {
     //           if (isMounted) {
     //                if (res.data.status === 200) {
     //                     setCart(res.data.cart);
     //                     setLoading(false);

     //                }

     //                else if (res.data.status === 401) {
     //                     navigate.push('/');
     //                     swal("Warning", res.data.message, "error");
     //                }
     //           }
     //      });

     //      return () => {
     //           isMounted = false
     //      };
     // }, [navigate]);