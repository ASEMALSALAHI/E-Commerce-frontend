
import React, { Component, Fragment } from 'react'
import ProductsDetails from '../components/Products/ProductsDetails'
import { useParams } from 'react-router-dom';

const  ProductDetailsPage = () => {

  const { productdetailsID } = useParams();
  

  const myproductdetailsID = productdetailsID;

  return (
    <div>
      
     
      <h1>SubCategory Page</h1>
      <ProductsDetails myproductdetailsID={myproductdetailsID} />
     
    </div>
  );
};

export default ProductDetailsPage
