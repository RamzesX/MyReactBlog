import "./Header.css";
import { Link } from "react-router-dom";
const react = require("react");


class Header extends react.Component {
  render() {
    return (
      <header>
      <div id="buttony"> 
        <Link to="/posts?normal"  onClick={this.forceUpdate}>
        <button id ="menu">
        </button>
        </Link>
      </div>
  
      <div id="header">
        <a href ="/"> <h1> Tech<div id="wrapper"> <img id="rakieta" src={require('../images/rocket.svg').default} alt="obrazek"/> </div>Authority</h1> </a>
        <ul className="lista4" id="lista">
        <li><Link to="/posts?ml" onClick={this.forceUpdate} > Machine Learning </Link></li>
        <li><Link to="/posts?math" onClick={this.forceUpdate}> Math </Link></li>
        <li><Link to="/posts?qa" onClick={this.forceUpdate}> QA  </Link></li>
        <li><Link to="/posts?iot" onClick={this.forceUpdate}> Internet of Things </Link></li>
        </ul>
      </div>
  
      <div id="kontener-sub">
      <a href="#popup1"> <button id="sub">Contact Me</button> </a>
      </div>
    </header> 
    )
  }
}



export default Header;
