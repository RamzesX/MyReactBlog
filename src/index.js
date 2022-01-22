import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Blog_Components/MainPage.js';
import PostyKategorii from './Blog_Components/PostyKategorii.js';
import Post from './Blog_Components/Post.js';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/posts" element={<PostyKategorii />} />
      <Route exact path="/post" element={<Post />} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
