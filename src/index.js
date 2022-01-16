import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Blog_Components/Header.js';
import Flex from './Blog_Components/Flex';
import Posts from './Blog_Components/Posts.js';
import Nothing from './Blog_Components/Nothing.js';
import Footer from './Blog_Components/Footer.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Flex />
    <Posts />
    <Nothing />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
