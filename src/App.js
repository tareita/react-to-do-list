import "./App.css";
import { useState } from "react";
import Task from "./components/Task";

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

  function handleKeyDown(e) {
    console.log(e);
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="App p-3">
      <h1 class="title"> To do list </h1>

      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            handleDelete={handleDelete}
            handleToggleEdit={handleToggleEdit}
            handleEditTextChange={handleEditTextChange}
            handleSubmitEdit={handleSubmitEdit}
            handleKeyDown={handleKeyDown}
          />
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
            onKeyDown={handleKeyDown}
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
