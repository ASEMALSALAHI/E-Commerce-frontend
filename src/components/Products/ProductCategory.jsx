
import React, {  useState, useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import categories from '../home/Categories'
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi';

const ProductCategory = ({ myProductCategory }) => {
     const [data, setData] = useState([]);

   
   useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = `http://127.0.0.1:8000/api/products/${myProductCategory}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            //console.log('mydata',data)
      
            // Check if data is an array
            if (Array.isArray(data)) {
              setData(data[0]); // Assuming the actual array is inside another array
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
      }, [myProductCategory]);
   
      
     
     
   
    
     if (data.length === 0) {
       return <div>Loading...</div>;
     }
   
     
     const View = data.map((item) => {
       return (
         <Col lg={2} md={2} sm={6} key={item.id}>
           <Link to={"/productdetails/"+item.id}>
             <Card className="h-100 w-100 text-center">
               <Card.Body>
                 <img className="center" src={item.image} alt={item.name} />
                 <h4 className="category-name">{item.title}</h4>
               </Card.Body>
             </Card>
           </Link>
         </Col>
       );
     });
   
     return (
       <div>
         
         
   
         <Container className="text-center" fluid>
           <Row>
             <Container className="text-center" fluid>
               <div className="section-title text-center mb-55">
                
               </div>
             </Container>
             <Row>{View}</Row>
           </Row>
         </Container>
       </div>
     );
   };
   

export default ProductCategory
