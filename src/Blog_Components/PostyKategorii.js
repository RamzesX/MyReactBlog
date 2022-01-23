import './PostyKategorii.css';
import Header from './Header.js';
import Flex from './Flex';
import Footer from './Footer.js';
import Modal from './Modal.js';
import ArticleLeft from './ArticleLeft.js';
import ArticleRight from './ArticleRight.js';

const react = require("react");


class PostyKategorii extends react.Component {

  render() {
    return (
    <div className="highlevel">
    <Header />
    <Flex />
    <div id="kontener">
        <div id="prawo"> </div>
        <div id="srodek">
        </div>
        <div id="lewo"> </div>
    </div>
    <Footer />
    <Modal />
    </div>
    )
  }
}



export default PostyKategorii;