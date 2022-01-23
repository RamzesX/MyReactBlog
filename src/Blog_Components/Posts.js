import './Article.css';
import './Hot.css';
import Article from './Article';
const react = require("react");

class PostDescription {
    constructor(title = "Tytuł Posta", author = "Autor Posta", data = "data",image="obrazek", description ="Opis Posta", id = "./post",empty =true ) {
      this.title = title;
      this.author = author;
      this.date = data;
      this.image = image;
      this.description = description;
      this.id = id;
      this.empty = empty;
    }
  }
   var opisPosta = new PostDescription();


class Posts extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
          posty: Array(4).fill(opisPosta)
        }
      }

      componentDidMount () {
        this.changeContent(0);
      }

      changeContent(pageNumber) {
        fetch( "http://localhost:2368/ghost/api/v3/content/posts?key=38c27c6a3b31a3f1362557957f&limit=5&filter=tag:boring&page=" + (pageNumber + 1).toString())
        .then((res) => res.json())
        .then((json) => {
          var posty2 = this.transformPost(json.posts);
          this.setState({
            posty: posty2
          })
        })
      }

      transformPost(postarray) {
        var tablica = Array(4);
        for (let i = 0; i < postarray.length; i++) {
          tablica[i] = new PostDescription(postarray[i].title, "Norbert Marchewka", postarray[i].published_at, postarray[i].feature_image,postarray[i].excerpt,postarray[i].id, false)
        }
    
        for (let i = 0; i < tablica.length; i++) {
          if (tablica[i] === undefined ) {
              tablica[i] = new PostDescription(); } 
        }
        return tablica; 
    }


  render() {
    return (
        <section id="Hot">
            <div id="po_lewej">
                <h2 className="naglowek">Boring Things</h2>
                {!this.state.posty[0].empty ? <Article post={this.state.posty[0]}/> : null}
                {!this.state.posty[0].empty ? <Article post={this.state.posty[1]}/> : null}
                {!this.state.posty[0].empty ? <Article post={this.state.posty[2]}/> : null}
            </div>
            <div id="po_praswej">
                <div id="po_prawej_wrapper">
                    <h2 className="naglowek">Something More</h2>
                    {!this.state.posty[0].empty ? <Article post={this.state.posty[3]}/> : null}
                    {!this.state.posty[0].empty ? <Article post={this.state.posty[4]}/> : null}
                </div>
                <div id ="border3"></div>
            </div>
        </section>
    )
  }
}



export default Posts;