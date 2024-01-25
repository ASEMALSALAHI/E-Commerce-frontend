

import React, { Component, Fragment } from 'react'
import { Container,Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../assets/css/custom.css"
import Cat1 from '../../assets/images/categories/lights.png'
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi';
export class products extends Component {
     constructor() {
          super();
          this.state = {
               data: []
              
          } 
     }
     componentDidMount() {
          RestApi.GetRequest(AppUrl.products)
            .then(response => {
              if (response && response.data && Array.isArray(response.data)) {
                this.setState({ data: response.data });
              } else {
                // Handle the case when the API response is not as expected
                this.setState({ data: [] });
              }
            })
            .catch(error => {
              // Handle any errors from the API call
              this.setState({ data: [] });
            });
        }
        
     render() {
          const { data } = this.state;
          //console.log(data);
        
          // Check if data is empty (not yet fetched)
          if (data.length === 0) {
            return <div>Loading...</div>; // Display a loading message
          }
        
          // Once the data is available, render the categories
          const View = data.map((item) => {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
              stars.push(
                <span key={i}>
                  {i <= item.star ? (
                    <i className="fa fa-star text-warning"></i>
                  ) : (
                    <i className="fa fa-star "></i>
                  )}
                </span>
              );
            }
            return (
              <Col lg={2} md={2} sm={6} key={item.id}>
                <Link to={"/productdetails/"+item.id}>
                  <Card className="h-100 w-100 text-center">
                    <Card.Body>
                      <img className="center" src={item.image} />
                      <h6 className="category-name">{item.title}</h6>
                      <div>{stars}</div>
                      <p className="product-price-on-card">price :{item.price}$</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          });
        
          return (
            <Fragment>
              <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55">
                  <h2> PRODUCTS</h2>
                  <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
              </Container>
              <Row>{View}</Row>
            </Fragment>
          );
        }
        
}
  


export default products

