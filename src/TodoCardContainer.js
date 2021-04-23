import React from "react";
import TodoCard from "./TodoCard";

const TodoCardContainer = (props) => {
  function renderCards() {
    return props.cards.map((card) => {
      return (
        <TodoCard
          handleListClick={props.handleListClick}
          addList={props.addList}
          key={card.id}
          card={card}
        />
      );
    });
  }

  return <div>{renderCards()}</div>;
};

export default TodoCardContainer;
