import React from "react";

const TodoList = (props) => {
  function handleClick(event) {
    event.preventDefault();
    props.handleListClick(props.cardId, props.list.id);
  }
  return (
    <div onClick={handleClick} className="to-do-list-container">
      <h3 className={props.list.completed ? "completed-list" : "to-do-list"}>
        {props.list.id}
        {props.list.completed ? "  ✔️" : null}
      </h3>
    </div>
  );
};

export default TodoList;
