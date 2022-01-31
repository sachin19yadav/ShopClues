import React from "react";
import "./nav.css";
function NavBar(){
    return(
       <div className="main">
             <div className="nav_first">
                  <ul>
                      <li><a>sell with Us |</a></li>
                      <li><a> Call Us|</a></li>
                      <li><a> Download App|</a></li>
                      <li><a><i class="fab fa-apple"></i></a></li>
                      <li><a><i class="fab fa-android"></i></a></li>
                      <li><a> <i class="fab fa-windows"></i></a></li>
                  </ul>
             </div>
       </div>
    );
}
export default NavBar;