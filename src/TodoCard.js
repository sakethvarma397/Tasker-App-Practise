import React, { useState } from "react";
import TodoList from "./TodoList.js";

const TodoCard = (props) => {
  const [input, setInput] = useState("");

  const handleListSubmit = (event) => {
    event.preventDefault();
    props.addList(props.card.id, input);
    setInput("");
  };

  const renderList = () => {
    return props.card.lists.map((list) => {
      return (
        <TodoList
          key={list.id}
          list={list}
          cardId={props.card.id}
          handleListClick={props.handleListClick}
        />
      );
    });
  };

  return (
    <div className="to-do-card">
      <h4>{props.card.id}</h4>
      <form onSubmit={handleListSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
      {renderList()}
    </div>
  );
};

export default TodoCard;
