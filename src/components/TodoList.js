import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const addTodo = (todo) => {
    if (!todo.text || todo.text.length > 45 || todo.text.length === 0) {
      setError(true);
      return;
    }
    const newTodos = [todo, ...todos];
    setError(false);
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (
      !newValue.text ||
      newValue.text.length > 45 ||
      newValue.text.length === 0
    ) {
      setError(true);
      return;
    }
    setError(false);
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <marquee>
        <h1>Todo List</h1>
      </marquee>
      {error ? (
        <p style={{ color: "red", fontWeight: "bold", fontSize: "25px" }}>
          The Task should be of 1-45 words.
        </p>
      ) : (
        <></>
      )}
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
