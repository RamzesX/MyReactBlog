import './Article.css';
import './Hot.css';
import Article from './Article';
const react = require("react");


class Posts extends react.Component {


 

  render() {
    return (
        <section id="Hot">
            <div id="po_lewej">
                <h2 className="naglowek">Boring Things</h2>
                <Article/>
                <Article/>
                <Article/>
            </div>
            <div id="po_praswej">
                <div id="po_prawej_wrapper">
                    <h2 className="naglowek">Something More</h2>
                    <Article/>
                    <Article/>
                </div>
                <div id ="border3"></div>
            </div>
        </section>
    )
  }
}



export default Posts;