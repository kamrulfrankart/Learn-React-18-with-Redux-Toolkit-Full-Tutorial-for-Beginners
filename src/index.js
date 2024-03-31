import React from "react"
import ReactDOM  from "react-dom/client"

import './index.css'

const firstBook = {
   author : 'Dav Pilkey',
   title : 'Dog Man: The Scarlet Shedder: A Graphic Novel',
   img : './images/book-1.jpg'  
};


const secondBook = {
  author : 'Jonathan Haidt',
  title : 'The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness',
  img : './images/book-2.jpg'  
};


const BookList = () => {
  return (
  <section className="booklist">
    <Book
     author={firstBook.author} 
     title={firstBook.title} 
     img = {firstBook.img}
     >     
     <p>Our canine superhero returns in DOG MAN: THE SCARLET SHEDDER, the suspenseful and hilarious twelfth graphic novel in the #1 worldwide bestselling series by award-winning author and illustrator Dav Pilkey!</p>
     <button>click</button>
     </Book>
    <Book 
    author={secondBook.author}
     title={secondBook.title} 
     img = {secondBook.img}
     />
  </section>
  );
};


const Book = (props) => {
  const {img, title, author, children} = props;
  console.log(props);
  return (
  <article  className="book">
      <img src= {img} alt = {title}/>
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {children}
  </article>
  );
};




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);