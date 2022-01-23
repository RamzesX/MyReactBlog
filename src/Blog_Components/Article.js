
import './Article.css';
import { Link } from "react-router-dom";
//import 'foundation-sites/dist/css/foundation.min.css';

const react = require("react");



class Article extends react.Component {

  formatDate(date) {
    return date.slice(0,date.indexOf('T'));
  }

  getPostId(postUrl) {
    return postUrl;
  }


    render () {
        return (
        <article className="poboczne">
          <img alt="obrazek" className="poboczne_img" src={this.props.post.image}/>
          <div className="wrapper5"> 
            <h3> <Link  to={{pathname: '/post?id=' + this.getPostId(this.props.post.id) }}> {this.props.post.title} </Link> </h3>
            <h6> Written by <i>{this.props.post.author} </i> at <b> {this.formatDate(this.props.post.date)} </b> </h6> 
            <p> {this.props.post.description} </p>
          </div>
        </article>
        )
    }
}

export default Article;