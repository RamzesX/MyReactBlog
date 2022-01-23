import './Post.css';
import './PostHeader.css';
import Header from './Header.js';
import Flex from './Flex';
import Footer from './Footer.js';
import Modal from './Modal.js';

const react = require("react");




class Post extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: window.location.href,
      html: null,
      title: null,
      image: null
    };
  }

  getId(url) {
    
    var id =  url.slice(url.indexOf('id=') + 3);
    return id;

  }


  getData() {
    fetch(
      "http://localhost:2368/ghost/api/v3/content/posts/" + this.getId(this.state.url) + "?key=38c27c6a3b31a3f1362557957f")
                  .then((res) => res.json())
                  .then((json) => {
                    this.renderHtml(json.posts[0])
                  })
          }
  renderHtml(post) {
    this.setState({
      html: post.html,
      title: post.title,
      image: post.feature_image

    });
    console.log(post)
  }

  render() {
    return (
    <div className="highlevel">
    <Header />
    <Flex />
    <div id="Naglowek">
      <div id="s"> <h2> {this.state.title} </h2> </div>
      <div id="l"> <img alt="obrazek" src={this.state.image} /></div>
    </div>
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
    this.getData();
    window.scrollTo(0,0);
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