import React from "react"
import ReactDOM  from "react-dom/client"

import './index.css'

const BookList = () => {
  return (
  <section className="booklist">
    <Book/>
    <Book/>
    <Book/>
  </section>
  );
};

const Book = () => {
  return (
  <article  className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/713-J3tw46L._AC_UL300_SR300,200_.jpg"
        alt="Dog Man"/>
      <h2>Dog Man: The Scarlet Shedder: A Graphic Novel</h2>
      <h4> Dav Pilkey</h4>
  </article>
  );
};




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);