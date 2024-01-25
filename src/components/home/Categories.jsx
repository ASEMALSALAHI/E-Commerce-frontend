


import React, { Component, Fragment } from 'react'
import { Container,Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../assets/css/custom.css"
import Cat1 from '../../assets/images/categories/lights.png'
import AppUrl from '../../AppUrl/AppUrl'
import RestApi from '../../AppUrl/RestApi';
export class categories extends Component {
     constructor() {
          super();
          this.state = {
               data: []
              
          }
     }
     componentDidMount() {
          RestApi.GetRequest(AppUrl.categories)
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
            return (
              <Col lg={2} md={2} sm={6} className='cardMarg' key={item.id}>
                <Link to={"/subcategory/"+item.id}>
                  <Card className="h-100 w-100 text-center   ">
                    <Card.Body>
                      <img className="center" src={item.image} />
                      <h4 className="category-name">{item.name}</h4>
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
                  <h2> CATEGORIES</h2>
                  <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
              </Container>
              <Row>{View}</Row>
            </Fragment>
          );
        }
        
}
  


export default categories

