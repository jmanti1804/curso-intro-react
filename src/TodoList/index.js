import React from "react";
import './TodoList.css';

function TodoList(props){
    return (
        <section className="ListContainer">
            <ul className="ListMain">
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};