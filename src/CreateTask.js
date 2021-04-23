import React, { useState } from "react";

const CreateTask = (props) => {
  const [input, setInput] = useState("");

  return (
    <form className="createtask" onSubmit={props.handleSubmit(input)}>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
    </form>
  );
};

export default CreateTask;
