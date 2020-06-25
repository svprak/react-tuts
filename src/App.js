import React from 'react';
// import Footer from './Footer';
// import TodoItem from './TodoItem';
// import ContactCard from './ContactCard';
import Jokes from './Jokes';
import './App.css';

function App() {
  return (
    <div>
      <Jokes
        question="Why did the chicken commit suicide?"
        punchLine="To get to the other side."
      />
      <Jokes
        question="What’s the difference between England and a tea bag? "
        punchLine="The tea bag stays in the cup longer."
      />
      <Jokes punchLine="I went to the zoo the other day. There was only a dog in it – it was a shihtzu." />
      <Jokes
        question="Have you got anything for wind?"
        punchLine="So he gave me a kite"
      />
      <Jokes punchLine="Act your age, not your shoe size" />
    </div>
    // <div className="todo-list">
    //   <TodoItem /> <TodoItem /> <TodoItem /> <TodoItem /> <TodoItem />
    // </div>
    // <div>
    //Contact
    //   <ContactCard
    //     contact={{
    //       name: 'Whiskerson',
    //       phone: '012 333 444',
    //       email: 'whiskerson@gmail.com',
    //       image: 'http://placekitten.com/300/200',
    //     }}
    //   />

    // </div>
  );
}
export default App;
