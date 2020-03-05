import React from "react";
import styles from "../App.module.scss"; // this will not register styling for some reason
import cn from "../App";

export const TodoList = ({todosArray, setTodosArray }) => {
    return (
        <div className="todoList">
            {todosArray.map(todo => (
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
            ))}
        </div>
    )
};