import React from "react";
import "./Navbar.css";

// const Navbar = () => (
const Navbar = props =>(
      <nav class="navbar navbar-expand fixed-top navbar-dark bg-dark">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul id="menu-main-nav" class="navbar-nav nav-fill w-100">
              <li class="nav-item mt-1"><a href="https://balbano80.github.io/mha-clicky-game/"><h2>Clicky Game</h2></a></li>
              <li class="nav-item mt-3"><h4>{props.display}</h4></li>
              <li class="nav-item mt-3"><h4>Score: {props.score} | Top Score: {props.topScore}</h4></li>
            </ul>
          </div>
        </div>
      </nav>
)

export default Navbar;