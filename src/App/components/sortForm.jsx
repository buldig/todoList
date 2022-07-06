import React from "react";

const SortForm = () => {
  return (
    <>
      <form className="d-flex">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Sort
        </label>
        <select className="form-select m-2" aria-label="Default select example">
          <option defaultValue={true}>Added data</option>
          <option value="Due">Due data</option>
        </select>
        <i className="bi bi-sort-up"></i>
      </form>
    </>
  );
};

export default SortForm;
