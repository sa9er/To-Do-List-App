import React, { useState } from 'react';
import Todo from './Todo';


function TodoList({ todos, setTodos }) {
    return (
        <>

        <div className="TodoList">
        <h1>Todo List</h1>
          
          {todos.map((i, index) => (
            <Todo 
            todos={todos} 
            setTodos={setTodos} 
            text={i.text} 
            key={i.id} 
            i={i} 
            />

          ))}
        </div>
        </>
    );
}

export default TodoList;