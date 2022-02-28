import React from "react";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";

function AppUi() {
    const {
        error,
        loading,
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {error && <p>Sorry, something went wrong...</p>}
        {loading && <p>We are loading, don't worry...</p>}
        {(!loading && !searchedTodos.length) && <p>Create your first Task</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUi };
