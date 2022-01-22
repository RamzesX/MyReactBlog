import "./Nothing.css";
import ArticleLeft from "./ArticleLeft";
import ArticleRight from "./ArticleRight";
import React from 'react';
import ReactPaginate from 'react-paginate';




class Nothing extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      page: 0,
      length: 2,
      title: null
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
    console.log("niestety, ale nadal ida request")
  }

  componentDidUpdate(prevProps) {
    console.log(this.state.page)
  }

  handlePageChange(pageNumber) {

    this.setState({
      page: pageNumber,
      title: pageNumber
    });
  }

  changeContent 

  render() {
    return (
        <section id="Nothing">
                <h2 className="naglowek">Nothing Important</h2>
                <div id = "left">
                    <ArticleRight title={this.state.title}/>
                    <ArticleLeft />
                    <ArticleRight />
                    <ArticleLeft />
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