

import React, { Component, Fragment, useState } from 'react';
import Footer from '../components/common/Footer';
import TopNavbar from '../components/TopNavbar';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import OrderListPage from '../pages/OrderListPage';
import SearchPage from '../pages/SearchPage';
import CartListPage from '../pages/CartListPage';
import FavoratePage from '../pages/FavoratePage';
import NotificationPage from '../pages/NotificationPage';
import LoginPage from '../pages/LoginPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import RegisterPage from '../pages/RegisterPage';
import SubCategoryPage from '../pages/SubCategoryPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ContactPage from '../pages/ContactPage';

import {
    Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Navigate
} from 'react-router-dom';


export class AppRouter extends Component {

  render() {
    
      
    return (
      <Fragment>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<HomePage key={Date.now()} />} />
          <Route path="/search" element={<SearchPage key={Date.now()} />} />
          
          <Route path="/favorate" element={<FavoratePage key={Date.now()} />} />
          <Route path="/notification" element={<NotificationPage key={Date.now()} />} />
          <Route path="/login" element={<LoginPage key={Date.now()} />} />
          <Route path="/forgetpassword" element={<ForgetPasswordPage key={Date.now()} />} />
          <Route path="/register" element={<RegisterPage key={Date.now()} />} />
          <Route path="/subcategory/:subcategoreID" element={<SubCategoryPage key={Date.now()} />} />
          <Route path="/ProductCategory/:ProductCategoryID" element={<ProductCategoryPage key={Date.now()} />}/>
          <Route path="/productdetails/:productdetailsID" element={<ProductDetailsPage key={Date.now()} />}  />
          <Route path="/company" element={<HomePage key={Date.now()} />} />
         
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cardlist" element={localStorage.getItem('auth_token')!==null  ? (<CartListPage key={Date.now()} /> ) : ( <Navigate to="/login" /> ) } />
          <Route path="/profile"  element={ localStorage.getItem('auth_token')!==null  ? (<OrderListPage key={Date.now()} /> ) : ( <Navigate to="/login" /> ) }/>
          <Route path="/contact"  element={ localStorage.getItem('auth_token')!==null  ? (<ContactPage key={Date.now()} /> ) : ( <Navigate to="/login" /> ) }/>
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}

export default AppRouter;
