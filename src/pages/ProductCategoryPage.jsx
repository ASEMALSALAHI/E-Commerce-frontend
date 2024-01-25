



import React, { Component, Fragment } from 'react'
//كان يوجد في الأسفل هذا    <ProductCategory/> بدل كاتيكوري
import ProductCategory from '../components/Products/ProductCategory'
import Categories from '../components/home/Categories'
import { useParams } from 'react-router-dom';

const  ProductCategorePage = () => {
  // استخدم useParams للوصول إلى قيمة الـ ID من الـ router
  const { ProductCategoryID } = useParams();
  

 
  const myProductCategory = ProductCategoryID;
 

  return (
    <div>
     
      
      <h1>ProductCategory page</h1>
      <ProductCategory myProductCategory={myProductCategory} />
    </div>
  );
};
export default ProductCategorePage

