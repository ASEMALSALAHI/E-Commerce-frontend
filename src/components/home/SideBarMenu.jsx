
import React, { Component } from 'react'
import '../../assets/css/custom.css'
import { Link } from 'react-router-dom'
import Cat1 from '../../assets/images/categories/lights.png'
export class SideBarMenu extends Component {



constructor(){
     super();
     this.Menu=this.Menu.bind(this);



}


componentDidMount(){
     this.Menu();

}



Menu(){
     var acc = document.getElementsByClassName("accordion");
     var accNum = acc.length;
     var i;
     for(i=0;i<accNum;i++){
          acc[i].addEventListener("click",function (){
               this.classList.toggle("active");
               var panel = this.nextElementSibling;
               if(panel.style.maxHeight){
                    panel.style.maxHeight = null;
               }else{
                    panel.style.maxHeight= panel.scrollHeight+ "px"
               }
          })
     }
}




     render() {
          return (
               <div className="accordionMenuDiv">
                    <div className="accordionMenuDivInside">
                         <button className="accordion">
                              <img className="accordionMenuIcon" src={Cat1} /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                              </ul>
                         </div>
                         <button className="accordion">
                         <img className="accordionMenuIcon" src={Cat1} /> Living Room
                    </button>
                    <div className="panel">
                         <ul>
                              <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                              <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                              <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                         </ul>
                    </div>
                    <button className="accordion">
                              <img className="accordionMenuIcon" src={Cat1} /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                              </ul>
                         </div>
                         <button className="accordion">
                              <img className="accordionMenuIcon" src={Cat1} /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                              </ul>
                         </div>
                         <button className="accordion">
                              <img className="accordionMenuIcon" src={Cat1} /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                              </ul>
                         </div>
                         <button className="accordion">
                              <img className="accordionMenuIcon" src={Cat1} /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                              </ul>
                         </div>
                         <button className="accordion">
                              <img className="accordionMenuIcon" src={Cat1} /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                              </ul>
                         </div>
                         <button className="accordion">
                              <img className="accordionMenuIcon" src={Cat1} /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                              </ul>
                         </div>
                         <button className="accordion">
                              <img className="accordionMenuIcon" src={Cat1} /> Living Room
                         </button>
                         <div className="panel">
                              <ul>
                                   <li><Link to="/subcategory"  className="accordionItem" > Sofa</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Beds</Link></li>
                                   <li><Link to="/subcategory" className="accordionItem" > Tv Units </Link></li>
                              </ul>
                         </div>
                    </div>
               </div>
          )
     }
}
export default SideBarMenu
