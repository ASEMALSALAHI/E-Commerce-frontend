import React, { Component, Fragment } from 'react'
import HomeTop from '../components/home/HomeTop'
import Categories from '../components/home/Categories'
import NewArrival from '../components/home/NewArrival'
import Collection from '../components/home/Collection'
import Products from '../components/home/Products'
import Featured from '../components/home/Featured'

export class HomePage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
     <Fragment>
     <HomeTop/>
      <Categories/>
      
      <Products/>

    </Fragment>
        
    )
  }
}

export default HomePage


