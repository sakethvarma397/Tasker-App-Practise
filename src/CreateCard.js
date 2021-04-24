import React, { useState } from "react";

export const CreateCard = (props) => {
  const [input, setInput] = useState("");
  function handleClick(event) {
    event.preventDefault();
    props.createNewCard(input);
    setInput("");
  }
  return (
    <form className="new-card-form" onSubmit={handleClick}>
      <h4>Create card</h4>
      <input
        type="text"
        className="new-card-input"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <input type="submit" value="create" />
    </form>
  );
};
