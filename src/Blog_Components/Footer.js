import "./Footer.css";
import React from 'react';

class Footer extends React.Component {

  render() {
    return (
        <footer>
            <img alt="obrazek" id="girl" src={require('../images/girl.svg').default}/>
            <div id="content1">
                <h4>Need Help?</h4>
                <ol className="klasa">
                    <li> Privacy Policy </li>
                    <li> Pricing </li>
                    <li> Offers </li>
                    <li> Legal </li>
                </ol>
            </div>
            <div id="content2">
                <h4> Company </h4>
                <ol className="klasa">
                    <li> Projects</li>
                    <li> Services </li>
                    <li> Job Offers </li>
                    <li> Crew </li>
                </ol>
            </div>
            <img alt="obrazek" id="chlopak" src={require('../images/man3.svg').default}/>
            <div id="dane">
                <ol id="dane2" className="klasa">
                    <li> Juliusza Słowackiego 44</li>
                    <li> 00 - 310 Warszawa </li>
                    <li> TechAuthority@gmail.com</li>
                    <li> <span>892 448 654</span> <span> 725 967 297 </span> </li>
                    <li> 
                        <div id="social">
                            <img alt="obrazek" src={require('../images/Linkedin.svg').default}/>
                            <img alt="obrazek" src={require('../images/Facebook.svg').default}/>
                            <img alt="obrazek" src={require('../images/YouTube.svg').default}/>
                        </div>
                    </li>
                </ol>
            </div>
        </footer>
    )
  }
}

export default Footer;