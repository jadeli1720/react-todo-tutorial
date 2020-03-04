import React, { useState } from "react";
import styles from "./App.module.scss";

//this function allows you to give multiple classnames conditionally
//takes in any number of classnames into an array, filters and then joins them if true
const cn = (...classNames) => classNames.filter(x => x).join(" ");

// console.log("styles module objects", styles)
// These are some sample TODO's so you don't have to add some every time the
// page refreshes
// This is only a sample of what this data could look like. Feel free to play
// around with it.
const initialTodos = [
  {
    id: 1,
    text: "Go grocery shopping",
    done: false
  },
  {
    id: 2,
    text: "Be more humble",
    done: true
  },
  {
    id: 3,
    text: "Walk the dog",
    done: false
  }
];

const App = () => {
  const [todosArray, setTodosArray] = useState(initialTodos);
  return (
    <div>
      <header className={styles.header}>
        <h1>TODO Tracker</h1>
      </header>
      <main className={styles.main}>
        {todosArray.map(todo => (
          <div
            key={todo.id}
            className={cn(styles.todo, todo.done && styles.done)}
          >
            {todo.text}
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
