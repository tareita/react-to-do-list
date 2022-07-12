import React from "react";

const Task = (props) => {
  return (
    <li class="mb-2">
      {props.task.text}
      <button
        class="btn btn-danger mx-2 btn-sm"
        onClick={() => props.handleDelete(props.task.id)}
      >
        {" "}
        <i class="bi bi-xbox"></i>{" "}
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.handleToggleEdit(props.task.id)}
      >
        {" "}
        <i class="bi bi-pen"></i>{" "}
      </button>
      {props.task.editing && (
        <div>
          <div className="input-group mb-3 mt-3" style={{ width: "300px" }}>
            <input
              type="text"
              placeholder="Write your edited task here :D"
              onChange={(e) => props.handleEditTextChange(e, props.task.id)}
              value={props.task.editText}
              onKeyDown={props.handleKeyDown}
              className="form-control"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              onClick={() => props.handleSubmitEdit(props.task.id)}
              tabIndex="0"
              type="button"
              id="button-addon2"
            >
              <i class="bi bi-hammer"></i>
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Task;
