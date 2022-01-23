import "./Nothing.css";
import ArticleLeft from "./ArticleLeft";
import ArticleRight from "./ArticleRight";
import React from 'react';
import ReactPaginate from 'react-paginate';


class PostDescription {
  constructor(title = "Tytuł Posta", author = "Autor Posta", date = "data",image="obrazek", description ="Opis Posta", url = "./post" ) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.image = image;
    this.description = description;
    this.url = url;
  }
}

 var opisPosta = new PostDescription();

class Nothing extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      page: 0,
      length: 2,
      posty: Array(4).fill(opisPosta)

    }
  }

  getLength() {
    fetch( "http://localhost:2368/ghost/api/v3/content/posts?key=38c27c6a3b31a3f1362557957f")
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              length: json.posts.length,
            });
          })
  }

  componentDidMount () {
    this.getLength();
    this.changeContent();
    console.log("niestety, ale nadal ida request")
  }

  componentDidUpdate(prevProps) {
    console.log(this.state.posty)
  }

  handlePageChange(pageNumber) {
    this.setState({
      page: pageNumber
    });
  }

  changeContent() {
    fetch( "http://localhost:2368/ghost/api/v3/content/posts?key=38c27c6a3b31a3f1362557957f&limit=4&page=" + (this.state.page + 1).toString())
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
      tablica[i] = new PostDescription(postarray[i].title, "Norbert Marchewka", postarray[i].published_at, postarray[i].feature_image,postarray[i].slug,postarray[i].url)
    }
    console.log(tablica)
    return tablica;
  }

  render() {
    return (
        <section id="Nothing">
                <h2 className="naglowek">Nothing Important</h2>
                <div id = "left">
                    <ArticleRight post={this.state.posty[0]}/>
                    <ArticleLeft post={this.state.posty[1]}/>
                    <ArticleRight post={this.state.posty[2]}/>
                    <ArticleLeft post={this.state.posty[3]}/>
                </div> 
                <PaginatedItems itemsPerPage={2} onPageChange={this.handlePageChange} pageCount2={this.state.length}/>
        </section>
    )
  }

  
}


function PaginatedItems({ itemsPerPage , onPageChange,pageCount2}) {

  const handlePageClick = (event) => {
    onPageChange(event.selected);
  };

  return (
    <>
      <ReactPaginate
        className="numerki"
        breakLabel="..."
        nextLabel="->"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount2}
        previousLabel="<-"
        renderOnZeroPageCount={null}
      />
    </>
  );
}


export default Nothing;