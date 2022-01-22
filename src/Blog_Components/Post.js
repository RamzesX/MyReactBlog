import './Post.css';
import Header from './Header.js';
import Flex from './Flex';
import Footer from './Footer.js';
import Modal from './Modal.js';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const react = require("react");




class Post extends react.Component {
  constructor(props) {
    super(props);
    this.state = {html: null};
  }


  getData() {
    fetch(
      "http://localhost:2368/ghost/api/v3/content/posts?key=38c27c6a3b31a3f1362557957f")
                  .then((res) => res.json())
                  .then((json) => {
                    this.renderHtml(json.posts[0].html)
                  })
          }
  renderHtml(html) {
    this.setState({html: html});
    console.log(html)
  }

  render() {
    return (
    <div className="highlevel">
    <Header />
    <Flex />
    <div id="kontenerposta">
        <div id="prawo"> </div>
        <div id="srodek2"> 
        <PostContent html={this.state.html}/>
        </div>
        <div id="lewo"> </div>
    </div>
    <Footer />
    <Modal />
    </div>
    )
  }

  componentDidMount() {
    this.getData()
  }
}

class PostContent extends react.Component {

    constructor(props) {
      super(props);
      this.state = {html: props.html}
    }
  

    render() {
      return (
        <div id ="kon">
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </div>
      )
    }
  }



export default Post;