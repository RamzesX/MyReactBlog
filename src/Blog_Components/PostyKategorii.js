import './PostyKategorii.css';
import Header from './Header.js';
import Flex from './Flex';
import Footer from './Footer.js';
import Modal from './Modal.js';
import ArticleLeft from './ArticleLeft.js';
import ArticleRight from './ArticleRight.js';
import ListaPostow from './ListaPostow';

const react = require("react");


class PostyKategorii extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href
    };
  }

  getTag(url) {
    
    var tag =  url.slice(url.indexOf('tag=') + 4);
    console.log(tag);
    return tag;
  }



  render() {
    return (
    <div className="highlevel">
    <Header />
    <Flex />
    <div id="kontener">
        <div id="prawo"> </div>
        <div id="srodek">
          <ListaPostow />
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