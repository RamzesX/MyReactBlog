import './ArticleLeft.css';
const react = require("react");


class ArticleLeft extends react.Component {
    render () {
        return (
        <article className="poboczneleft">
          <img alt="obrazek" className="poboczne_img" src={require('../images/java.png')}/>
          <div className="wrapper5left"> 
            <h3> <a href="./post.html"> Javascript event loop </a></h3> 
            <h6> Written by <i>Norbert Marchewka </i> at <b> 22:35 11.23.2016r </b> </h6> 
            <p> Box na pare linijek tresci posta </p>
          </div>
        </article>
        )
    }
}

export default ArticleLeft;

