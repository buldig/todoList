import React from "react";

const FilterForm = ({ tasks, onChange }) => {
  const handleChange = (e) => {
    switch (e.target.value) {
      case "All":
        onChange(e.target.value);
        break;
      case "Completed":
        onChange(e.target.value);
        break;
      case "Active":
        onChange(e.target.value);
        break;
    }
  };
  return (
    <>
      <form className="d-flex">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Filter
        </label>
        <select
          className="form-select text-center w-auto m-2"
          aria-label="Default select example"
          onChange={(e) => handleChange(e, tasks)}
        >
          <option defaultValue={true}>All</option>
          <option value="Completed">Completed</option>
          <option value="Active">Active</option>
          <option value="data">Has due data</option>
        </select>
      </form>
    </>
  );
};

export default FilterForm;
