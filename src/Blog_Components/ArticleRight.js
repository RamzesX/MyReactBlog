import './ArticleRight.css';
import { Link } from "react-router-dom";
const react = require("react");


class ArticleRight extends react.Component {

  formatDate(date) {
    return date.slice(0,date.indexOf('T'));
  }

  getPostId(postUrl) {
    return postUrl;
  }

  truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + '...' : str;
  };
  
    render () {
        return (
        <article className="poboczneright">
          <img alt="obrazek" className="poboczne_img" src={this.props.post.image}/>
          <div className="wrapper5right"> 
            <h3>  <Link  to={{pathname: '/post?id=' + this.getPostId(this.props.post.id) }}>{this.props.post.title} </Link></h3> 
            <h6> Written by <i> {this.props.post.author} </i> at <b> {this.formatDate(this.props.post.date)} </b> </h6> 
            <p> {this.truncate(this.props.post.description, 150)} </p>
          </div>
        </article>
        )
    }
}

export default ArticleRight;