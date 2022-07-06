import React, { useState } from "react";
import API from "../api";
const Item = ({ item, onDelete, modificate }) => {
  const [check, setCheck] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item.name);
  console.log(item);
  const handleChange = () => {
    setCheck((prevState) => !prevState);
    item.completed = !item.completed;
  };

  const handleChangeValue = (target) => {
    setValue(target.value);
  };

  const handleEdit = (name, id) => {
    setIsEdit((prevState) => !prevState);
    setValue(name);
    API.tasks.editTask(id, name);
  };

  const setClasses = (modificate, completed) => {
    console.log(modificate, completed);
    if (modificate === "All") return "d-flex";
    else if (modificate === "Completed" && completed) return "d-flex";
    else if (modificate === "Active" && !completed) return "d-flex";
    else return "d-none";
  };

  return (
    <>
      <li
        className={
          `list-group-item justify-content-between align-items-center ` +
          setClasses(modificate, item.completed)
        }
      >
        <input
          className="form-check-input fs-3"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={check}
          onChange={handleChange}
        />
        {isEdit ? (
          <input
            type="text"
            value={value}
            onChange={(e) => handleChangeValue(e.target)}
            className="form-control m-1"
          />
        ) : (
          <p
            className={
              `fs-1 flex-grow-1 d-flex text-wrap` +
              (!check ? "" : ` text-decoration-line-through`)
            }
          >
            {value}
          </p>
        )}
        <div>
          <i
            className="bi bi-pencil p-2"
            onClick={() => handleEdit(value, item.id)}
            role="button"
          ></i>
          <i
            className="bi bi-trash3"
            onClick={() => onDelete(item.id)}
            role="button"
          ></i>
          <p>
            {" "}
            <i className="bi bi-alarm" role="button"></i> data
          </p>
        </div>
      </li>
    </>
  );
};

export default Item;
