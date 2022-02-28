import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    const {
        fecha, totalTodos, completedTodos
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <div className="TodoCounter">
            <h1 className="Name">Hello, Joselo.</h1>
            <h2 className="Counter" >You have completed {completedTodos} of {totalTodos} ToDos</h2>
            <h2 className="Date" >{fecha}</h2>
            </div>
        </React.Fragment>
    );
}

export { TodoCounter };