import './Modal.css';
const react = require("react");


class Modal extends react.Component {

  render() {
    return (
        <div id="popup1" className="overlay">
            <div className="popup">
                <h2>Thanks</h2>
                <a className="close" href="#">&times;</a>
                <form action="file:///home/norbert/praca/projekty/Blog2/pages/index.html"></form> 
                <div className="content">
                    I really appreciate the time you spend watching this site.
                    For more information about me please visit:
                    <br/>
                    <br/>
                    https://www.linkedin.com/
                </div>
            </div>
        </div>
    )
  }
}



export default Modal;