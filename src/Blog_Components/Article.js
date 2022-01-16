
import './Article.css';
const react = require("react");


class Article extends react.Component {
    render () {
        return (
        <article className="poboczne">
          <img alt="obrazek" className="poboczne_img" src={require('../images/java.png')}/>
          <div className="wrapper5"> 
            <h3> <a href="./post.html"> Javascript event loop </a></h3> 
            <h6> Written by <i>Norbert Marchewka </i> at <b> 22:35 11.23.2016r </b> </h6> 
            <p> Box na pare linijek tresci posta </p>
          </div>
        </article>
        )
    }
}

export default Article;