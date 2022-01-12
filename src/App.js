import "./index.css";
const react = require("react");


class Heading extends react.Component {

  render() {
    return (
      <header>
      <div id="buttony"> 
        <button onClick={() => {window.location.replace('./create.html')}} id ="menu"></button>
        <button onClick={() => {window.location.replace('./posts.html')}} id ="lupka"> </button>
      </div>
  
      <div id="header">
        <a href ="./index.html"> <h1> Tech<div id="wrapper"> <img id="rakieta" src={require('./images/rocket.svg').default} alt="obrazek"/> </div>Authority</h1> </a>
        <ul className="lista4" id="lista">
        <li> <a href="./post.html?post=60f74aecd913fc5d65947f38"> Machine Learning </a> </li>
        <li> <a href="./post.html?post=60f75099d913fc5d65947f42"> Ai </a> </li>
        <li> <a href="./post.html?post=6105ace4601befd8f3442a94"> QA  </a> </li>
        <li> <a href="./post.html?post=60f74526d913fc5d65947f2f"> Internet of Things </a></li>
        </ul>
      </div>
  
      <div id="kontener-sub">
      <a href="#popup1"> <button id="sub">Subscribe</button> </a>
      </div>
    </header> 
    )
  }
}



export default Heading;