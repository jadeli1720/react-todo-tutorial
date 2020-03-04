import React, { useState } from "react";
import styles from "./App.module.scss";

//this function allows you to give multiple classnames conditionally
//takes in any number of classnames into an array, filter them with the identity function:
//if (x) it's truthy/has a none empty string value, it gets to stay, else it gets taken out and is joined with a space in between
const cn = (...classNames) => classNames.filter(x => x).join(" ");

// console.log("styles module objects", styles)

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
        <TodoList todosArray={todosArray} setTodosArray={setTodosArray} />
      </main>
    </div>
  );
};


const TodoList = ({ todosArray, setTodosArray }) => {
  return (
    <div className="todoList">
      {todosArray.map(todo => (
        <Todo todo={todo} todosArray={todosArray} setTodosArray={setTodosArray} />
      ))}
    </div>
  )
};

const Todo = ({todo, todosArray, setTodosArray }) => {
  return (
    <div
      key={todo.id}
      // if left and right sides of the operator are true, it gives the value on the right
      className={cn(styles.todo, todo.done && styles.done)}
      onClick={() => {
        setTodosArray(
          todosArray.map(t => {
            return t.id === todo.id ? { ...t, done: !t.done } : t;
            //above does the same as below
            // if(t.id === todo.id) {
            //   //making a new version so as not to mutate the original value
            //   return {...t, done: !t.done};
            // } else {
            //   return t
            // }
          })
        );
      }}
    >
      {todo.text}
    </div>
  )
}

export default App;
