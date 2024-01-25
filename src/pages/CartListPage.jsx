
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import CartList from '../components/Cart/CartList';
import { Container } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


const CartListPage = () => {

  
return(
 

 
    <Fragment>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-40">
          <h2> Cart List</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
      </Container>

      <CartList />
    </Fragment>
  )

}

export default CartListPage;

