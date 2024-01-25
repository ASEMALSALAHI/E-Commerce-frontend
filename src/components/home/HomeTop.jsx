import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HomeSlider from './HomeSlider'
import SideBarMenu from './SideBarMenu'

import one_img from '../../assets/images/products/product1/1m.png'
import two_img from '../../assets/images/products/product1/2m.png'
 import three_img from '../../assets/images/products/product1/3m.png'
import four_img from '../../assets/images/products/product1/4m.png'


export class HomeTop extends Component {
  render() {
    //console.log('AUT',localStorage.getItem('auth_token'))
    return (
      <Fragment>
        <Container className="p-0 pt-2" fluid={true}>
          <Row>
            <Col lg={9} md={9} sm={12}>
              <HomeSlider />
            </Col>
            <Col lg={3} md={3} sm={12} fluid style={{margin:'auto'}}    >
            <div fluid style={{marginTop: '25px',margin:'auto' }} >
           
            <img src={one_img}  fluid style={{  width: '130px', marginBottom: '1px' , padding: '10px', borderRadius:'20px', marginLeft:'40px' }} />
           
            <img src={two_img}  fluid style={{   width: '130px', marginBottom: '1px' , padding: '10px', borderRadius:'20px', marginLeft: '40px' }} />
            </div>
            <div fluid style={{marginTop: '33px' }}>
            <img src={three_img}  fluid style={{  width: '110px', marginBottom: '1px' , padding: '10px', borderRadius:'20px',  marginLeft: '40px' }} />
             <img src={ four_img} fluid style={{  width: '130px', marginBottom: '1px' , padding: '10px', borderRadius:'20px',  marginLeft: '40px'  }}/>
             </div>

       
           
              
                
            </Col>





          </Row>




        </Container>
      </Fragment>
    )
  }
}

export default HomeTop
