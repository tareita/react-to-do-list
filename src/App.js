import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleChange(e) {
    const inputText = e.target.value;
    setText(inputText);
  }

  function handleAdd() {
    const task = { text: text, id: count, editing: false, editText: "" };
    setCount(count + 1);
    setText("");
    setTasks([...tasks, task]);
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleToggleEdit(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, editing: !task.editing, editText: task.text };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function handleSubmitEdit(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text: task.editText, editing: false };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function handleEditTextChange(e, id) {
    const editText = e.target.value;
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, editText: editText };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div className="App p-3">
      <h1 class="title"> To do list </h1>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} class="mb-2">
            {task.text}
            <button
              class="btn btn-danger mx-2 btn-sm"
              onClick={() => handleDelete(task.id)}
            >
              {" "}
              <i class="bi bi-xbox"></i>{" "}
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleToggleEdit(task.id)}
            >
              {" "}
              <i class="bi bi-pen"></i>{" "}
            </button>
            {task.editing && (
              <div>
                <div
                  className="input-group mb-3 mt-3"
                  style={{ width: "300px" }}
                >
                  <input
                    type="text"
                    placeholder="Write your edited task here :D"
                    onChange={(e) => handleEditTextChange(e, task.id)}
                    value={task.editText}
                    className="form-control"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleSubmitEdit(task.id)}
                    type="button"
                    id="button-addon2"
                  >
                    <i class="bi bi-hammer"></i>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div>
        <div className="mb-2"> Add to list: </div>
        <div className="input-group mb-3" style={{ width: "300px" }}>
          <input
            type="text"
            onChange={handleChange}
            value={text}
            className="form-control"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            onClick={handleAdd}
            type="button"
            id="button-addon2"
          >
            {" "}
            Add{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
