import './Article.css';
const react = require("react");


class Posts extends react.Component {

  render() {
    return (
        <section id="glowny_kontener">
            <div id="po_lewej">
                <Article/>
            </div>
            <div id="po_prawej">
            </div>
        </section>
    )
  }
}

class Article extends react.Component {
    render () {
        return (
        <article className="poboczne">
          <img alt="obrazek" className="poboczne_img" src={require('../images/java.png').default}/>
          <div className="wrapper5"> 
            <h3> <a href="./post.html"> Javascript event loop </a></h3> 
            <h6> Written by <i>Norbert Marchewka </i> at <b> 22:35 11.23.2016r </b> </h6> 
            <p> Box na pare linijek tresci posta </p>
          </div>
        </article>
        )
    }
}



export default Posts;