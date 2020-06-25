import React from "react";
// import Footer from './Footer';
// import TodoItem from './TodoItem';
// import ContactCard from './ContactCard';
import Jokes from "./Jokes";
import "./App.css";
import jokeData from "./jokeData";

function App() {
  const jokeComponents = jokeData.map((joke) => {
    return (
      <Jokes
        key={joke.id}
        question={joke.question}
        punchLine={joke.punchLine}
      />
    );
  });

  return (
    <div>{jokeComponents}</div>
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
