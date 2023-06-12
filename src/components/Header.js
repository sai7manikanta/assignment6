import {  useState } from "react";
const Title = () => (
    <a href="/">
      <img
        src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
        alt="Food Villa"
        className="logo"
      />
    </a>
  );
  
  //composing component
  const Header = () => {
    const [btnNameReact,setBtnNameReact]=useState("Login");
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="Login" onClick={()=>{
              btnNameReact==="Login"?
              setBtnNameReact("Logout"):setBtnNameReact("Login");
            }}
            >{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;