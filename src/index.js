import React from "react"
import ReactDOM  from "react-dom/client"

import './index.css'

const books = [
  {
    author : 'Dav Pilkey',
    title : 'Dog Man: The Scarlet Shedder: A Graphic Novel',
    img : './images/book-1.jpg',
    id: 1  
  },
  {
    author : 'Jonathan Haidt',
    title : 'The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness',
    img : './images/book-2.jpg',
    id: 2
  },
];


const BookList = () => {
  return (
  <section className="booklist">
    {books.map((book) => {
      return <Book {...book} key = {book.id}/>;
    })}
  </section>
  );
};


const Book = (props) => {
  const {img, title, author} = props;
  return (
  <article  className="book">
      <img src= {img} alt = {title}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
  </article>
  );
};




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);