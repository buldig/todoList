import React, { useState } from "react";
import FilterForm from "./filterForm";
import SortForm from "./sortForm";
import Item from "./item";
const ItemList = ({ tasks, onDelete, onEdit }) => {
  const [modificate, setModificate] = useState("All");
  const handleChange = (value) => {
    setModificate(value);
  };
  return (
    <>
      <div className="mb-4 d-flex align-items-center justify-content-end line-height-5em">
        <FilterForm tasks={tasks} onChange={handleChange} />
        <SortForm />
      </div>

      <div className="mb-4">
        <ul className="list-group">
          {tasks.map((task) => (
            <Item
              key={task.id}
              item={task}
              onDelete={onDelete}
              onEdit={onEdit}
              modificate={modificate}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ItemList;
