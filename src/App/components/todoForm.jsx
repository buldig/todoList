import React, { useState } from "react";

const TodoForm = ({ tasks, handleClick }) => {
  let counter = tasks.length;
  const [value, setValue] = useState("");
  const handleChange = (target) => {
    setValue(target.value);
  };
  const onClick = (id, name) => {
    handleClick([...tasks, { id: id, name: name, completed: false }]);
    setValue("");
  };
  return (
    <>
      <div className="d-flex position-relative">
        <input
          type="text"
          className="form-control"
          onChange={(e) => handleChange(e.target)}
          value={value}
        />

        <i
          className="bi bi-calendar-check position1"
          title="Set a Due date"
        ></i>

        <button
          className="btn btn-primary sm-1"
          id="position2"
          onClick={() => onClick(counter++, value)}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default TodoForm;
