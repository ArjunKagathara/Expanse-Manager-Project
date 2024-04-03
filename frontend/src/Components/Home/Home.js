import React from "react";
import Logo from "./1.png";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div class="home_page" style={{ backgroundColor: "rgb(222, 173, 197)"}}>
      <div class="main_header">
        <div>
          <h1>EXPENCE MANAGE</h1>
        </div>
        <div class="login_link">
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
      <div class="custom-image">
        <div class="content">
          <p class="first_content">Welcome to expance manage</p>
          <p class="second_content">Please login and start</p>
        </div>
        <div>
          <img class="home_banner" src={Logo} alt="img" />
        </div>
      </div>
      <footer>
        <div class="container">
          <div class="footer-content">
            <p style={{ backgroundColor: "black" }}>
              &copy; 2024 Expance Manager. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
