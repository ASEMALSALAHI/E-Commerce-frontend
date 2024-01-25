import React, { Component, Fragment } from 'react'
import '../src/assets/css/custom.css'
import TopNavbar from './components/TopNavbar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import FavoratePage from './pages/FavoratePage'
import NotificationPage from './pages/NotificationPage'
import CartListPage from './pages/CartListPage'
import OrderListPage from './pages/OrderListPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ForgetPasswordPage from './pages/ForgetPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ProductCategorePage from './pages/ProductCategoryPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import SearchPage from './pages/SearchPage'
import AboutPage from './pages/AboutPage'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from "react-router-dom";

// import axios from 'axios';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';
// axios.defaults.withCredentials = true;


export class App extends Component {
  render() {
    const isAuthenticated = localStorage.getItem('auth_token') 
    return (
      <Fragment>

        <BrowserRouter>
        

         <AppRouter />

        </BrowserRouter>


      </Fragment>
    )
  }
}
export default App