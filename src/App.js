import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [editText, setEditText] = useState({});

  function handleChange(e) {
    const inputText = e.target.value;
    setText(inputText);
  }

  function handleAdd() {
    const task = { text: text, id: count, editing: false };
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
        return { ...task, editing: !task.editing };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function handleSubmitEdit(id) {}

  function handleEditTextChange(id) {}

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
              X{" "}
            </button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleToggleEdit(task.id)}
            >
              {" "}
              edit{" "}
            </button>
            {task.editing && (
              <div>
                <br />
                <input
                  type="text"
                  placeholder="Write your edited task here :D"
                  onChange={() => handleEditTextChange(task.id)}
                  value={editText[task.id]}
                />
                <button onClick={() => handleSubmitEdit(task.id)}>
                  submit
                </button>
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
