import "./Nothing.css";
import ArticleLeft from "./ArticleLeft";
import ArticleRight from "./ArticleRight";
import React from 'react';


class Nothing extends React.Component {

  render() {
    return (
        <section id="Nothing">
                <h2 className="naglowek">Nothing Important</h2>
                <div id = "left">
                    <ArticleRight />
                    <ArticleLeft />
                    <ArticleRight />
                    <ArticleLeft />
                </div>
                <div id="numerki">
                    <span className= "klikniety">1</span> <span>2</span> <span>3</span> <span>4</span>
                </div>
        </section>
    )
  }
}



export default Nothing;