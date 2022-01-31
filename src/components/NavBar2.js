import React from "react";
import "./nav.css";
import Search from "./Search";
function NavBar2(){
    return(
        <div className="main2">
            <div className="logo">
                SHOPCLUES
            </div>
            <div className="searchbar"> 
                <Search/>
            </div>
        <div className="nav_second">
             <ul>
                 <li><a>share</a><i class="fas fa-map-marker-alt"></i></li>
                 <li><a><i class="fas fa-bell"></i></a></li>
                 <li><a><i class="far fa-heart"></i></a></li>
                 <li><a> <i class="fas fa-cart-plus"></i></a></li>
                 <li><a> Signin</a></li>
             </ul>
        </div>
  </div>
    );
}
export default NavBar2;